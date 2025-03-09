import {TFolder, TFile, Notice} from 'obsidian';
import {getAllDailyNotes, getDailyNoteSettings, getDateFromFile} from 'obsidian-daily-notes-interface';
import {getAllLinesFromFile, extractEventTime, safeExecute} from '@/api';
import {fileService, globalService} from '@/services';
import {BigCalendarSettings} from '@/setting';
import {t} from '@/translations/helper';

export class DailyNotesFolderMissingError extends Error {}

export async function getRemainingEvents(note: TFile): Promise<number> {
  return await safeExecute(async () => {
    if (!note) {
      return 0;
    }
    const {vault} = fileService.getState().app;
    const settings = globalService.getState().pluginSetting;
    const fileContents = await vault.read(note);

    // 创建匹配事件的正则表达式
    let regexPattern;
    if (
      settings.DefaultEventComposition !== '' &&
      /{TIME}/g.test(settings.DefaultEventComposition) &&
      /{CONTENT}/g.test(settings.DefaultEventComposition)
    ) {
      regexPattern =
        '(-|\\*) (\\[(.{1})\\]\\s)?' +
        settings.DefaultEventComposition.replace(/{TIME}/g, '((\\<time\\>)?\\d{1,2}:\\d{2})?').replace(
          / {CONTENT}/g,
          '',
        );
    } else {
      regexPattern = '(-|\\*) (\\[(.{1})\\]\\s)?((\\<time\\>)?\\d{1,2}\\:\\d{2})?';
    }

    const regexMatcher = new RegExp(regexPattern, 'g');
    const matchCount = (fileContents.match(regexMatcher) || []).length;

    // 检查是否有处理条目的标记
    const processEntriesPattern = new RegExp(
      settings.ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'),
      'g',
    );
    const hasProcessEntriesHeader = (fileContents.match(processEntriesPattern) || []).length > 0;

    return hasProcessEntriesHeader ? matchCount : 0;
  }, 'Failed to get remaining events');
}
export async function getEventsFromDailyNote(dailyNote: TFile | null, dailyEvents: any[]): Promise<Model.Event[]> {
  return await safeExecute(async () => {
    if (!dailyNote) {
      return [];
    }
    const {vault} = fileService.getState().app;
    const settings = globalService.getState().pluginSetting;
    const events = await getRemainingEvents(dailyNote);

    if (!events) {
      return [];
    }

    const fileContents = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContents);
    const startDate = getDateFromFile(dailyNote, 'day');
    const endDate = getDateFromFile(dailyNote, 'day');

    let processHeaderFound = false;
    let eventType: string;
    const result: Model.Event[] = [];

    // 遍历文件的每一行
    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      if (line.length === 0) continue;

      // 检查是否找到处理条目的标记
      if (!processHeaderFound && lineContainsParseBelowToken(line, settings)) {
        processHeaderFound = true;
      }

      // 如果找到新的标题，停止处理
      if (processHeaderFound && !lineContainsParseBelowToken(line, settings) && /^#{1,} /g.test(line)) {
        processHeaderFound = false;
      }

      // 处理包含时间的行
      if (lineContainsTime(line, settings) && processHeaderFound) {
        const timeInfo = extractEventTime(line);
        if (!timeInfo) continue;

        const {hour, minute} = timeInfo;
        let eventEndDate = new Date(endDate);
        let eventEndHour = hour;
        let eventEndMinute = minute;

        // 检查是否有结束时间
        const hasEndTime = /⏲\s?(\d{1,2}):(\d{2})/.test(line);
        if (hasEndTime) {
          eventEndHour = extractEventEndHourFromLine(line);
          eventEndMinute = extractEventEndMinFromLine(line);
        } else {
          // 默认事件持续30分钟
          eventEndMinute = (minute + 30) % 60;
          if (minute + 30 >= 60) {
            eventEndHour = (hour + 1) % 24;
          }
        }

        // 设置开始和结束时间
        const eventStartDate = new Date(startDate);
        eventStartDate.setHours(hour, minute, 0, 0);

        // 使用 getDueDate 获取实际的结束日期
        const dueDateStr = getDueDate(line);
        if (dueDateStr) {
          const dueDate = new Date(dueDateStr);
          eventEndDate = dueDate;
        } else {
          eventEndDate.setHours(eventEndHour, eventEndMinute, 0, 0);
        }

        // 提取事件内容和类型
        const eventContent = extractTextFromTodoLine(line, settings);
        const taskType = extractEventTaskTypeFromLine(line);

        // 根据任务类型设置事件类型
        if (taskType === ' ') {
          eventType = 'TASK-TODO';
        } else if (taskType === 'x' || taskType === 'X') {
          eventType = 'TASK-DONE';
        } else if (taskType === '-') {
          eventType = 'TASK-CANCELLED';
        } else if (taskType === '>') {
          eventType = 'TASK-FORWARDED';
        } else if (taskType === 'D') {
          eventType = 'TASK-DEFERRED';
        } else if (taskType === '?') {
          eventType = 'TASK-QUESTION';
        } else if (taskType === '/') {
          eventType = 'TASK-IN_PROGRESS';
        } else if (taskType === '+') {
          eventType = 'TASK-ADD';
        } else if (taskType === 'R') {
          eventType = 'TASK-REVIEWED';
        } else if (taskType === '!') {
          eventType = 'TASK-IMPORTANT';
        } else if (taskType === 'i') {
          eventType = 'TASK-INFO';
        } else if (taskType === 'B') {
          eventType = 'TASK-BOOKMARK';
        } else if (taskType === 'P') {
          eventType = 'TASK-PRO';
        } else if (taskType === 'C') {
          eventType = 'TASK-CON';
        } else if (taskType === 'b') {
          eventType = 'TASK-BRAINSTORMING';
        } else if (taskType === 'E') {
          eventType = 'TASK-EXAMPLE';
        } else if (taskType === 'Q') {
          eventType = 'TASK-QUOTE';
        } else if (taskType === 'N') {
          eventType = 'TASK-NOTE';
        } else if (taskType === 'W') {
          eventType = 'TASK-WIN';
        } else if (taskType === 'L') {
          eventType = 'TASK-LOSE';
        } else {
          eventType = 'default';
        }

        // 创建事件对象
        const event: Model.Event = {
          id: startDate.format('YYYYMMDDHHmm') + '00' + (i + 1),
          title: eventContent || '',
          start: eventStartDate,
          end: eventEndDate,
          allDay: false,
          eventType: eventType,
        };

        // 添加到结果数组
        result.push(event);
        if (dailyEvents) {
          dailyEvents.push(event);
        }
      }
    }

    return result;
  }, 'Failed to get events from daily note');
}

