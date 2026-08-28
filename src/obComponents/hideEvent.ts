import {moment, TFile} from 'obsidian';
import {getDailyNoteSettings} from 'obsidian-daily-notes-interface';
import {fileService, globalService} from '@/services';
import {sendEventToDelete} from './deleteEvent';
import {safeExecute} from '@/api';
import {BigCalendarSettings} from '@/setting';
import {getDateFromFileFromFullPath} from '@/utils/dailyNoteDate';

/**
 * Hide event (remove from daily note and send to delete file)
 *
 * @param eventid Event ID to hide
 * @returns Promise解析为删除的事件信息
 */
export async function hideEvent(eventid: string): Promise<any> {
  return await safeExecute(async () => {
    const {app} = fileService.getState();
    const {vault} = app;
    const settings = globalService.getState().pluginSetting;

    if (!/\d{14,}/.test(eventid)) {
      throw new Error('Invalid event ID format');
    }

    const timeString = eventid.slice(0, 14);
    const idString = parseInt(eventid.slice(14));
    const changeDate = moment(timeString, 'YYYYMMDDHHmmSS');

    // Find the daily note by walking the vault directly. The files store
    // uses the library's getAllDailyNotes which drops files whose basename
    // can't be parsed (weekday-named files in other months), so we can't
    // rely on it.
    const {folder} = getDailyNoteSettings();
    let dailyNote: any = null;
    if (folder) {
      const root = vault.getAbstractFileByPath(folder);
      if (root) {
        const walk = (af: any) => {
          if (dailyNote) return;
          if (af instanceof TFile) {
            if (getDateFromFileFromFullPath(af, 'day')?.isSame(changeDate, 'day')) {
              dailyNote = af;
            }
          } else if (af.children) {
            for (const child of af.children) walk(child);
          }
        };
        walk(root);
      }
    }
    if (!dailyNote) {
      throw new Error(`Daily note not found for date: ${changeDate.format('YYYY-MM-DD')}`);
    }

    // Read file content
    const fileContent = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContent);

    if (idString >= fileLines.length) {
      throw new Error(`Event line ${idString} not found in file`);
    }

    // Extract event content
    const content = extractContentfromText(fileLines[idString], settings);
    const originalLine = '- ' + eventid + ' ' + content;
    const newLine = fileLines[idString];

    // Remove event from file
    const newFileContent = removeLineAt(fileContent, idString);
    // Re-fetch the file object to ensure Obsidian recognizes the modification
    const freshFile = vault.getAbstractFileByPath(dailyNote.path);
    const fileToModify = freshFile instanceof TFile ? freshFile : dailyNote;
    await vault.modify(fileToModify, newFileContent);
    // Force the editor to re-read the file from disk
    const leaves = app.workspace.getLeavesOfType('markdown');
    for (const leaf of leaves) {
      const view = leaf.view as any;
      if (view?.file?.path === dailyNote.path && view?.editor) {
        view.editor.setValue(newFileContent);
      }
    }

    // Send event to delete file
    const deleteDate = await sendEventToDelete(originalLine);

    // Return deleted event info
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
 * Split file content into lines
 *
 * @param cache 文件内容
 * @returns 行数组
 */
const getAllLinesFromFile = (cache: string): string[] => cache.split(/\r?\n/);

/**
 * Removes the physical line at the given index from the content, keeping
 * all other lines (including blank ones) intact.
 */
const removeLineAt = (body: string, index: number): string => {
  const lines = body.split(/\r?\n/);
  if (index < 0 || index >= lines.length) return body;
  lines.splice(index, 1);
  return lines.join('\n');
};

/**
 * from行中Extract event content
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
