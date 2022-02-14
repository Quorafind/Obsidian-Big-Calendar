import {moment} from 'obsidian';
import {getDailyNote} from 'obsidian-daily-notes-interface';
import {DefaultEventComposition} from '../bigCalendar';
// import appStore from "../stores/appStore";
import dailyNotesService from '../services/dailyNotesService';
// import { TFile } from "obsidian";
import appStore from '../stores/appStore';
import {sendEventToDelete} from './obDeleteEvent';

export async function obHideEvent(eventid: string): Promise<Model.Event> {
  const {dailyNotes} = dailyNotesService.getState();
  if (/\d{14,}/.test(eventid)) {
    const {vault} = appStore.getState().dailyNotesState.app;
    const timeString = eventid.slice(0, 14);
    const idString = parseInt(eventid.slice(14));
    const changeDate = moment(timeString, 'YYYYMMDDHHmmSS');
    const dailyNote = getDailyNote(changeDate, dailyNotes);
    const fileContent = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContent);
    const content = extractContentfromText(fileLines[idString]);
    const originalLine = '- ' + eventid + ' ' + content;
    const newLine = fileLines[idString];
    const newFileContent = fileContent.replace(newLine, '');
    await vault.modify(dailyNote, newFileContent);
    const deleteDate = await sendEventToDelete(originalLine);
    return deleteDate;
  }
}

const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/);
const extractContentfromText = (line: string) => {
  let regexMatch;
  if (
    DefaultEventComposition != '' &&
    /{TIME}/g.test(DefaultEventComposition) &&
    /{CONTENT}/g.test(DefaultEventComposition)
  ) {
    //eslint-disable-next-line
    regexMatch = '^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?' +
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
