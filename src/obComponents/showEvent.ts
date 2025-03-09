import {moment} from 'obsidian';
import dailyNotesService from '../services/fileService';
import {Platform} from 'obsidian';

export const showEventInDailyNotes = async (eventId: string): Promise<any> => {
  const {app} = dailyNotesService.getState();

  const lineNum = parseInt(eventId.slice(14));
  const eventDateString = eventId.slice(0, 14);
  console.log(eventDateString);
  const date = moment(eventDateString, 'YYYYMMDDHHmmss');
  console.log(eventDateString);
  // const file = getDailyNote(date, dailyNotes);
  const file = await dailyNotesService.getDailyNoteByEvent(date);
  if (!Platform.isMobile) {
    const leaf = app.workspace.getLeaf(true);
    leaf.openFile(file, {eState: {line: lineNum}});
  } else {
    let leaf = app.workspace.activeLeaf;
    if (leaf === null) {
      leaf = app.workspace.getLeaf(true);
    }
    leaf.openFile(file, {eState: {line: lineNum}});
  }
  return;
};
