import {normalizePath, TFolder, TFile, moment} from 'obsidian';
import {getAllDailyNotes, getDailyNoteSettings, getDateFromFile} from 'obsidian-daily-notes-interface';
import appStore from '../stores/appStore';
import {ProcessEntriesBelow} from '../bigCalendar';
import {DefaultEventComposition} from '../bigCalendar';
// import {eventService} from '../services';
// import appContext from '../stores/appContext';
// import {useContext} from 'react';

export class DailyNotesFolderMissingError extends Error {}

export async function getRemainingEvents(note: TFile): Promise<number> {
  if (!note) {
    return 0;
  }
  const {vault} = appStore.getState().dailyNotesState.app;
  let fileContents = await vault.read(note);
  let regexMatch;
  if (
    DefaultEventComposition != '' &&
    /{TIME}/g.test(DefaultEventComposition) &&
    /{CONTENT}/g.test(DefaultEventComposition)
  ) {
    //eslint-disable-next-line
    regexMatch =
      '(-|\\*) (\\[(.{1})\\]\\s)?' +
      DefaultEventComposition.replace(/{TIME}/g, '((\\<time\\>)?\\d{1,2}:\\d{2})?').replace(/ {CONTENT}/g, '');
  } else {
    //eslint-disable-next-line
    regexMatch = '(-|\\*) (\\[(.{1})\\]\\s)?((\\<time\\>)?\\d{1,2}\\:\\d{2})?';
  }
  const regexMatchRe = new RegExp(regexMatch, 'g');
  //eslint-disable-next-line
  const matchLength = (fileContents.match(regexMatchRe) || []).length;
  // const matchLength = (fileContents.match(/(-|\*) (\[ \]\s)?((\<time\>)?\d{1,2}\:\d{2})?/g) || []).length;
  const re = new RegExp(ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
  const processEntriesHeader = (fileContents.match(re) || []).length;
  fileContents = null;
  if (processEntriesHeader) {
    return matchLength;
  }
  return 0;
}

export async function getEventsFromDailyNote(dailyNote: TFile | null, dailyEvents: any[]): Promise<Model.Event[]> {
  if (!dailyNote) {
    return [];
  }
  const {vault} = appStore.getState().dailyNotesState.app;
  const Events = await getRemainingEvents(dailyNote);

  if (Events) {
    let fileContents = await vault.read(dailyNote);
    let fileLines = getAllLinesFromFile(fileContents);
    const startDate = getDateFromFile(dailyNote, 'day');
    const endDate = getDateFromFile(dailyNote, 'day');

    let processHeaderFound = false;
    let eventType: string;

    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      if (line.length === 0) continue;
      if (processHeaderFound == false && lineContainsParseBelowToken(line)) {
        processHeaderFound = true;
      }
      if (processHeaderFound == true && !lineContainsParseBelowToken(line) && /^#{1,} /g.test(line)) {
        processHeaderFound = false;
      }

      if (lineContainsTime(line) && processHeaderFound) {
        const startHourText = extractHourFromBulletLine(line);
        const startMinText = extractMinFromBulletLine(line);
        let newEndDate = endDate;
        let endMinText: number;
        let endHourText: number;
        // let endDayText: number;
        // let endMonthText: number;
        // let endYearText: number;

        //eslint-disable-next-line
        const haveEndTime = /⏲\s(\d{1,2})\:(\d{2})/.test(line);
        //eslint-disable-next-line
        const haveEndDate = /\s(📅|📆|(@{)|(\[due\:\:)) ?(\d{4}-\d{2}-\d{2})(\])?/.test(line);

        if (haveEndTime) {
          endMinText = extractEventEndMinFromLine(line);
          endHourText = extractEventEndHourFromLine(line);
          newEndDate.hours(endHourText);
          newEndDate.minutes(endMinText);
          if (haveEndDate) {
            const newMoment = moment(getDueDate(line), 'YYYY-MM-DD');
            newEndDate = newMoment;
            newEndDate.hours(endHourText);
            newEndDate.minutes(endMinText);
            // endDayText = parseInt(newMoment.format('DD'));
            // endMonthText = parseInt(newMoment.format('MM'));
            // endYearText = parseInt(newMoment.format('YYYY'));
            // newEndDate.date(endDayText);
            // newEndDate.month(endMonthText);
            // newEndDate.year(endYearText);
          }
        } else {
          newEndDate.hours(parseInt(startHourText));
          if (parseInt(startMinText) > 29 && parseInt(startMinText) < 60 && parseInt(startHourText) > 23) {
            newEndDate.minutes(59);
          } else {
            newEndDate.minutes(parseInt(startMinText) + 30);
          }
          if (haveEndDate) {
            const newMoment = moment(getDueDate(line), 'YYYY-MM-DD');
            newEndDate = newMoment;
            newEndDate.hours(parseInt(startHourText));
            newEndDate.minutes(parseInt(startMinText));
          }
          // if (parseInt(startHourText) > 22) {
          //   newEndDate.minutes(parseInt(startMinText));
          // } else {
          //   newEndDate.minutes(parseInt(startMinText));
          // }
        }

        startDate.hours(parseInt(startHourText));
        startDate.minutes(parseInt(startMinText));

        if (newEndDate.isSame(startDate)) {
          newEndDate.minutes(parseInt(startMinText) + 30);
        }
        //eslint-disable-next-line
        if (/^\s*[-*]\s(\[(.{1})\])\s/g.test(line)) {
          const eventTaskType = extractEventTaskTypeFromLine(line);
          if (eventTaskType === ' ') {
            eventType = 'TASK-TODO';
          } else if (eventTaskType === 'x' || eventTaskType === 'X') {
            eventType = 'TASK-DONE';
          } else {
            eventType = 'TASK-' + eventTaskType;
          }
        } else {
          eventType = 'JOURNAL';
        }

        let rawText = extractTextFromTodoLine(line);

        if (haveEndTime) {
          //eslint-disable-next-line
          rawText = rawText.replace(/⏲\s(\d{1,2})\:(\d{2})/, '');
        }

        if (haveEndDate) {
          //eslint-disable-next-line
          rawText = rawText.replace(/\s(📅|📆|(@{)|(\[due\:\:)) ?(\d{4}-\d{2}-\d{2})(\])?/, '');
        }

        if (rawText !== '') {
          if (newEndDate.isBefore(startDate)) {
            dailyEvents.push({
              id: startDate.format('YYYYMMDDHHmm') + '00' + i,
              title: rawText,
              originalContent: line,
              start: startDate.toDate(),
              end: startDate.toDate(),
              eventType: eventType,
              allDay: false,
            });
          } else {
            dailyEvents.push({
              id: startDate.format('YYYYMMDDHHmm') + '00' + i,
              title: rawText,
              originalContent: line,
              start: startDate.toDate(),
              end: newEndDate.toDate(),
              eventType: eventType,
              allDay: false,
            });
          }
        }
      }
    }
    fileLines = null;
    fileContents = null;
  }
}

export async function getEvents(): Promise<any[]> {
  const events: any[] | PromiseLike<any[]> = [];
  const {vault} = appStore.getState().dailyNotesState.app;
  const {folder} = getDailyNoteSettings();

  const dailyNotesFolder = vault.getAbstractFileByPath(normalizePath(folder)) as TFolder;

  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError('Failed to find daily notes folder');
  }

  const dailyNotes = getAllDailyNotes();

  for (const string in dailyNotes) {
    if (dailyNotes[string] instanceof TFile) {
      await getEventsFromDailyNote(dailyNotes[string], events);
    }
  }

  return events;
}

// export async function pushNewEvents(file: TFile): Promise<void> {
//   const {vault} = appStore.getState().dailyNotesState.app;
//   const events = eventService.getState().events;
//   const remainEventsNum = await getRemainingEvents(file);

//   if (remainEventsNum) {
//     let fileContents = await vault.read(file);
//     let fileLines = getAllLinesFromFile(fileContents);
//     const startDate = getDateFromFile(file, 'day');
//     const endDate = getDateFromFile(file, 'day');

//     let processHeaderFound = false;
//     let eventType: string;

//     for (let i = 0; i < fileLines.length; i++) {
//       const line = fileLines[i];
//       if (line.length === 0) continue;
//       if (processHeaderFound == false && lineContainsParseBelowToken(line)) {
//         processHeaderFound = true;
//       }
//       if (processHeaderFound == true && !lineContainsParseBelowToken(line) && /^#{1,} /g.test(line)) {
//         processHeaderFound = false;
//       }

//       if (lineContainsTime(line) && processHeaderFound) {
//         const startHourText = extractHourFromBulletLine(line);
//         const startMinText = extractMinFromBulletLine(line);
//         let newEndDate = endDate;
//         let endMinText: number;
//         let endHourText: number;
//         // let endDayText: number;
//         // let endMonthText: number;
//         // let endYearText: number;

//         //eslint-disable-next-line
//         const haveEndTime = /⏲\s(\d{1,2})\:(\d{2})/.test(line);
//         //eslint-disable-next-line
//         const haveEndDate = /\s(📅|📆|(@{)|(\[due\:\:)) ?(\d{4}-\d{2}-\d{2})(\])?/.test(line);

//         if (haveEndTime) {
//           endMinText = extractEventEndMinFromLine(line);
//           endHourText = extractEventEndHourFromLine(line);
//           newEndDate.hours(endHourText);
//           newEndDate.minutes(endMinText);
//           if (haveEndDate) {
//             const newMoment = moment(getDueDate(line), 'YYYY-MM-DD');
//             newEndDate = newMoment;
//             newEndDate.hours(endHourText);
//             newEndDate.minutes(endMinText);
//             // endDayText = parseInt(newMoment.format('DD'));
//             // endMonthText = parseInt(newMoment.format('MM'));
//             // endYearText = parseInt(newMoment.format('YYYY'));
//             // newEndDate.date(endDayText);
//             // newEndDate.month(endMonthText);
//             // newEndDate.year(endYearText);
//           }
//         } else {
//           newEndDate.hours(parseInt(startHourText));
//           if (parseInt(startMinText) > 29 && parseInt(startMinText) < 60 && parseInt(startHourText) > 23) {
//             newEndDate.minutes(59);
//           } else {
//             newEndDate.minutes(parseInt(startMinText) + 30);
//           }
//           if (haveEndDate) {
//             const newMoment = moment(getDueDate(line), 'YYYY-MM-DD');
//             newEndDate = newMoment;
//             newEndDate.hours(parseInt(startHourText));
//             newEndDate.minutes(parseInt(startMinText));
//           }
//           // if (parseInt(startHourText) > 22) {
//           //   newEndDate.minutes(parseInt(startMinText));
//           // } else {
//           //   newEndDate.minutes(parseInt(startMinText));
//           // }
//         }

//         startDate.hours(parseInt(startHourText));
//         startDate.minutes(parseInt(startMinText));

//         if (newEndDate.isSame(startDate)) {
//           newEndDate.minutes(parseInt(startMinText) + 30);
//         }
//         //eslint-disable-next-line
//         if (/^\s*[-*]\s(\[(.{1})\])\s/g.test(line)) {
//           const eventTaskType = extractEventTaskTypeFromLine(line);
//           if (eventTaskType === ' ') {
//             eventType = 'TASK-TODO';
//           } else if (eventTaskType === 'x' || eventTaskType === 'X') {
//             eventType = 'TASK-DONE';
//           } else {
//             eventType = 'TASK-' + eventTaskType;
//           }
//         } else {
//           eventType = 'JOURNAL';
//         }

//         let rawText = extractTextFromTodoLine(line);

//         if (haveEndTime) {
//           //eslint-disable-next-line
//           rawText = rawText.replace(/⏲\s(\d{1,2})\:(\d{2})/, '');
//         }

//         if (haveEndDate) {
//           //eslint-disable-next-line
//           rawText = rawText.replace(/\s(📅|📆|(@{)|(\[due\:\:)) ?(\d{4}-\d{2}-\d{2})(\])?/, '');
//         }

//         if (rawText !== '') {
//           if (newEndDate.isBefore(startDate)) {
//             eventService.pushEvent({
//               id: startDate.format('YYYYMMDDHHmm') + '00' + i,
//               title: rawText,
//               originalContent: line,
//               start: startDate.toDate(),
//               end: startDate.toDate(),
//               eventType: eventType,
//               allDay: false,
//             });
//           } else {
//             eventService.pushEvent({
//               id: startDate.format('YYYYMMDDHHmm') + '00' + i,
//               title: rawText,
//               originalContent: line,
//               start: startDate.toDate(),
//               end: newEndDate.toDate(),
//               eventType: eventType,
//               allDay: false,
//             });
//           }
//         }
//       }
//     }
//     fileLines = null;
//     fileContents = null;
//   }
//   // const allEvents = await getEventsFromDailyNote(file);
// }

const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/);
// const lineIsValidTodo = (line: string) => {
// //eslint-disable-next-line
//   return /^\s*[\-\*]\s\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?\s*\S/.test(line)
// }
const lineContainsTime = (line: string) => {
  let regexMatch;
  if (
    DefaultEventComposition != '' &&
    /{TIME}/g.test(DefaultEventComposition) &&
    /{CONTENT}/g.test(DefaultEventComposition)
  ) {
    //eslint-disable-next-line
    regexMatch =
      '^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s)?' +
      DefaultEventComposition.replace(/{TIME}/g, '(\\<time\\>)?\\d{1,2}:\\d{2}(\\<\\/time\\>)?').replace(
        /{CONTENT}/g,
        '(.*)$',
      );
  } else {
    //eslint-disable-next-line
    regexMatch = '^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s)?(\\<time\\>)?\\d{1,2}\\:\\d{2}(.*)$';
  }
  const regexMatchRe = new RegExp(regexMatch, '');
  //eslint-disable-next-line
  return regexMatchRe.test(line);
  // The below line excludes entries with a ':' after the time as I was having issues with my calendar
  // being pulled in. Once made configurable will be simpler to manage.
  // return /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s)?(\<time\>)?\d{1,2}\:\d{2}[^:](.*)$/.test(line);
};

