import {moment, Platform} from 'obsidian';
import fileService from '../services/fileService';
import {safeExecute} from '../api';

/**
 * 在日记笔记中显示事件
 *
 * @param eventId 要显示的事件ID
 * @returns Promise解析为void
 */
export const showEventInDailyNotes = async (eventId: string): Promise<void> => {
  return await safeExecute(async () => {
    const {app} = fileService.getState();

    if (!/\d{14,}/.test(eventId)) {
      throw new Error('Invalid event ID format');
    }

    // 解析事件ID中的行号和日期
    const lineNum = parseInt(eventId.slice(14));
    const eventDateString = eventId.slice(0, 14);
    const date = moment(eventDateString, 'YYYYMMDDHHmmss');

    // 获取日记笔记文件
    const file = await fileService.getDailyNoteByEvent(date);
    if (!file) {
      throw new Error(`Daily note not found for date: ${date.format('YYYY-MM-DD')}`);
    }

    // 根据平台选择不同的打开方式
    if (!Platform.isMobile) {
      // 桌面端：在新标签页中打开
      const leaf = app.workspace.getLeaf(true);
      await leaf.openFile(file, {eState: {line: lineNum}});
    } else {
      // 移动端：在当前标签页或新标签页中打开
      let leaf = app.workspace.activeLeaf;
      if (leaf === null) {
        leaf = app.workspace.getLeaf(true);
      }
      await leaf.openFile(file, {eState: {line: lineNum}});
    }
  }, 'Failed to show event in daily notes');
};
