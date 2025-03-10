import {TFolder, TFile, Notice, App} from 'obsidian';
import {getAllDailyNotes, getDailyNoteSettings, getDateFromFile} from 'obsidian-daily-notes-interface';
import {getAllLinesFromFile} from '@/utils/fileParser';
import {fileService, globalService} from '@/services';
import {BigCalendarSettings} from '@/setting';
import {t} from '@/translations/helper';
import {parseLine, lineContainsParseBelowToken, lineContainsTime, convertToEvent} from './parser';

export class DailyNotesFolderMissingError extends Error {}

export async function getRemainingEvents(note: TFile): Promise<number> {
  return await safeExecute(async () => {
    if (!note) {
      return 0;
    }

    const {vault} = fileService.getState().app;
    const settings = globalService.getState().pluginSetting;
    const fileContents = await vault.read(note);
    const fileLines = getAllLinesFromFile(fileContents);

    // Find the parse below token
    const processHeaderIndex = fileLines.findIndex((line) => lineContainsParseBelowToken(line, settings));

    // If the token is not found, return 0
    if (processHeaderIndex === -1) {
      return 0;
    }

    // Count lines with time information
    let count = 0;
    for (let i = processHeaderIndex === 0 ? 0 : processHeaderIndex + 1; i < fileLines.length; i++) {
      const line = fileLines[i];
      // Stop counting if we hit a new heading
      if (/^#{1,} /g.test(line) && !(settings.ProcessEntriesBelow.trim() === '')) {
        break;
      }

      if (lineContainsTime(line)) {
        count++;
      }
    }

    return count;
  }, 'Failed to get remaining events');
}

export async function getEventsFromDailyNote(
  dailyNote: TFile | null,
  dailyEvents: Model.Event[],
): Promise<Model.Event[]> {
  return await safeExecute(async () => {
    if (!dailyNote) {
      return [];
    }

    const {vault} = fileService.getState().app;
    const settings = globalService.getState().pluginSetting;
    const eventCount = await getRemainingEvents(dailyNote);

    if (!eventCount) {
      return [];
    }

    const fileContents = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContents);
    const startDate = getDateFromFile(dailyNote, 'day');
    const result: Model.Event[] = [];

    // Find the parse below token
    const processHeaderIndex = fileLines.findIndex((line) => lineContainsParseBelowToken(line, settings));

    // If the token is not found, return empty array
    if (processHeaderIndex === -1) {
      return [];
    }

    // Process lines after the parse below token
    let currentIndex = processHeaderIndex === 0 ? 0 : processHeaderIndex + 1;

    while (currentIndex < fileLines.length) {
      const line = fileLines[currentIndex];

      // Stop processing if we hit a new heading
      if (/^#{1,} /g.test(line) && !(settings.ProcessEntriesBelow.trim() === '')) {
        break;
      }

      // Parse the line
      const parsedLine = parseLine(line);

      // Skip lines without time information
      if (lineContainsTime(line)) {
        // Convert to event
        const event = convertToEvent(parsedLine, startDate, currentIndex, dailyNote.path);

        if (event) {
          result.push(event);
          if (dailyEvents) {
            dailyEvents.push(event);
          }
        }
      }

      currentIndex++;
    }

    return result;
  }, 'Failed to get events from daily note');
}

export async function getEvents(app: App): Promise<Model.Event[]> {
  return await safeExecute(async () => {
    const events: Model.Event[] = [];
    const {folder} = getDailyNoteSettings();

    if (!app) return [];

    console.log('fetching');

    const dailyNotesFolder = app.vault.getFolderByPath(folder) as TFolder;
    if (!dailyNotesFolder) {
      new Notice(t('Your daily notes folder is not set correctly. Please check your settings.'));
      return [];
    }

    // Get all daily notes
    const dailyNotes = getAllDailyNotes();

    // Process each daily note
    for (const key in dailyNotes) {
      if (dailyNotes[key] instanceof TFile) {
        await getEventsFromDailyNote(dailyNotes[key], events);
      }
    }

    console.log(events);

    return events;
  }, 'Failed to get events');
}

// Import this function from elsewhere as it's not defined in the existing getEvents.ts code
async function safeExecute<T>(fn: () => Promise<T>, errorMessage: string): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.error(`${errorMessage}: ${error}`);
    throw error;
  }
}
