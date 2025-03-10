import {moment} from 'obsidian';
import {TFile, App} from 'obsidian';
import fileService from '../services/fileService';
import {waitForInsert} from './createEvent';
import {stringOrDate} from 'react-big-calendar';
// Import from our new API instead of defining locally
import {createTimeRegex, getAllLinesFromFile, extractEventTime, safeExecute} from '../api';
import eventService from '../services/eventService';
// Import getDailyNote from obsidian-daily-notes-interface
import {getDailyNote, getAllDailyNotes} from 'obsidian-daily-notes-interface';

/**
 * Changes an existing event with new content and dates
 *
 * @param eventid The ID of the event to change
 * @param originalContent The original content of the event
 * @param content The new content for the event
 * @param eventType The type of the event
 * @param eventStartDate The new start date
 * @param eventEndDate The new end date
 * @param originalEndDate The original end date
 * @returns Promise resolving to the updated event
 */
export async function changeEvent(
  eventid: string,
  originalContent: string,
  content: string,
  eventType: string,
  eventStartDate: stringOrDate,
  eventEndDate: stringOrDate,
  originalEndDate: Date,
): Promise<Model.Event> {
  return await safeExecute(async () => {
    const {app} = fileService.getState();
    const files = await getAllDailyNotes();

    // Parse dates
    const startTimeString = eventid.slice(0, 13) + '00';
    const originalStartDate = moment(startTimeString, 'YYYYMMDDHHmmSS');
    const eventStartMoment = moment(eventStartDate);
    const eventEndMoment = moment(eventEndDate);
    const originalEndMoment = moment(originalEndDate);

    // Check what has changed
    const startDateChanged = !originalStartDate.isSame(eventStartMoment, 'day');
    const endDateChanged = !originalEndMoment.isSame(eventEndMoment, 'day');
    const sameDayEvent = eventStartMoment.isSame(eventEndMoment, 'day');
    const timeIntervalChanged =
      !eventStartMoment.isSame(originalStartDate, 'minute') || !eventEndMoment.isSame(originalEndMoment, 'minute');

    // 保存原始事件ID，用于后续状态更新
    const originalEventId = eventid;
    let result: Model.Event;

    // Case 1: Only time interval changed, dates remain the same
    if (timeIntervalChanged && !startDateChanged && !endDateChanged) {
      result = await updateTimeIntervalOnly(
        eventid,
        originalContent,
        content,
        eventType,
        originalStartDate,
        eventStartMoment,
        eventEndMoment,
        files,
        app,
      );
    }
    // Case 2: Only end date changed
    else if (!startDateChanged && endDateChanged) {
      result = await updateEndDateOnly(
        eventid,
        originalContent,
        content,
        eventType,
        originalStartDate,
        eventStartMoment,
        eventEndMoment,
        files,
        app,
      );
    }
    // Case 3: Both start and end dates changed
    else if (startDateChanged) {
      result = await moveEventToNewDay(
        eventid,
        originalContent,
        content,
        eventType,
        originalStartDate,
        eventStartMoment,
        eventEndMoment,
        sameDayEvent,
        files,
        app,
      );
    }
    // Fallback - should not normally reach here
    else {
      result = await updateTimeIntervalOnly(
        eventid,
        originalContent,
        content,
        eventType,
        originalStartDate,
        eventStartMoment,
        eventEndMoment,
        files,
        app,
      );
    }

    // 添加原始事件ID到结果中，帮助状态管理跟踪
    return {
      ...result,
      originalEventId: originalEventId,
    };
  }, 'Failed to update event');
}

/**
 * Updates only the time interval of an event
 * Case 1: Start and end dates remain the same, only time interval changed
 */
