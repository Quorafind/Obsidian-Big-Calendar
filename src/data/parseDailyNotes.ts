
import { normalizePath, TFolder, TFile,FileSystemAdapter } from "obsidian";
import { getAllDailyNotes , getDailyNoteSettings , getDateFromFile } from "obsidian-daily-notes-interface";

export class DailyNotesFolderMissingError extends Error {}


export async function getRemainingTasks(note: TFile): Promise<number> {
  if (!note) {
    return 0;
  }
  const { vault } = window.app;
  let fileContents = await vault.cachedRead(note);
  //eslint-disable-next-line
  const matchLength = (fileContents.match(/(-|\*) (\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s)?((\<time\>)?\d{1,2}\:\d{2})?/g) || []).length;
  fileContents = null;
  return matchLength;
}

export async function getTasksForDailyNote(
  dailyNote: TFile | null, dailyEvents: any[]
): Promise<any[]> {
  if (!dailyNote) {
    return [];
  }
  const { vault } = window.app;
  const Tasks = await getRemainingTasks(dailyNote);
  if (Tasks) {
    let fileContents = await vault.cachedRead(dailyNote);
    let fileLines = getAllLinesFromFile(fileContents);
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
        if(lineIsValidTodoEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: startDate.toDate(),
            end: endDate.toDate(),
            resourceId: i,
            status: 'TODO',
            file: dailyNote,
            originalText: line,
            lineNum: i,
          });
        }else if(lineIsValidDoneEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: startDate.toDate(),
            end: endDate.toDate(),
            resourceId: i,
            status: 'DONE',
            file: dailyNote,
            originalText: line,
            lineNum: i,
          });
        }else if(lineIsValidAnotherEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: startDate.toDate(),
            end: endDate.toDate(),
            resourceId: i,
            status: 'ANOTHER',
            file: dailyNote,
            originalText: line,
            lineNum: i,
          });
        }else if(lineContainsTime(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: startDate.toDate(),
            end: endDate.toDate(),
            resourceId: i,
            status: 'JOURNAL',
            file: dailyNote,
            originalText: line,
            lineNum: i,
          });
        }
      }
    }
    fileLines = null;
    fileContents = null;
  }
}

export function getPath(filePath: string): string | null {
  const { vault } = window.app;
  if (vault.adapter instanceof FileSystemAdapter) {
    return (vault.adapter as FileSystemAdapter).getFullPath(filePath);
  }
  throw new Error('cannot determine base path');
}

// export function clear(clearbool: boolean) {
//   if(clearbool) {
//     dailyEvents.splice(0, dailyEvents.length);
//     events.splice(0, events.length);
//   }
// }

// export function getResults(dailyNotesFolder: TFolder,dailyNotes: Record<string, TFile>,dailyEvents: any[]){
//   return new Promise((resolve,reject) => {
//     Vault.recurseChildren(dailyNotesFolder, async (note) => {
//       if (note instanceof TFile && note.extension === 'md') {
//         const date = getDateFromFile(note, "day");
//         if(date) {
//           const file = getDailyNote(date, dailyNotes);
//           await getTasksForDailyNote(file, dailyEvents);
//         }
//       }
//   });
//   })
// }

export async function outputResults(): Promise<any[]> {

  // const dailyEvents = [];
  const events = [];
  const { vault } = window.app;
  const { folder } = getDailyNoteSettings();

  const dailyNotesFolder = vault.getAbstractFileByPath(
    normalizePath(folder)
  ) as TFolder;

  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
  }

  const dailyNotes = getAllDailyNotes();
  for( const string in dailyNotes ){
    if(dailyNotes[string] instanceof TFile){
      await getTasksForDailyNote(dailyNotes[string], events);
    }
  }

  // dailyEvents.splice(0, dailyEvents.length);
  return events;
}


const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/)
const lineIsValidTodo = (line: string) => {
//eslint-disable-next-line
  return /^\s*[\-\*]\s\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?\s*\S/.test(line)
}
const lineIsValidTodoEvent = (line: string) => {
//eslint-disable-next-line
    return /^\s*[\-\*]\s\[ \]\s?\s*\S/.test(line)
}
const lineIsValidDoneEvent = (line: string) => {
//eslint-disable-next-line
      return /^\s*[\-\*]\s\[x\]\s?\s*\S/.test(line)
}
const lineIsValidAnotherEvent = (line: string) => {
  //eslint-disable-next-line
    return /^\s*[\-\*]\s\[(X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?\s*\S/.test(line)
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

// thanks to Luke Leppan and the Better Word Count plugin
//eslint-disable-next-line
const tagFromLine = (line: string) => /\s(#\S{0,})\s/