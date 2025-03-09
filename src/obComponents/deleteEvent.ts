import {TFile, normalizePath, Notice} from 'obsidian';
import {moment} from 'obsidian';
import {createDailyNote, getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
import {insertAfterHandler} from './createEvent';
import fileService from '../services/fileService';
import {getAllLinesFromFile, getDailyNotePath, safeExecute} from '../api';
import {extractDeletedEventId, extractDeletedEventContent, extractDeletedEventDate} from '../utils/regexGenerators';

/**
 * Restores a deleted event from the delete.md file back to its original daily note
 *
 * @param deletedEventid The ID of the deleted event to restore
 * @returns Promise resolving to an array with the restored event info
 */
export async function restoreDeletedEvent(deletedEventid: string): Promise<any[]> {
  return await safeExecute(async () => {
    const {vault, metadataCache} = fileService.getState().app;

    if (!/\d{14,}/.test(deletedEventid)) {
      throw new Error('Invalid event ID format');
    }

    const filePath = getDailyNotePath();
    const absolutePath = filePath + '/delete.md';
    const deleteFile = metadataCache.getFirstLinkpathDest('', absolutePath);

    if (!(deleteFile instanceof TFile)) {
      throw new Error('Delete file not found');
    }

    let fileContents = await vault.read(deleteFile);
    let fileLines = getAllLinesFromFile(fileContents);

    if (fileLines.length === 0) {
      return [];
    }

    const lineNum = parseInt(deletedEventid.slice(14));
    const line = fileLines[lineNum - 1];
    const newDeletefileContents = fileContents.replace(line, '');
    await vault.modify(deleteFile, newDeletefileContents);

    if (!/^- (.+)$/.test(line)) {
      return [];
    }

    const id = extractDeletedEventId(line);
    const date = moment(id, 'YYYYMMDDHHmmss');
    const timeHour = date.format('HH');
    const timeMinute = date.format('mm');

    const newEvent = `- ${timeHour}:${timeMinute} ${extractDeletedEventContent(line)}`;
    const dailyNotes = await getAllDailyNotes();
    const existingFile = getDailyNote(date, dailyNotes);

    if (!existingFile) {
      const file = await createDailyNote(date);
      const fileContents = await vault.read(file);
      const newFileContent = await insertAfterHandler('- ', newEvent, fileContents);
      await vault.modify(file, newFileContent.content);
    } else {
      const fileContents = await vault.read(existingFile);
      const newFileContent = await insertAfterHandler('- ', newEvent, fileContents);
      await vault.modify(existingFile, newFileContent.content);
    }

    return [{deletedAt: ''}];
  }, 'Failed to restore deleted event');
}

/**
 * Permanently deletes an event from the delete.md file
 *
 * @param deletedEventid The ID of the deleted event to remove permanently
 * @returns Promise resolving to void
 */
export async function deleteForever(deletedEventid: string): Promise<void> {
  return await safeExecute(async () => {
    const {vault, metadataCache} = fileService.getState().app;

    if (!/\d{14,}/.test(deletedEventid)) {
      throw new Error('Invalid event ID format');
    }

    const filePath = getDailyNotePath();
    const absolutePath = filePath + '/delete.md';
    const deleteFile = metadataCache.getFirstLinkpathDest('', absolutePath);

    if (!(deleteFile instanceof TFile)) {
      return;
    }

    let fileContents = await vault.read(deleteFile);
    let fileLines = getAllLinesFromFile(fileContents);

    if (fileLines.length === 0) {
      return;
    }

    const lineNum = parseInt(deletedEventid.slice(14));
    const line = fileLines[lineNum - 1];

    if (/^- (.+)$/.test(line)) {
      const newFileContent = fileContents.replace(line, '');
      await vault.modify(deleteFile, newFileContent);
    }
  }, 'Failed to permanently delete event');
}

/**
 * Retrieves all deleted events from the delete.md file
 *
 * @returns Promise resolving to an array of deleted events
 */
export async function getDeletedEvents(): Promise<any[]> {
  return await safeExecute(async () => {
    const {vault, metadataCache} = fileService.getState().app;
    const deletedEvents: any[] = [];

    const filePath = getDailyNotePath();
    const absolutePath = filePath + '/delete.md';
    const deleteFile = metadataCache.getFirstLinkpathDest('', absolutePath);

    if (!(deleteFile instanceof TFile)) {
      return deletedEvents;
    }

    let fileContents = await vault.read(deleteFile);
    let fileLines = getAllLinesFromFile(fileContents);

    if (fileLines.length === 0) {
      return deletedEvents;
    }

    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];

      if (!/- /.test(line)) {
        continue;
      }

      const id = extractDeletedEventId(line);
      if (!id) continue;

      const timeString = id.slice(0, 13);
      const createdDate = moment(timeString, 'YYYYMMDDHHmmss');
      const deletedDateID = extractDeletedEventDate(line);
      if (!deletedDateID) continue;

      const deletedDate = moment(deletedDateID.slice(0, 13), 'YYYYMMDDHHmmss');
      const content = extractDeletedEventContent(line);
      if (!content) continue;

      deletedEvents.push({
        id: deletedDateID,
        content: content,
        user_id: 1,
        createdAt: createdDate.format('YYYY/MM/DD HH:mm:SS'),
        updatedAt: createdDate.format('YYYY/MM/DD HH:mm:SS'),
        deletedAt: deletedDate,
      });
    }

    return deletedEvents;
  }, 'Failed to get deleted events');
}