const lineContainsParseBelowToken = (line: string) => {
  if (ProcessEntriesBelow === '') {
    return true;
  }
  const re = new RegExp(ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), '');
  return re.test(line);
};

const extractTextFromTodoLine = (line: string) => {
  let regexMatch;
  if (
    DefaultEventComposition != '' &&
    /{TIME}/g.test(DefaultEventComposition) &&
    /{CONTENT}/g.test(DefaultEventComposition)
  ) {
    //eslint-disable-next-line
    regexMatch =
      '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?' +
      DefaultEventComposition.replace(/{TIME}/g, '(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?').replace(
        /{CONTENT}/g,
        '(.*)$',
      );
  } else {
    //eslint-disable-next-line
    regexMatch = '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?\\s?(.*)$';
  }
  const regexMatchRe = new RegExp(regexMatch, '');
  //eslint-disable-next-line
  return regexMatchRe.exec(line)?.[8];
  // return /^\s*[\-\*]\s(\[(.{1})\]\s?)?(\<time\>)?((\d{1,2})\:(\d{2}))?(\<\/time\>)?\s?(.*)$/.exec(line)?.[8];
};

const extractHourFromBulletLine = (line: string) => {
  let regexHourMatch;
  if (
    DefaultEventComposition != '' &&
    /{TIME}/g.test(DefaultEventComposition) &&
    /{CONTENT}/g.test(DefaultEventComposition)
  ) {
    //eslint-disable-next-line
    regexHourMatch =
      '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?' +
      DefaultEventComposition.replace(/{TIME}/g, '(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(\\<\\/time\\>)?').replace(
        /{CONTENT}/g,
        '(.*)$',
      );
  } else {
    //eslint-disable-next-line
    regexHourMatch = '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(.*)$';
  }
  const regexMatchRe = new RegExp(regexHourMatch, '');
  //eslint-disable-next-line
  return regexMatchRe.exec(line)?.[4];
};

