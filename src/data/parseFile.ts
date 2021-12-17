import { normalizePath, TFolder, Vault,TFile } from "obsidian";
import { getAllDailyNotes,getDailyNoteSettings,getDateFromFile, getDailyNote } from "obsidian-daily-notes-interface";

export class DailyNotesFolderMissingError extends Error {}


export async function getRemainingTasks(note: TFile): Promise<number> {
  if (!note) {
    return 0;
  }
  const { vault } = window.app;
  const fileContents = await vault.cachedRead(note);
  //eslint-disable-next-line
  return (fileContents.match(/(-|\*) (\[ \]\s)?((\<time\>)?\d{1,2}\:\d{2})?/g) || []).length;
}

export async function getTasksForDailyNote(
  dailyNote: TFile | null
): Promise<any[]> {
  if (!dailyNote) {
    return [];
  }
  const { vault } = window.app;
  const Tasks = await getRemainingTasks(dailyNote);
  if (Tasks) {
    const fileContents = await vault.cachedRead(dailyNote);
    const fileLines = getAllLinesFromFile(fileContents);
    const startDate = getDateFromFile(dailyNote, "day");
    const endDate = getDateFromFile(dailyNote, "day");
    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      const rawText = extractTextFromTodoLine(line);
      if (line.length === 0) continue
      if (lineIsValidTodo(line) || lineContainsTime(line)) {
        if(lineContainsTime(line)){
          startDate.hours(parseInt(extractHourFromBulletLine(line)));
          startDate.minutes(parseInt(extractMinFromBulletLine(line)));
          endDate.hours(parseInt(extractHourFromBulletLine(line)));
          if(parseInt(extractHourFromBulletLine(line)) > 22){
            endDate.minutes(parseInt(extractMinFromBulletLine(line)));
          }else{
            endDate.minutes(parseInt(extractMinFromBulletLine(line))+59);
          }
        }else{
          startDate.hours(0);
          startDate.minutes(0);
          endDate.minutes(0);
          endDate.hours(0);
        }
        dailyEvents.push({
          id: i,
          title: rawText,
          start: startDate.toDate(),
          end: endDate.toDate(),
          resourceId: i,
        });
      }
    }
  }
}

export function clear(clearbool: boolean) {
  if(clearbool) {
    dailyEvents.splice(0, events.length);
    console.log("run");
  }
}

export async function outputResults(): Promise<any[]> {

  const { vault } = window.app;
  const { folder } = getDailyNoteSettings();

  const dailyNotesFolder = vault.getAbstractFileByPath(
    normalizePath(folder)
  ) as TFolder;

  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
  }

  const dailyNotes = getAllDailyNotes();
  Vault.recurseChildren(dailyNotesFolder, async (note) => {
      if (note instanceof TFile && note.extension === 'md') {
        const date = getDateFromFile(note, "day");
        if(date) {
          const file = getDailyNote(date, dailyNotes);
          await getTasksForDailyNote(file);
        }
      }
  });

  events = dailyEvents;
  return events;
}


const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/)
const lineIsValidTodo = (line: string) => {
//eslint-disable-next-line
  return /^\s*[\-\*]\s\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?\s*\S/.test(line)
}
const lineContainsTime = (line: string) => {
  //eslint-disable-next-line
    return /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s)?(\<time\>)?\d{1,2}\:\d{2}(.*)$/.test(line)
  }
//eslint-disable-next-line
const extractTextFromTodoLine = (line: string) => /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?)?(\<time\>)?((\d{1,2})\:(\d{2}))?(\<\/time\>)?(.*)$/.exec(line)?.[8]
//eslint-disable-next-line
const extractHourFromBulletLine = (line: string) => /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)?.[4]
//eslint-disable-next-line
const extractMinFromBulletLine = (line: string) => /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)?.[5]
const dailyEvents = [];
export let events = [];