/**
 * Sends an event to the delete.md file
 *
 * @param eventContent The content of the event to delete
 * @returns Promise resolving to the deletion date
 */
export const sendEventToDelete = async (eventContent: string): Promise<any> => {
  return await safeExecute(async () => {
    const {metadataCache, vault} = fileService.getState().app;

    const filePath = getDailyNotePath();
    const absolutePath = filePath + '/delete.md';
    const deleteFile = metadataCache.getFirstLinkpathDest('', absolutePath);

    const date = moment();
    const deleteDate = date.format('YYYY/MM/DD HH:mm:ss');

    if (deleteFile instanceof TFile) {
      const fileContents = await vault.read(deleteFile);
      const fileLines = getAllLinesFromFile(fileContents);

      let lineNum;
      if (fileLines.length === 1 && fileLines[0] === '') {
        lineNum = 1;
      } else {
        lineNum = fileLines.length + 1;
      }

      const deleteDateID = date.format('YYYYMMDDHHmmss') + lineNum;
      await createDeleteEventInFile(deleteFile, fileContents, eventContent, deleteDateID);

      return deleteDate;
    } else {
      const deleteFilePath = normalizePath(absolutePath);
      const file = await createdeleteFile(deleteFilePath);

      const lineNum = 1;
      const deleteDateID = date.format('YYYYMMDDHHmmss') + lineNum;

      await createDeleteEventInFile(file, '', eventContent, deleteDateID);

      return deleteDate;
    }
  }, 'Failed to send event to delete');
};

/**
 * Creates a deleted event entry in the delete.md file
 *
 * @param file The delete.md file
 * @param fileContent The current content of the file
 * @param eventContent The content of the event to delete
 * @param deleteDate The deletion date
 * @returns Promise resolving to true if successful
 */
export const createDeleteEventInFile = async (
  file: TFile,
  fileContent: string,
  eventContent: string,
  deleteDate: string,
): Promise<any> => {
  return await safeExecute(async () => {
    const {vault} = fileService.getState().app;
    let newContent;

    if (fileContent === '') {
      newContent = eventContent + ' deletedAt: ' + deleteDate;
    } else {
      newContent = fileContent + '\n' + eventContent + ' deletedAt: ' + deleteDate;
    }

    await vault.modify(file, newContent);

    return true;
  }, 'Failed to create delete event in file');
};

/**
 * Creates the delete.md file if it doesn't exist
 *
 * @param path The path where to create the file
 * @returns Promise resolving to the created file
 */
export const createdeleteFile = async (path: string): Promise<TFile> => {
  return await safeExecute(async () => {
    const {vault} = fileService.getState().app;

    try {
      const createdFile = await vault.create(path, '');
      return createdFile;
    } catch (err) {
      console.error(`Failed to create file: '${path}'`, err);
      new Notice('Unable to create new file.');
      throw err;
    }
  }, 'Failed to create delete file');
};