async function updateTimeIntervalOnly(
  eventid: string,
  originalContent: string,
  content: string,
  eventType: string,
  originalStartDate: moment.Moment,
  eventStartMoment: moment.Moment,
  eventEndMoment: moment.Moment,
  files: Record<string, TFile>,
  app: App,
): Promise<Model.Event> {
  // Get the original daily note
  const dailyNote = getDailyNote(originalStartDate, files);
  if (!dailyNote) {
    throw new Error(`Daily note not found for date: ${originalStartDate.format('YYYY-MM-DD')}`);
  }

  // Read file content
  const fileContent = await app.vault.read(dailyNote);
  const fileLines = getAllLinesFromFile(fileContent);

  // Use our new regex function instead of inline regex
  const timeRegex = createTimeRegex();

  // Find the line with the event
  let lineIndex = -1;
  let originalLine = '';

  for (let i = 0; i < fileLines.length; i++) {
    const line = fileLines[i];
    if (line.includes(originalContent) || (line.startsWith('- ') && timeRegex.test(line))) {
      const timeInfo = extractEventTime(line);
      if (timeInfo) {
        const {hour, minute} = timeInfo;
        const lineTime = moment(originalStartDate).set({hour, minute});

        if (lineTime.format('YYYYMMDDHHmm') === eventid.slice(0, 12)) {
          lineIndex = i;
          originalLine = line;
          break;
        }
      }
    }
  }

  if (lineIndex === -1) {
    // If we can't find the event in the original file, create a new one
    return await waitForInsert(content, eventStartMoment.toDate(), eventEndMoment.toDate());
  }

  // Format the new event line with updated time interval
  const cleanContent = cleanEventContent(originalContent, content);
  const newLine = formatEventLine(cleanContent, eventStartMoment, eventEndMoment);

  // Update the file
  fileLines[lineIndex] = newLine;
  const newFileContent = fileLines.join('\n');
  await app.vault.modify(dailyNote, newFileContent);

  // Return the updated event
  return {
    id: eventid,
    title: cleanContent,
    start: eventStartMoment.toDate(),
    end: eventEndMoment.toDate(),
    allDay: false,
    eventType: eventType || 'default',
  };
}

/**
 * Updates only the end date of an event
 * Case 2: Start date remains the same, only end date changed
 */
async function updateEndDateOnly(
  eventid: string,
  originalContent: string,
  content: string,
  eventType: string,
  originalStartDate: moment.Moment,
  eventStartMoment: moment.Moment,
  eventEndMoment: moment.Moment,
  files: Record<string, TFile>,
  app: App,
): Promise<Model.Event> {
  // This is similar to Case 1, but makes sure to update end date reference
  const dailyNote = getDailyNote(originalStartDate, files);
  if (!dailyNote) {
    throw new Error(`Daily note not found for date: ${originalStartDate.format('YYYY-MM-DD')}`);
  }

  // Read file content
  const fileContent = await app.vault.read(dailyNote);
  const fileLines = getAllLinesFromFile(fileContent);

  // Use our new regex function
  const timeRegex = createTimeRegex();

  // Find the line with the event
  let lineIndex = -1;
  let originalLine = '';

  for (let i = 0; i < fileLines.length; i++) {
    const line = fileLines[i];
    if (line.includes(originalContent) || (line.startsWith('- ') && timeRegex.test(line))) {
      const timeInfo = extractEventTime(line);
      if (timeInfo) {
        const {hour, minute} = timeInfo;
        const lineTime = moment(originalStartDate).set({hour, minute});

        if (lineTime.format('YYYYMMDDHHmm') === eventid.slice(0, 12)) {
          lineIndex = i;
          originalLine = line;
          break;
        }
      }
    }
  }

  if (lineIndex === -1) {
    // If we can't find the event in the original file, create a new one
    return await waitForInsert(content, eventStartMoment.toDate(), eventEndMoment.toDate());
  }

  // Clean content and format with new end date
  const cleanContent = cleanEventContent(originalContent, content);

  // Force same-day event formatting if start and end dates are on the same day
  // This will ensure it uses the "HH:MM-HH:MM" format instead of adding date emojis
  const sameDay = eventStartMoment.isSame(eventEndMoment, 'day');
  let newLine;

  if (sameDay) {
    // For same-day events, manually format with time range
    const startTime = eventStartMoment.format('HH:mm');
    const endTime = eventEndMoment.format('HH:mm');
    newLine = `- ${startTime}-${endTime} ${cleanContent}`;
  } else {
    // Otherwise use the standard formatting function
    newLine = formatEventLine(cleanContent, eventStartMoment, eventEndMoment);
  }

  // Update the file
  fileLines[lineIndex] = newLine;
  const newFileContent = fileLines.join('\n');
  await app.vault.modify(dailyNote, newFileContent);

  // Return the updated event
  return {
    id: eventid,
    title: cleanContent,
    start: eventStartMoment.toDate(),
    end: eventEndMoment.toDate(),
    allDay: false,
    eventType: eventType || 'default',
  };
}