export async function getEvents(): Promise<any[]> {
  return await safeExecute(async () => {
    const events: any[] = [];
    const {vault} = fileService.getState().app;
    const {folder} = getDailyNoteSettings();

    // 获取日记笔记文件夹
    const dailyNotesFolder = vault.getFolderByPath(folder) as TFolder;
    console.log(dailyNotesFolder);
    if (!dailyNotesFolder) {
      new Notice(t('Your daily notes folder is not set correctly. Please check your settings.'));
      return [];
    }

    // 获取所有日记笔记
    const dailyNotes = getAllDailyNotes();

    // 从每个日记笔记中获取事件
    for (const key in dailyNotes) {
      if (dailyNotes[key] instanceof TFile) {
        await getEventsFromDailyNote(dailyNotes[key], events);
      }
    }

    return events;
  }, 'Failed to get events');
}

const lineContainsTime = (line: string, settings: BigCalendarSettings): boolean => {
  let regexPattern;

  if (
    settings.DefaultEventComposition !== '' &&
    /{TIME}/g.test(settings.DefaultEventComposition) &&
    /{CONTENT}/g.test(settings.DefaultEventComposition)
  ) {
    regexPattern =
      '^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s?)?' +
      settings.DefaultEventComposition.replace(/{TIME}/g, '(\\<time\\>)?\\d{1,2}:\\d{2}(\\<\\/time\\>)?').replace(
        /{CONTENT}/g,
        '(.*)$',
      );
  } else {
    regexPattern = '^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s)?(\\<time\\>)?\\d{1,2}\\:\\d{2}(.*)$';
  }

  const regexMatcher = new RegExp(regexPattern, '');
  return regexMatcher.test(line);
};

const lineContainsParseBelowToken = (line: string, settings: BigCalendarSettings): boolean => {
  if (settings.ProcessEntriesBelow === '') {
    return true;
  }

  const pattern = new RegExp(settings.ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), '');
  return pattern.test(line);
};

const extractTextFromTodoLine = (line: string, settings: BigCalendarSettings): string => {
  let regexPattern;

  if (
    settings.DefaultEventComposition !== '' &&
    /{TIME}/g.test(settings.DefaultEventComposition) &&
    /{CONTENT}/g.test(settings.DefaultEventComposition)
  ) {
    regexPattern =
      '^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s?)?' +
      settings.DefaultEventComposition.replace(/{TIME}/g, '(\\<time\\>)?(\\d{1,2}):(\\d{2})(\\<\\/time\\>)?').replace(
        /{CONTENT}/g,
        '(.*)$',
      );
  } else {
    regexPattern = '^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s)?(\\<time\\>)?(\\d{1,2}):(\\d{2})(.*)$';
  }

  const regexMatcher = new RegExp(regexPattern, '');
  const contentIndex = settings.DefaultEventComposition !== '' ? 5 : 7;
  return regexMatcher.exec(line)?.[contentIndex] || '';
};

const extractEventTaskTypeFromLine = (line: string): string | undefined => {
  return /^\s*[-*]\s(\[(.{1})\])\s(.*)$/.exec(line)?.[2];
};

const extractEventEndHourFromLine = (line: string): number => {
  const match = /⏲\s?(\d{1,2}):(\d{2})/.exec(line);
  return match ? parseInt(match[1]) : 0;
};

const extractEventEndMinFromLine = (line: string): number => {
  const match = /⏲\s?(\d{1,2}):(\d{2})/.exec(line);
  return match ? parseInt(match[2]) : 0;
};

const getDueDate = (line: string) => /\s(📅|📆|(@{)|(\[due::)) ?(\d{4}-\d{2}-\d{2})(\])?/.exec(line)?.[4];
