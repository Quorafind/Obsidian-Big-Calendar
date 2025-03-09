import {moment} from 'obsidian';
import {createDailyNote, getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
import {stringOrDate} from 'react-big-calendar';
import {getAllLinesFromFile, safeExecute} from '@/api';
import fileService from '@/services/fileService';
import {globalService} from '@/services';

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
    let lineNum: number;

    // Format the date
    const date = startDate instanceof Date ? moment(startDate) : moment(startDate as string);
    const timeHour = date.format('HH');
    const timeMinute = date.format('mm');

    // Format the event content
    const formattedContent = `- ${timeHour}:${timeMinute} ${EventContent}`;

    // Get or create the daily note for this date
    const dailyNotes = await getAllDailyNotes();
    const existingFile = getDailyNote(date, dailyNotes);

    if (!existingFile) {
      // Create a new daily note if it doesn't exist
      const file = await createDailyNote(date);
      const fileContents = await vault.read(file);
      const newFileContent = await insertAfterHandler(settings.InsertAfter, formattedContent, fileContents);
      await vault.modify(file, newFileContent.content);

      // Create and return the event object
      const eventId = date.format('YYYYMMDDHHmmss') + '1';
      return {
        id: eventId,
        title: EventContent,
        start: new Date(date.year(), date.month(), date.date(), parseInt(timeHour), parseInt(timeMinute)),
        end: endDate
          ? new Date(endDate as any)
          : new Date(date.year(), date.month(), date.date(), parseInt(timeHour) + 1, parseInt(timeMinute)),
        allDay: false,
        eventType: 'default',
      };
    } else {
      // Use existing daily note
      const fileContents = await vault.read(existingFile);
      const fileLines = getAllLinesFromFile(fileContents);

      // Find the line number for the new event
      if (fileLines.length === 0) {
        lineNum = 1;
      } else {
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
      const newFileContent = await insertAfterHandler(settings.InsertAfter, formattedContent, fileContents);
      await vault.modify(existingFile, newFileContent.content);

      // Create and return the event object
      const eventId = date.format('YYYYMMDDHHmmss') + lineNum;
      return {
        id: eventId,
        title: EventContent,
        start: new Date(date.year(), date.month(), date.date(), parseInt(timeHour), parseInt(timeMinute)),
        end: endDate
          ? new Date(endDate as any)
          : new Date(date.year(), date.month(), date.date(), parseInt(timeHour) + 1, parseInt(timeMinute)),
        allDay: false,
        eventType: 'default',
      };
    }
  }, 'Failed to create event');
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
