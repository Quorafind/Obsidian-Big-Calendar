import {moment} from 'obsidian';
import {getDailyNote, getDailyNoteSettings} from 'obsidian-daily-notes-interface';
// import appStore from "../stores/appStore";
import dailyNotesService from '../services/dailyNotesService';
import {TFile} from 'obsidian';
import appStore from '../stores/appStore';
import {waitForInsert} from './obCreateEvent';
import {stringOrDate} from 'react-big-calendar';

export async function changeEvent(
  eventid: string,
  originalContent: string,
  content: string,
  eventType: string,
  eventStartDate: stringOrDate,
  eventEndDate: stringOrDate,
  originalEndDate: Date,
): Promise<Model.Event> {
  const {dailyNotes} = dailyNotesService.getState();
  const {vault} = appStore.getState().dailyNotesState.app;
  const idString = parseInt(eventid.slice(14));

  const haveEndTime = /⏲\s(\d{1,2}):(\d{2})/.test(originalContent);

  const startTimeString = eventid.slice(0, 13) + '00';
  const originalStartDate = moment(startTimeString, 'YYYYMMDDHHmmSS');
  const originalEndDateMoment = moment(originalEndDate);

  const dailyNote = getDailyNote(originalStartDate, dailyNotes);
  const fileContent = await vault.read(dailyNote);
  const fileLines = getAllLinesFromFile(fileContent);

  const removeCRLF = content.replace(/\n/g, '<br>');
  const eventStartMoment = moment(eventStartDate);
  const eventEndMoment = moment(eventEndDate);

  if (haveEndTime) {
    const eventEndHour = extractEventEndHourFromLine(originalContent);
    const eventEndMin = extractEventEndMinFromLine(originalContent);

    //TODO: Fix this
    const endTimeString = eventid.slice(0, 9) + eventEndHour + eventEndMin + '00';
    const originalEndDate = moment(endTimeString, 'YYYYMMDDHHmmSS');

    if (eventStartMoment.isSame(originalStartDate, 'day')) {
      if (
        eventStartMoment.isSame(originalStartDate, 'hour') &&
        eventStartMoment.isSame(originalStartDate, 'minute') &&
        eventEndMoment.isSame(originalEndDate, 'hour') &&
        eventEndMoment.isSame(originalEndDate, 'minute')
      ) {
        return;
      } else {
        const newEventId = eventStartMoment.format('YYYYMMDDHHmmSS') + idString;
        let newLine = fileLines[idString].replace(
          originalContent,
          '- [ ] ' + eventStartMoment.format('HH:mm') + ' ' + removeCRLF,
        );
        if (eventStartMoment.isBefore(eventEndMoment)) {
          if (/\^\S{6}$/.test(newLine)) {
            let endDate = '';
            let dueLabel = '📅';
            if (ifDueDate(newLine)) {
              dueLabel = getDueLabel(newLine);
              endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD');
              const dueDate = getDueDate(newLine);
              newLine = newLine.replace(dueDate, endDate);
            } else {
              if (
                eventEndMoment.diff(eventStartMoment, 'days') > 0 ||
                eventEndMoment.format('DD') !== eventStartMoment.format('DD')
              ) {
                if (newLine[newLine.length - 1] === ' ') {
                  endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                } else {
                  endDate = ' ' + dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                }
              }
              if (
                eventEndMoment.diff(eventStartMoment, 'minutes') == 30 &&
                eventEndMoment.diff(eventStartMoment, 'hours') == 0 &&
                eventEndMoment.diff(eventStartMoment, 'days') == 0
              ) {
                newLine = newLine.slice(newLine.length - 7) + endDate + newLine.slice(-7);
              } else {
                if (newLine[newLine.length - 1] === ' ') {
                  newLine =
                    newLine.slice(newLine.length - 7) +
                    endDate +
                    '⏲ ' +
                    eventEndMoment.format('HH:mm') +
                    newLine.slice(-7);
                } else {
                  newLine =
                    newLine.slice(newLine.length - 7) +
                    endDate +
                    ' ⏲ ' +
                    eventEndMoment.format('HH:mm') +
                    newLine.slice(-7);
                  // newLine = newLine.replace(/⏲\s(\d{1,2}):(\d{2})/, '⏲ ' + eventEndMoment.format('HH:mm'));
                }
              }
            }
          } else {
            let endDate = '';
            let dueLabel = '📅';
            if (ifDueDate(newLine)) {
              dueLabel = getDueLabel(newLine);
              endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD');
              const dueDate = getDueDate(newLine);
              newLine = newLine.replace(dueDate, endDate);
            } else {
              if (
                eventEndMoment.diff(eventStartMoment, 'days') > 0 ||
                eventEndMoment.format('DD') !== eventStartMoment.format('DD')
              ) {
                if (newLine[newLine.length - 1] === ' ') {
                  endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                } else {
                  endDate = ' ' + dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                }
              }
              if (
                eventEndMoment.diff(eventStartMoment, 'minutes') == 30 &&
                eventEndMoment.diff(eventStartMoment, 'hours') == 0 &&
                eventEndMoment.diff(eventStartMoment, 'days') == 0
              ) {
                newLine = newLine + endDate;
              } else {
                if (newLine[newLine.length - 1] === ' ') {
                  newLine = newLine + endDate + '⏲ ' + eventEndMoment.format('HH:mm');
                } else {
                  newLine = newLine + endDate + ' ⏲ ' + eventEndMoment.format('HH:mm');
                }
                // newLine = newLine.replace(/⏲\s(\d{1,2}):(\d{2})/, '⏲ ' + eventEndMoment.format('HH:mm'));
              }
            }
          }
        }
        // .replace(/⏲️ (\d{1,2})\:(\d{2})/, '⏲️ ' + eventEndHour + ':' + eventEndMin);

        const newFileContent = fileContent.replace(fileLines[idString], newLine);
        await vault.modify(dailyNote, newFileContent);
        return {
          id: newEventId,
          title: removeCRLF,
          originalContent: newLine,
          start: eventStartMoment.toDate(),
          end: eventEndMoment.toDate(),
          eventType: eventType,
          allDay: false,
        };
      }
    } else {
      // const newEventId = moment(eventDate).format('YYYYMMDDHHmmSS') + idString;
      if (eventStartMoment.format('HH:mm') === '00:00' && eventEndMoment.format('HH:mm') === '00:00') {
        // const newLine = fileLines[idString].replace(originalContent, '- [ ] ' + moment(originalDate).format('HH:mm') + ' ' + removeEnter);
        // const eventStartHour = eventStartMoment.format('HH');
        // const eventStartMin = eventStartMoment.format('mm');
        // const startEventDate = eventStartMoment.hour(parseInt(eventStartHour)).minute(parseInt(eventStartMin)).toDate();
        const replaceFileContent = fileContent.replace(fileLines[idString], '');
        await vault.modify(dailyNote, replaceFileContent);
        return await waitForInsert(removeCRLF, eventStartDate, eventEndDate);
      } else {
        // const newLine = fileLines[idString].replace(originalContent, '- [ ] ' + moment(eventDate).format('HH:mm') + ' ' + removeEnter);
        const newFileContent = fileContent.replace(fileLines[idString], '');
        await vault.modify(dailyNote, newFileContent);
        return await waitForInsert(removeCRLF, eventStartDate, eventEndDate);
        // return {
        //   id: newEventId,
        //   title: removeEnter,
        //   start: moment(eventDate).toDate(),
        //   end: moment(eventDate).toDate(),
        //   eventType: eventType,
        // };
      }
    }
  } else {
    if (eventStartMoment.isSame(originalStartDate, 'day')) {
      if (
        eventStartMoment.isSame(originalStartDate, 'hour') &&
        eventStartMoment.isSame(originalStartDate, 'minute') &&
        eventEndMoment.isSame(originalEndDateMoment) &&
        eventEndMoment.diff(eventStartMoment, 'minutes') == 30 &&
        eventEndMoment.diff(eventStartMoment, 'hours') == 0 &&
        eventEndMoment.diff(eventStartMoment, 'days') == 0
      ) {
        return;
      } else {
        const newEventId = eventStartMoment.format('YYYYMMDDHHmmSS') + idString;
        let newLine = fileLines[idString].replace(
          originalContent,
          '- [ ] ' + eventStartMoment.format('HH:mm') + ' ' + removeCRLF,
        );
        if (eventStartMoment.isBefore(eventEndMoment)) {
          if (/\^\S{6}$/.test(newLine)) {
            let endDate = '';
            let dueLabel = '📅';
            if (ifDueDate(newLine)) {
              dueLabel = getDueLabel(newLine);
              endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD');
              const dueDate = getDueDate(newLine);
              newLine = newLine.replace(dueDate, endDate);
            } else {
              if (
                eventEndMoment.diff(eventStartMoment, 'days') > 0 ||
                eventEndMoment.format('DD') !== eventStartMoment.format('DD')
              ) {
                if (newLine[newLine.length - 1] === ' ') {
                  endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                } else {
                  endDate = ' ' + dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                }
              }
              if (
                eventEndMoment.diff(eventStartMoment, 'minutes') == 30 &&
                eventEndMoment.diff(eventStartMoment, 'hours') == 0 &&
                eventEndMoment.diff(eventStartMoment, 'days') == 0
              ) {
                newLine = newLine.slice(newLine.length - 7) + endDate + newLine.slice(-7);
              } else {
                if (newLine[newLine.length - 1] === ' ') {
                  newLine =
                    newLine.slice(newLine.length - 7) +
                    endDate +
                    '⏲ ' +
                    eventEndMoment.format('HH:mm') +
                    newLine.slice(-7);
                } else {
                  newLine =
                    newLine.slice(newLine.length - 7) +
                    endDate +
                    ' ⏲ ' +
                    eventEndMoment.format('HH:mm') +
                    newLine.slice(-7);
                }
              }
            }
          } else {
            let endDate = '';
            let dueLabel = '📅';
            if (ifDueDate(newLine)) {
              dueLabel = getDueLabel(newLine);
              endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD');
              const dueDate = getDueDate(newLine);
              newLine = newLine.replace(dueDate, endDate);
            } else {
              if (
                eventEndMoment.diff(eventStartMoment, 'days') > 0 ||
                eventEndMoment.format('DD') !== eventStartMoment.format('DD')
              ) {
                if (newLine[newLine.length - 1] === ' ') {
                  endDate = dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                } else {
                  endDate = ' ' + dueLabel + ' ' + eventEndMoment.format('YYYY-MM-DD') + ' ';
                }
              }
              if (
                eventEndMoment.diff(eventStartMoment, 'minutes') == 30 &&
                eventEndMoment.diff(eventStartMoment, 'hours') == 0 &&
                eventEndMoment.diff(eventStartMoment, 'days') == 0
              ) {
                newLine = newLine + endDate;
              } else {
                if (newLine[newLine.length - 1] === ' ') {
                  newLine = newLine + endDate + '⏲ ' + eventEndMoment.format('HH:mm');
                } else {
                  newLine = newLine + endDate + ' ⏲ ' + eventEndMoment.format('HH:mm');
                }
              }
            }
          }
        }
        const newFileContent = fileContent.replace(fileLines[idString], newLine);
        await vault.modify(dailyNote, newFileContent);
        return {
          id: newEventId,
          title: removeCRLF,
          originalContent: newLine,
          start: eventStartMoment.toDate(),
          end: eventEndMoment.toDate(),
          eventType: eventType,
          allDay: false,
        };
      }
    } else {
      // const newEventId = moment(eventDate).format('YYYYMMDDHHmmSS') + idString;
      if (eventStartMoment.format('HH:mm') === '00:00' && eventEndMoment.format('HH:mm') === '00:00') {
        // const newLine = fileLines[idString].replace(originalContent, '- [ ] ' + moment(originalDate).format('HH:mm') + ' ' + removeEnter);
        // const eventStartHour = eventStartMoment.format('HH');
        // const eventStartMin = eventStartMoment.format('mm');

        // const startEventDate = eventStartMoment.toDate();
        // const endEventDate = eventEndMoment.toDate();

        const replaceFileContent = fileContent.replace(fileLines[idString], '');
        await vault.modify(dailyNote, replaceFileContent);
        return await waitForInsert(removeCRLF, eventStartDate, eventEndDate);
      } else {
        // const newLine = fileLines[idString].replace(originalContent, '- [ ] ' + moment(eventDate).format('HH:mm') + ' ' + removeEnter);
        const newFileContent = fileContent.replace(fileLines[idString], '');
        await vault.modify(dailyNote, newFileContent);
        return await waitForInsert(removeCRLF, eventStartDate, eventEndDate);
        // return {
        //   id: newEventId,
        //   title: removeEnter,
        //   start: moment(eventDate).toDate(),
        //   end: moment(eventDate).toDate(),
        //   eventType: eventType,
        // };
      }
    }
  }
}

