import {moment} from 'obsidian';
import {getDailyNote, getDailyNoteSettings} from 'obsidian-daily-notes-interface';
// import appStore from "../stores/appStore";
import dailyNotesService from '../services/dailyNotesService';
import {TFile} from 'obsidian';
import appStore from '../stores/appStore';

export async function changeEvent(
  eventid: string,
  originalContent: string,
  content: string,
  eventType: string,
): Promise<Model.Event> {
  const {dailyNotes} = dailyNotesService.getState();
  const {vault} = appStore.getState().dailyNotesState.app;
  const timeString = eventid.slice(0, 13) + '00';
  const idString = parseInt(eventid.slice(14));
  const originalDate = moment(timeString, 'YYYYMMDDHHmmSS');
  const dailyNote = getDailyNote(originalDate, dailyNotes);
  const fileContent = await vault.read(dailyNote);
  const fileLines = getAllLinesFromFile(fileContent);
  const removeEnter = content.replace(/\n/g, '<br>');
  const originalLine = fileLines[idString];
  const newLine = fileLines[idString].replace(originalContent, removeEnter);
  const newFileContent = fileContent.replace(originalLine, newLine);
  await vault.modify(dailyNote, newFileContent);
  return {
    id: eventid,
    title: removeEnter,
    start: moment(originalDate.format('YYYY/MM/DD HH:mm:SS')).toDate(),
    end: moment(originalDate.format('YYYY/MM/DD HH:mm:SS')).toDate(),
    eventType: eventType,
  };
}

export function getFile(eventid: string): TFile {
  const {dailyNotes} = dailyNotesService.getState();
  const timeString = eventid.slice(0, 13);
  const changeDate = moment(timeString, 'YYYYMMDDHHmmSS');
  const dailyNote = getDailyNote(changeDate, dailyNotes);
  return dailyNote;
}

export function getDailyNotePath(): string {
  const dailyNotesSetting = getDailyNoteSettings();
  const dailyNotePath = dailyNotesSetting.folder;
  return dailyNotePath;
}

const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/);