const extractMinFromBulletLine = (line: string) => {
  let regexHourMatch;
  if (
    DefaultEventComposition != '' &&
    /{TIME}/g.test(DefaultEventComposition) &&
    /{CONTENT}/g.test(DefaultEventComposition)
  ) {
    //eslint-disable-next-line
    regexHourMatch =
      '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?' +
      DefaultEventComposition.replace(/{TIME}/g, '(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(\\<\\/time\\>)?').replace(
        /{CONTENT}/g,
        '(.*)$',
      );
  } else {
    //eslint-disable-next-line
    regexHourMatch = '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(.*)$';
  }
  const regexMatchRe = new RegExp(regexHourMatch, '');
  //eslint-disable-next-line
  return regexMatchRe.exec(line)?.[5];
  // /^\s*[\-\*]\s(\[(.{1})\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)?.[5];
};

const extractEventTaskTypeFromLine = (line: string) =>
  //eslint-disable-next-line
  /^\s*[\-\*]\s(\[(.{1})\])\s(.*)$/.exec(line)?.[2];
// The below line excludes entries with a ':' after the time as I was having issues with my calendar
// being pulled in. Once made configurable will be simpler to manage.
// return /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s)?(\<time\>)?\d{1,2}\:\d{2}[^:](.*)$/.test(line);

const extractEventEndHourFromLine = (line: string): number => {
  let regexMatch;
  //eslint-disable-next-line
  regexMatch = '⏲\\s(\\d{1,2})\\:(\\d{2})';

  const regexMatchRe = new RegExp(regexMatch, '');
  //eslint-disable-next-line
  return parseInt(regexMatchRe.exec(line)?.[1]);
};

const extractEventEndMinFromLine = (line: string): number => {
  let regexMatch;
  //eslint-disable-next-line
  regexMatch = '⏲\\s(\\d{1,2})\\:(\\d{2})';

  const regexMatchRe = new RegExp(regexMatch, '');
  //eslint-disable-next-line
  return parseInt(regexMatchRe.exec(line)?.[2]);
};
//eslint-disable-next-line
const getDueDate = (line: string) => /\s(📅|📆|(@{)|(\[due\:\:)) ?(\d{4}-\d{2}-\d{2})(\])?/.exec(line)?.[4];
