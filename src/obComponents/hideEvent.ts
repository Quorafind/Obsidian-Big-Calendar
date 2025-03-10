import {moment} from 'obsidian';
import {getDailyNote} from 'obsidian-daily-notes-interface';
import {fileService, globalService} from '@/services';
import {sendEventToDelete} from './deleteEvent';
import {safeExecute} from '@/api';
import {BigCalendarSettings} from '@/setting';

/**
 * 隐藏事件（将事件从日记笔记中移除并发送到删除文件）
 *
 * @param eventid 要隐藏的事件ID
 * @returns Promise解析为删除的事件信息
 */
export async function hideEvent(eventid: string): Promise<any> {
  return await safeExecute(async () => {
    const {files, app} = fileService.getState();
    const {vault} = app;
    const settings = globalService.getState().pluginSetting;

    if (!/\d{14,}/.test(eventid)) {
      throw new Error('Invalid event ID format');
    }

    const timeString = eventid.slice(0, 14);
    const idString = parseInt(eventid.slice(14));
    const changeDate = moment(timeString, 'YYYYMMDDHHmmSS');

    // 获取日记笔记文件
    const dailyNote = getDailyNote(changeDate, files);
    if (!dailyNote) {
      throw new Error(`Daily note not found for date: ${changeDate.format('YYYY-MM-DD')}`);
    }

    // 读取文件内容
    const fileContent = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContent);

    if (idString >= fileLines.length) {
      throw new Error(`Event line ${idString} not found in file`);
    }

    // 提取事件内容
    const content = extractContentfromText(fileLines[idString], settings);
    const originalLine = '- ' + eventid + ' ' + content;
    const newLine = fileLines[idString];

    // 从文件中移除事件
    const newFileContent = fileContent.replace(newLine, '');
    await vault.modify(dailyNote, newFileContent);

    // 将事件发送到删除文件
    const deleteDate = await sendEventToDelete(originalLine);

    // 返回删除的事件信息
    return {
      id: eventid,
      title: content,
      deletedAt: deleteDate,
      eventType: 'HIDDEN',
      start: changeDate.toDate(),
      end: changeDate.toDate(),
      allDay: false,
    };
  }, 'Failed to hide event');
}

/**
 * 将文件内容分割为行
 *
 * @param cache 文件内容
 * @returns 行数组
 */
const getAllLinesFromFile = (cache: string): string[] => cache.split(/\r?\n/);

/**
 * 从行中提取事件内容
 *
 * @param line 要提取的行
 * @param settings 设置对象
 * @returns 提取的内容
 */
const extractContentfromText = (line: string, settings: BigCalendarSettings): string => {
  let regexPattern;

  if (
    settings.DefaultEventComposition !== '' &&
    /{TIME}/g.test(settings.DefaultEventComposition) &&
    /{CONTENT}/g.test(settings.DefaultEventComposition)
  ) {
    regexPattern =
      '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?' +
      settings.DefaultEventComposition.replace(
        /{TIME}/g,
        '(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?',
      ).replace(/{CONTENT}/g, '(.*)$');
  } else {
    regexPattern = '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?\\s?(.*)$';
  }

  const regexMatcher = new RegExp(regexPattern, '');
  return regexMatcher.exec(line)?.[8] || '';
};
