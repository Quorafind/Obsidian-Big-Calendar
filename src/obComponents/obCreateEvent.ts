import {moment} from 'obsidian';
import {createDailyNote, getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
import appStore from '../stores/appStore';
import {InsertAfter} from '../bigCalendar';
import {dailyNotesService} from '../services';
import {DefaultEventComposition} from '../bigCalendar';
import {stringOrDate} from 'react-big-calendar';

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

  lines.push(tempString);

  return lines;
}

export async function waitForInsert(EventContent: string, startDate: stringOrDate): Promise<Model.Event> {
  // const plugin = window.plugin;
  const {vault} = appStore.getState().dailyNotesState.app;
  // const removeEnter = EventContent.replace(/\n/g, '<br>');
  // const date = moment();
  // const timeHour = date.format('HH');
  // const timeMinute = date.format('mm');
  let lineNum;
  const startTime = startDate.toString();
  // const timeText = String(timeHour) + `:` + String(timeMinute);

  // if (isList && DefaultEventComposition === '') {
  //   newEvent = `- [ ] ` + String(timeHour) + `:` + String(timeMinute) + ` ` + removeEnter;
  // } else if (!isList && DefaultEventComposition === '') {
  //   newEvent = `- ` + String(timeHour) + `:` + String(timeMinute) + ` ` + removeEnter;
  // }

  // if (isList && DefaultEventComposition != '') {
  //   newEvent = `- [ ] ` + DefaultEventComposition.replace(/{TIME}/g, timeText).replace(/{CONTENT}/g, removeEnter);
  // } else if (!isList && DefaultEventComposition != '') {
  //   newEvent = `- ` + DefaultEventComposition.replace(/{TIME}/g, timeText).replace(/{CONTENT}/g, removeEnter);
  // }

  const newEvent =
    `- [ ] ` +
    DefaultEventComposition.replace(/{TIME}/g, moment(startTime).format('HH:mm')).replace(/{CONTENT}/g, EventContent);

  const dailyNotes = await getAllDailyNotes();
  const existingFile = getDailyNote(moment(startDate), dailyNotes);
  if (!existingFile) {
    const file = await createDailyNote(moment(startDate));
    await dailyNotesService.getMyAllDailyNotes();
    const fileContents = await vault.read(file);
    const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
    await vault.modify(file, newFileContent.content);
    if (newFileContent.posNum === -1) {
      const allLines = getAllLinesFromFile(newFileContent.content);
      lineNum = allLines.length + 1;
    } else {
      lineNum = newFileContent.posNum + 1;
    }
    // if (isList) {
    //   return {
    //     id: startDate.format('YYYYMMDDHHmm') + '00' + lineNum,
    //     content: EventContent,
    //     deletedAt: '',
    //     createdAt: startDate.format('YYYY/MM/DD HH:mm:ss'),
    //     updatedAt: startDate.format('YYYY/MM/DD HH:mm:ss'),
    //     eventType: 'TASK-TODO',
    //   };
    // } else {
    return {
      id: moment(startDate).format('YYYYMMDDHHmm') + '00' + lineNum,
      title: EventContent,
      start: moment(startDate).toDate(),
      end: moment(startDate).toDate(),
      eventType: 'TASK-TODO',
      // };
    };
  } else {
    const fileContents = await vault.read(existingFile);
    const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
    await vault.modify(existingFile, newFileContent.content);
    if (newFileContent.posNum === -1) {
      const allLines = getAllLinesFromFile(newFileContent.content);
      lineNum = allLines.length + 1;
    } else {
      lineNum = newFileContent.posNum + 1;
    }
    // if (isList) {
    //   return {
    //     id: date.format('YYYYMMDDHHmm') + '00' + lineNum,
    //     tile: EventContent,
    //     deletedAt: '',
    //     createdAt: date.format('YYYY/MM/DD HH:mm:ss'),
    //     updatedAt: date.format('YYYY/MM/DD HH:mm:ss'),
    //     eventType: 'TODO-Blank',
    //   };
    // } else {
    return {
      id: moment(startDate).format('YYYYMMDDHHmm') + '00' + lineNum,
      title: EventContent,
      start: moment(startDate).toDate(),
      end: moment(startDate).toDate(),
      eventType: 'TASK-TODO',
    };
    // }
  }
}

//credit to chhoumann, original code from: https://github.com/chhoumann/quickadd
export async function insertAfterHandler(targetString: string, formatted: string, fileContent: string): Promise<MContent> {
  // const targetString: string = plugin.settings.InsertAfter;
  //eslint-disable-next-line
  const targetRegex = new RegExp(`\s*${await escapeRegExp(targetString)}\s*`);
  const fileContentLines: string[] = getLinesInString(fileContent);

  const targetPosition = fileContentLines.findIndex((line) => targetRegex.test(line));
  const targetNotFound = targetPosition === -1;
  if (targetNotFound) {
    // if (this.choice.insertAfter?.createIfNotFound) {
    //     return await createInsertAfterIfNotFound(formatted);
    // }

    console.log('unable to find insert after line in file.');
  }

  const nextHeaderPositionAfterTargetPosition = fileContentLines
    .slice(targetPosition + 1)
    .findIndex((line) => /^#+ |---/.test(line));
  const foundNextHeader = nextHeaderPositionAfterTargetPosition !== -1;

  if (foundNextHeader) {
    let endOfSectionIndex: number;

    for (let i = nextHeaderPositionAfterTargetPosition + targetPosition; i > targetPosition; i--) {
      const lineIsNewline: boolean = /^[\s\n ]*$/.test(fileContentLines[i]);
      if (!lineIsNewline) {
        endOfSectionIndex = i;
        break;
      }
    }

    if (!endOfSectionIndex) endOfSectionIndex = targetPosition;

    return await insertTextAfterPositionInBody(formatted, fileContent, endOfSectionIndex, foundNextHeader);
  } else {
    return await insertTextAfterPositionInBody(formatted, fileContent, fileContentLines.length - 1, foundNextHeader);
  }
  // return insertTextAfterPositionInBody(formatted, fileContent, targetPosition);
}

export async function insertTextAfterPositionInBody(
  text: string,
  body: string,
  pos: number,
  found?: boolean,
): Promise<MContent> {
  if (pos === -1) {
    return {
      content: `${body}\n${text}`,
      posNum: -1,
    };
  }

  const splitContent = body.split('\n');

  if (found) {
    const pre = splitContent.slice(0, pos + 1).join('\n');
    const post = splitContent.slice(pos + 1).join('\n');
    // return `${pre}\n${text}\n${post}`;
    return {
      content: `${pre}\n${text}\n${post}`,
      posNum: pos,
    };
  } else {
    const pre = splitContent.slice(0, pos + 1).join('\n');
    const post = splitContent.slice(pos + 1).join('\n');
    if (/[\s\S]*?/g.test(post)) {
      return {
        content: `${pre}\n${text}`,
        posNum: pos,
      };
    } else {
      return {
        content: `${pre}${text}\n${post}`,
        posNum: pos,
      };
    }
    // return `${pre}${text}\n${post}`;
  }
}

const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/);
