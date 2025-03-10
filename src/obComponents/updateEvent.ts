import {moment} from 'obsidian';
import {getDailyNote} from 'obsidian-daily-notes-interface';
import fileService from '../services/fileService';
import {TFile} from 'obsidian';
import {waitForInsert} from './createEvent';
import {stringOrDate} from 'react-big-calendar';
// Import from our new API instead of defining locally
import {createTimeRegex, getAllLinesFromFile, extractEventTime, safeExecute} from '../api';

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
    const files = await fileService.getAllFiles();

    // Use our new regex function instead of inline regex
    const timeRegex = createTimeRegex();

    const startTimeString = eventid.slice(0, 13) + '00';
    const originalStartDate = moment(startTimeString, 'YYYYMMDDHHmmSS');

    const dailyNote = getDailyNote(originalStartDate, files);
    if (!dailyNote) {
      throw new Error(`Daily note not found for date: ${originalStartDate.format('YYYY-MM-DD')}`);
    }

    const fileContent = await app.vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContent);

    const eventStartMoment = moment(eventStartDate);
    const eventEndMoment = moment(eventEndDate);
    const originalEndMoment = moment(originalEndDate);

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
      return await waitForInsert(content, eventStartDate, eventEndDate);
    }

    // Format the new event line
    const timeHour = eventStartMoment.format('HH');
    const timeMinute = eventStartMoment.format('mm');

    // Extract the content without any time information
    let cleanContent = content;

    // If the original content is in the new content, we may need to clean it up
    if (originalContent && content.includes(originalContent)) {
      cleanContent = originalContent;
    }

    // Remove any existing time patterns (HH:MM) from the content
    cleanContent = cleanContent.replace(/\d{1,2}:\d{2}/g, '').trim();
    // Remove any existing end time emoji patterns
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

    let newLine = `- ${timeHour}:${timeMinute}`;

    // Add end time if needed
    if (eventEndMoment.isAfter(eventStartMoment)) {
      // Check if the start and end dates are the same
      const sameDay = eventStartMoment.isSame(eventEndMoment, 'day');

      if (sameDay) {
        // For same-day events, use a time range format (HH:MM-HH:MM)
        newLine = `- ${timeHour}:${timeMinute}-${eventEndMoment.format('HH:mm')}`;
      } else {
        // For multi-day events, add the end date with calendar emoji
        newLine = `- ${timeHour}:${timeMinute}`;
        newLine += ` 📅 ${eventEndMoment.format('YYYY-MM-DD')}`;
        // Add end time
        newLine += ` ⏲ ${eventEndMoment.format('HH:mm')}`;
      }
    }

    // Add the clean content
    newLine += ` ${cleanContent}`;

    // Update the file
    fileLines[lineIndex] = newLine;
    const newFileContent = fileLines.join('\n');
    await app.vault.modify(dailyNote, newFileContent);

    // Return the updated event
    return {
      id: eventid,
      title: cleanContent, // Use the clean content as the title
      start: eventStartMoment.toDate(),
      end: eventEndMoment.toDate(),
      allDay: false,
      eventType: eventType || 'default',
    };
  }, 'Failed to update event');
}

/**
 * Gets the file associated with an event
 *
 * @param eventid The ID of the event
 * @returns The file containing the event
 */
export function getFile(eventid: string): TFile {
  return fileService.getFile(eventid);
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
