import {moment} from 'obsidian';
import {getDailyNote, getDailyNoteSettings} from 'obsidian-daily-notes-interface';
// import appStore from "../stores/appStore";
import fileService from '../services/fileService';
import eventService from '../services/eventService';
import {TFile} from 'obsidian';
import {waitForInsert} from './createEvent';
import {stringOrDate} from 'react-big-calendar';
// Import from our new API instead of defining locally
import {
  createTimeRegex,
  getAllLinesFromFile,
  extractEventTime,
  ifDueDate,
  getDueLabel,
  getDueDate,
  safeExecute,
  createDateTimeExtractor,
} from '../api';

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
    const idString = parseInt(eventid.slice(14));

    // Use our new regex function instead of inline regex
    const haveEndTime = createTimeRegex().test(originalContent);

    const startTimeString = eventid.slice(0, 13) + '00';
    const originalStartDate = moment(startTimeString, 'YYYYMMDDHHmmSS');
    const originalEndDateMoment = moment(originalEndDate);

    const dailyNote = getDailyNote(originalStartDate, files);
    if (!dailyNote) {
      throw new Error(`Daily note not found for date: ${originalStartDate.format('YYYY-MM-DD')}`);
    }

    const fileContent = await app.vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContent);

    const eventStartMoment = moment(eventStartDate);
    const eventEndMoment = moment(eventEndDate);

    // Find the line with the event
    let lineIndex = -1;
    let originalLine = '';

    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      if (line.includes(originalContent) || (line.startsWith('- ') && createTimeRegex().test(line))) {
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
    let newLine = `- ${timeHour}:${timeMinute} ${content}`;

    // Add end time if needed
    if (eventEndMoment.isAfter(eventStartMoment)) {
      if (eventEndMoment.diff(eventStartMoment, 'days') > 0) {
        // Multi-day event
        newLine += ` 📅 ${eventEndMoment.format('YYYY-MM-DD')}`;
      }

      // Add end time
      newLine += ` ⏲ ${eventEndMoment.format('HH:mm')}`;
    }

    // Update the file
    fileLines[lineIndex] = newLine;
    const newFileContent = fileLines.join('\n');
    await app.vault.modify(dailyNote, newFileContent);

    // Return the updated event
    return {
      id: eventid,
      title: content,
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
  const match = /⏲\s?(\d{1,2})\:(\d{2})/.exec(line);
  return match ? parseInt(match[1]) : 0;
}

/**
 * Extracts the end minute from a line
 *
 * @param line The line to extract from
 * @returns The end minute or 0 if not found
 */
export function extractEventEndMinFromLine(line: string): number {
  const match = /⏲\s?(\d{1,2})\:(\d{2})/.exec(line);
  return match ? parseInt(match[2]) : 0;
}