/**
 * Moves an event to a new day
 * Case 3: Start date changed (and possibly end date too)
 */
async function moveEventToNewDay(
  eventid: string,
  originalContent: string,
  content: string,
  eventType: string,
  originalStartDate: moment.Moment,
  eventStartMoment: moment.Moment,
  eventEndMoment: moment.Moment,
  sameDayEvent: boolean,
  files: Record<string, TFile>,
  app: App,
): Promise<Model.Event> {
  // Get the original daily note
  const originalDailyNote = getDailyNote(originalStartDate, files);
  if (!originalDailyNote) {
    throw new Error(`Original daily note not found for date: ${originalStartDate.format('YYYY-MM-DD')}`);
  }

  // Read original file content
  const fileContent = await app.vault.read(originalDailyNote);
  const fileLines = getAllLinesFromFile(fileContent);

  // Use our new regex function
  const timeRegex = createTimeRegex();

  // Find the line with the event
  let lineIndex = -1;
  let originalLine = '';

  for (let i = 0; i < fileLines.length; i++) {
    const line = fileLines[i];
    if (line.includes(originalContent) || (line.startsWith('- ') && timeRegex.test(line))) {
      const timeInfo = extractEventTime(line);
      if (timeInfo) {
        const {hour, minute} = timeInfo;
        const lineTime = moment(originalStartDate).set({hour, minute});

        if (lineTime.format('YYYYMMDDHHmm') === eventid.slice(0, 12)) {
          lineIndex = i;
          originalLine = line;
          break;
        }
      }
    }
  }

  if (lineIndex === -1) {
    // If we can't find the event in the original file, create a new one
    return await waitForInsert(content, eventStartMoment.toDate(), eventEndMoment.toDate());
  }

  // Remove the event from the old file
  fileLines.splice(lineIndex, 1);
  const newFileContent = fileLines.join('\n');
  await app.vault.modify(originalDailyNote, newFileContent);

  // Clean the content
  let cleanContent = content;

  // Remove any existing time patterns
  cleanContent = cleanContent.replace(/^\d{1,2}:\d{2}(-\d{1,2}:\d{2})?\s+/, '').trim();
  // Remove any existing end time patterns
  cleanContent = cleanContent.replace(/⏲\s?\d{1,2}:\d{2}/g, '').trim();
  // Remove any existing date patterns
  cleanContent = cleanContent.replace(/📅\s?\d{4}-\d{2}-\d{2}/g, '').trim();

  // Create a new event in the new day's note
  const newEvent = await waitForInsert(cleanContent, eventStartMoment.toDate(), eventEndMoment.toDate());

  // Preserve the original event type instead of using the default
  if (eventType && eventType !== 'default') {
    newEvent.eventType = eventType;
  }

  // Add originalEventId to track the relationship between old and new events
  (newEvent as Model.Event).originalEventId = eventid;

  // 完全移除在这里的状态管理代码
  // 这部分工作应该由eventService.editEvent统一处理
  // eventService.getState().deleteEventById(eventid);

  return newEvent;
}

/**
 * Cleans the event content by removing time and date information
 */
