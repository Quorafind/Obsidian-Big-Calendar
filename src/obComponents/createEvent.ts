import {moment} from 'obsidian';
import {createDailyNote, getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
import {stringOrDate} from 'react-big-calendar';
import {getAllLinesFromFile, safeExecute} from '@/api';
import fileService from '@/services/fileService';
import {globalService} from '@/services';
import {formatEventLine} from './updateEvent';
import {convertToEvent, parseLine} from './parser';

interface MContent {
  content: string;
  posNum?: number;
}

// https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
export function escapeRegExp(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

//credit to chhoumann, original code from: https://github.com/chhoumann/quickadd/blob/7536a120701a626ef010db567cea7cf3018e6c82/src/utility.ts#L130
export function getLinesInString(input: string): string[] {
  const lines: string[] = [];
  let tempString = input;

  while (tempString.contains('\n')) {
    const lineEndIndex = tempString.indexOf('\n');
    lines.push(tempString.slice(0, lineEndIndex));
    tempString = tempString.slice(lineEndIndex + 1);
  }

  if (tempString.length > 0) lines.push(tempString);

  return lines;
}

export async function waitForInsert(
  EventContent: string,
  startDate: stringOrDate,
  endDate: stringOrDate,
): Promise<Model.Event> {
  return await safeExecute(async () => {
    const {vault} = fileService.getState().app;
    const settings = globalService.getState().pluginSetting;

    // Format the date
    const startMoment = startDate instanceof Date ? moment(startDate) : moment(startDate as string);
    const endMoment = endDate instanceof Date ? moment(endDate) : moment(endDate as string);

    // Check if the event spans multiple days
    const isMultiDayEvent = endDate && !startMoment.isSame(endMoment, 'day');

    // Format the content based on event type
    const formattedContent = formatEventLine(
      EventContent,
      startMoment,
      endMoment,
      isMultiDayEvent ? 'TASK-TODO' : 'default',
    );

    // Get or create the daily note and insert the event
    const result = await insertEventIntoNote(startMoment, formattedContent, vault, settings.InsertAfter);
    const parsedLine = parseLine(formattedContent);

    // Convert to event - tasks without time info will be treated as all-day events
    const event = convertToEvent(parsedLine, startMoment, result.lineNum, result.file.path);
    // Create and return the event object
    return event;
  }, 'Failed to create event');
}

/**
 * Inserts event into a daily note
 */
async function insertEventIntoNote(
  startMoment: moment.Moment,
  formattedContent: string,
  vault: any,
  insertAfterSetting: string,
): Promise<{file: any; lineNum: number}> {
  const dailyNotes = await getAllDailyNotes();
  const existingFile = getDailyNote(startMoment, dailyNotes);

  if (!existingFile) {
    // Create a new daily note if it doesn't exist
    const file = await createDailyNote(startMoment);
    const fileContents = await vault.read(file);
    const newFileContent = await insertAfterHandler(insertAfterSetting, formattedContent, fileContents);
    await vault.modify(file, newFileContent.content);

    return {file, lineNum: 1};
  } else {
    // Use existing daily note
    const fileContents = await vault.read(existingFile);
    const fileLines = getAllLinesFromFile(fileContents);

    // Find the line number for the new event
    let lineNum = 1;
    if (fileLines.length > 0) {
      // Count existing events to determine the line number
      let eventCount = 0;
      for (const line of fileLines) {
        if (line.startsWith('- ')) {
          eventCount++;
        }
      }
      lineNum = eventCount + 1;
    }

    // Insert the event into the file
    const newFileContent = await insertAfterHandler(insertAfterSetting, formattedContent, fileContents);
    await vault.modify(existingFile, newFileContent.content);

    return {file: existingFile, lineNum};
  }
}

/**
 * Creates an event object from the given parameters
 */
function createEventObject(
  eventContent: string,
  startMoment: moment.Moment,
  endMoment: moment.Moment,
  startTimeHour: string,
  startTimeMinute: string,
  endDate: stringOrDate,
  isMultiDayEvent: boolean,
  file: any,
  lineNum: number,
): Model.Event {
  const eventId = startMoment.format('YYYYMMDDHHmmss') + lineNum;

  return {
    id: eventId,
    title: eventContent,
    start: new Date(
      startMoment.year(),
      startMoment.month(),
      startMoment.date(),
      parseInt(startTimeHour),
      parseInt(startTimeMinute),
    ),
    end: endDate
      ? new Date(endDate as any)
      : new Date(
          startMoment.year(),
          startMoment.month(),
          startMoment.date(),
          parseInt(startTimeHour) + 1,
          parseInt(startTimeMinute),
        ),
    allDay: isMultiDayEvent,
    eventType: isMultiDayEvent ? 'TASK-TODO' : 'default',
    path: file.path,
  };
}

//credit to chhoumann, original code from: https://github.com/chhoumann/quickadd
export async function insertAfterHandler(
  targetString: string,
  formatted: string,
  fileContent: string,
): Promise<MContent> {
  return await safeExecute(async () => {
    const lines = getLinesInString(fileContent);
    let found = false;
    let pos = 0;

    // Find the position to insert after
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Look for heading content
      if (line.contains(targetString)) {
        found = true;
        pos = i;
        break;
      }
    }

    // If target string not found, insert at the beginning
    if (!found) {
      return {
        content: formatted + '\n' + fileContent,
        posNum: 0,
      };
    }

    // Insert after the found position
    return await insertTextAfterPositionInBody(formatted, fileContent, pos, found);
  }, 'Failed to insert after handler');
}

export async function insertTextAfterPositionInBody(
  text: string,
  body: string,
  pos: number,
  found?: boolean,
): Promise<MContent> {
  return await safeExecute(async () => {
    const lines = getLinesInString(body);

    if (found) {
      // Insert after the specified position
      const targetPosition = pos + 1;
      lines.splice(targetPosition, 0, text);
      return {
        content: lines.join('\n'),
        posNum: targetPosition,
      };
    } else {
      // Insert at the beginning if position not found
      lines.splice(0, 0, text);
      return {
        content: lines.join('\n'),
        posNum: 0,
      };
    }
  }, 'Failed to insert text after position');
}