export function getFile(eventid: string): TFile {
  const {dailyNotes} = dailyNotesService.getState();
  const timeString = eventid.slice(0, 14);
  const changeDate = moment(timeString, 'YYYYMMDDHHmmss');
  const dailyNote = getDailyNote(changeDate, dailyNotes);
  return dailyNote;
}

export function getDailyNotePath(): string {
  const dailyNotesSetting = getDailyNoteSettings();
  const dailyNotePath = dailyNotesSetting.folder;
  return dailyNotePath;
}

const getAllLinesFromFile = (cache: string) => cache.split(/\r?\n/);

const extractEventEndHourFromLine = (line: string): number => {
  let regexMatch;
  //eslint-disable-next-line
  regexMatch = '⏲s(\\d{1,2})\\:(\\d{2})';

  const regexMatchRe = new RegExp(regexMatch, '');
  //eslint-disable-next-line
  return parseInt(regexMatchRe.exec(line)?.[1]);
};

const extractEventEndMinFromLine = (line: string): number => {
  let regexMatch;
  //eslint-disable-next-line
  regexMatch = '⏲s(\\d{1,2})\\:(\\d{2})';

  const regexMatchRe = new RegExp(regexMatch, '');
  //eslint-disable-next-line
  return parseInt(regexMatchRe.exec(line)?.[2]);
};
//eslint-disable-next-line
const ifDueDate = (line: string) => /\s(📅|📆|(@{)|(\[due\:\:))\s?(\d{4}-\d{2}-\d{2})(\])?/.test(line);
//eslint-disable-next-line
const getDueLabel = (line: string) => /\s(📅|📆|(@{)|(\[due\:\:))\s?(\d{4}-\d{2}-\d{2})(\])?/.exec(line)?.[1];
//eslint-disable-next-line
const getDueDate = (line: string) => /\s(📅|📆|(@{)|(\[due\:\:))\s?(\d{4}-\d{2}-\d{2})(\])?/.exec(line)?.[0];