function cleanEventContent(originalContent: string, content: string): string {
  let cleanContent = content;

  // If the original content is in the new content, we may need to clean it up
  if (originalContent && content.includes(originalContent)) {
    cleanContent = originalContent;
  }

  // Remove any existing time patterns
  cleanContent = cleanContent.replace(/^\d{1,2}:\d{2}(-\d{1,2}:\d{2})?\s+/, '').trim();
  // Remove any existing end time patterns
  cleanContent = cleanContent.replace(/⏲\s?\d{1,2}:\d{2}/g, '').trim();
  // Remove any existing date patterns
  cleanContent = cleanContent.replace(/📅\s?\d{4}-\d{2}-\d{2}/g, '').trim();
  // Remove any time range patterns
  cleanContent = cleanContent.replace(/\d{1,2}:\d{2}-\d{1,2}:\d{2}/g, '').trim();

  // If the cleaned content is different from the original input content,
  // and it doesn't seem like a cleanup of the originalContent, use the input content
  if (cleanContent !== content && !originalContent.includes(cleanContent)) {
    cleanContent = content.replace(/^\d{1,2}:\d{2}(-\d{1,2}:\d{2})?\s+/, '').trim();
  }

  return cleanContent;
}

/**
 * Formats an event line with the provided content and timestamps
 */
function formatEventLine(cleanContent: string, startMoment: moment.Moment, endMoment: moment.Moment): string {
  const timeHour = startMoment.format('HH');
  const timeMinute = startMoment.format('mm');

  // Extract block ID if present
  const blockIdMatch = cleanContent.match(/\s(\^[a-zA-Z0-9]{2,})$/);
  const blockId = blockIdMatch ? blockIdMatch[1] : '';

  // Remove block ID from content for processing
  let processedContent = blockId ? cleanContent.replace(blockIdMatch[0], '') : cleanContent;

  let newLine = `- ${timeHour}:${timeMinute} ${processedContent}`;

  // Add end time if needed
  if (endMoment.isAfter(startMoment)) {
    // Check if the start and end dates are the same
    const sameDay = startMoment.isSame(endMoment, 'day');

    if (sameDay) {
      // For same-day events, use a time range format (HH:MM-HH:MM)
      newLine = `- ${timeHour}:${timeMinute}-${endMoment.format('HH:mm')} ${processedContent}`;
    } else {
      // For multi-day events, add the end date with calendar emoji
      newLine = `- ${timeHour}:${timeMinute} ${processedContent}`;
      newLine += ` 📅 ${endMoment.format('YYYY-MM-DD')}`;
      // Add end time
      newLine += ` ⏲ ${endMoment.format('HH:mm')}`;
    }
  }

  // Add block ID back at the end if it exists
  if (blockId) {
    newLine += ` ${blockId}`;
  }

  return newLine;
}

/**
 * Gets the file associated with an event
 *
 * @param eventid The ID of the event
 * @returns The file containing the event
 */
export function getFile(event: Model.Event): TFile {
  return fileService.getFile(event);
}

/**
 * Gets the path to the daily notes folder
 *
 * @returns The path to the daily notes folder
 */
export function getDailyNotePath(): string {
  return fileService.getDailyNotePath();
}

/**
 * Extracts the end hour from a line
 *
 * @param line The line to extract from
 * @returns The end hour or 0 if not found
 */
export function extractEventEndHourFromLine(line: string): number {
  // First check for the time range format (HH:MM-HH:MM)
  const rangeMatch = /(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})/.exec(line);
  if (rangeMatch) {
    return parseInt(rangeMatch[3]);
  }

  // Then try the timer emoji format
  const match = /⏲\s?(\d{1,2}):(\d{2})/.exec(line);
  return match ? parseInt(match[1]) : 0;
}

/**
 * Extracts the end minute from a line
 *
 * @param line The line to extract from
 * @returns The end minute or 0 if not found
 */
export function extractEventEndMinFromLine(line: string): number {
  // First check for the time range format (HH:MM-HH:MM)
  const rangeMatch = /(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})/.exec(line);
  if (rangeMatch) {
    return parseInt(rangeMatch[4]);
  }

  // Then try the timer emoji format
  const match = /⏲\s?(\d{1,2}):(\d{2})/.exec(line);
  return match ? parseInt(match[2]) : 0;
}
