import {moment, Platform} from 'obsidian';
import fileService from '../services/fileService';
import {safeExecute} from '../api';

/**
 * Show event in daily notes
 *
 * @param eventId Event ID to show
 * @returns Promise解析为void
 */
export const showEventInDailyNotes = async (eventId: string): Promise<void> => {
  return await safeExecute(async () => {
    const {app} = fileService.getState();

    if (!/\d{14,}/.test(eventId)) {
      throw new Error('Invalid event ID format');
    }

    // Parse line number and date from event ID
    const lineNum = parseInt(eventId.slice(14));
    const eventDateString = eventId.slice(0, 14);
    const date = moment(eventDateString, 'YYYYMMDDHHmmss');

    // Get the daily note file
    const file = await fileService.getDailyNoteByEvent(date);
    if (!file) {
      throw new Error(`Daily note not found for date: ${date.format('YYYY-MM-DD')}`);
    }

    // Choose open method based on platform
    if (!Platform.isMobile) {
      // Desktop: open in new tab
      const leaf = app.workspace.getLeaf(true);
      await leaf.openFile(file, {eState: {line: lineNum}});
    } else {
      // Mobile: open in current or new tab
      let leaf = app.workspace.activeLeaf;
      if (leaf === null) {
        leaf = app.workspace.getLeaf(true);
      }
      await leaf.openFile(file, {eState: {line: lineNum}});
    }
  }, 'Failed to show event in daily notes');
};
