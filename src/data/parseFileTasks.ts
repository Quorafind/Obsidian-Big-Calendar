
import moment from "moment";
import { TFile,FileSystemAdapter } from "obsidian";

export class DailyNotesFolderMissingError extends Error {}

export async function getRemainingTasks(note: TFile): Promise<number> {
  if (!note) {
    return 0;
  }
  const { vault } = window.app;
  const fileContents = await vault.cachedRead(note);
  //eslint-disable-next-line
  const matchLength = (fileContents.match(/(-|\*) (\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s)?/g) || []).length;
  return matchLength;
}

export async function getTasksFromFiles(
  file: TFile | null, dailyEvents: any[]
): Promise<any[]> {
  if (!file) {
    return [];
  }
  const { vault } = window.app;
  const Tasks = await getRemainingTasks(file);
  if (Tasks) {
    let fileContents = await vault.cachedRead(file);
    let fileLines = getAllLinesFromFile(fileContents);
    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      if (line.length === 0) continue
      const rawText = extractTextFromTodoLine(line);
      const dueDate = getDueDateFromBulletLine(line);
      const scheduleDate = getScheduledDateFromBulletLine(line);
      const startDate = getStartDateFromBulletLine(line);
      if (dueDate && scheduleDate) {
        if(lineIsValidTodoEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'TODO',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }else if(lineIsValidDoneEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'DONE',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }else if(lineIsValidAnotherEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'ANOTHER',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }else{
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'JOURNAL',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }
      }else if(dueDate && startDate){
        if(lineIsValidTodoEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'TODO',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }else if(lineIsValidDoneEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'DONE',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }else if(lineIsValidAnotherEvent(line)){
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'ANOTHER',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }else{
          dailyEvents.push({
            id: i,
            title: rawText,
            start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
            resourceId: i,
            status: 'JOURNAL',
            file: file,
            originalText: line,
            lineNum: i,
          });
        }
      }else if(dueDate  && !startDate && !scheduleDate){   
        if(lineIsValidTodoEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'TODO',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidDoneEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'DONE',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidAnotherEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'ANOTHER',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else{
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'JOURNAL',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }
      }else if(scheduleDate  && !dueDate && !startDate){   
        if(lineIsValidTodoEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'TODO',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidDoneEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'DONE',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidAnotherEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'ANOTHER',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else{
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'JOURNAL',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }
      }else if(scheduleDate && startDate){   
        if(lineIsValidTodoEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'TODO',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidDoneEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'DONE',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidAnotherEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getScheduledDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'ANOTHER',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else{
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getDueDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'JOURNAL',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }
      }else if(startDate && !dueDate && !scheduleDate){   
        if(lineIsValidTodoEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'TODO',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidDoneEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'DONE',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else if(lineIsValidAnotherEvent(line)){
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'ANOTHER',
              file: file,
              originalText: line,
              lineNum: i,
            });
          }else{
            dailyEvents.push({
              id: i,
              title: rawText,
              start: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              end: moment(getStartDateFromBulletLine(line), "YYYY-MM-DD").toDate(),
              resourceId: i,
              status: 'JOURNAL',
              file: file,
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

export async function outputTasksResults(): Promise<any[]> {

  // const dailyEvents = [];
  const events = [];
  const { vault } = window.app;

  const allFiles = vault.getMarkdownFiles();
  for(let i = 0; i < allFiles.length; i++){
    if(allFiles[i] instanceof TFile){
      await getTasksFromFiles(allFiles[i], events);
      // console.log(getPath(dailyNotes[string].path));
    }
  }
  // dailyEvents.splice(0, dailyEvents.length);
  return events;
}


//Kanban: @{2021-12-25} @@{19:00}
//Tasks startDateRegex = /🛫 ?(\d{4}-\d{2}-\d{2})$/u;
//Tasks scheduledDateRegex = /[⏳⌛] ?(\d{4}-\d{2}-\d{2})$/u;
//Taks dueDateRegex = /[📅📆🗓] ?(\d{4}-\d{2}-\d{2})$/u;

const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/)
//eslint-disable-next-line
// const lineIsValidTodo = (line: string) => {
// //eslint-disable-next-line
//   return /^\s*(\-|\*)\s\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?(.*)$/.test(line)
// }
const lineIsValidTodoEvent = (line: string) => {
//eslint-disable-next-line
    return /^\s*(\-|\*)\s\[ \]\s?(.*)$/.test(line)
}
const lineIsValidDoneEvent = (line: string) => {
//eslint-disable-next-line
      return /^\s*(\-|\*)\s\[x\]\s?(.*)$/.test(line)
}
const lineIsValidAnotherEvent = (line: string) => {
  //eslint-disable-next-line
    return /^\s*(\-|\*)\s\[(X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?(.*)$/.test(line)
}
//eslint-disable-next-line
const lineContainsTime = (line: string) => {
  //eslint-disable-next-line
    return /^\s*(\-|\*)\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s)?(\<time\>)?\d{1,2}\:\d{2}(.*)$/.test(line)
  }
//eslint-disable-next-line
const extractTextFromTodoLine = (line: string) => /^(\s*)?(\-|\*)\s\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?(\<time\>)?((\d{1,2})\:(\d{2}))?(\<\/time\>)?(.+?)(?=(⏫|🛫|📅|📆|(@{)|⏳|⌛|(\[due\:\:)|(\[created\:\:)))/.exec(line)?.[9]
//eslint-disable-next-line
// const extractHourFromBulletLine = (line: string) => /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)?.[4]
//eslint-disable-next-line
// const extractMinFromBulletLine = (line: string) => /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)?.[5]
//eslint-disable-next-line
const getStartDateFromBulletLine = (line: string) => /\s(🛫|(\[created\:\:)|➕) ?(\d{4}-\d{2}-\d{2})(\])?/.exec(line)?.[3]
//eslint-disable-next-line
const getDueDateFromBulletLine = (line: string) => /\s(📅|📆|(@{)|(\[due\:\:)) ?(\d{4}-\d{2}-\d{2})(\])?/.exec(line)?.[4]
//eslint-disable-next-line
const getScheduledDateFromBulletLine = (line: string) => /\s(⏳|⌛) ?(\d{4}-\d{2}-\d{2})/.exec(line)?.[2]
// thanks to Luke Leppan and the Better Word Count plugin
//eslint-disable-next-line
const tagFromLine = (line: string) => /\s(#\S{0,})\s/