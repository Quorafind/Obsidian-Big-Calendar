// import { moment } from 'obsidian';
// import userService from "./userService";
// import api from "../helpers/api";
import useDailyNotesStore from '../stores/dailyNotesStore';
import {getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
import {App, TFile, moment} from 'obsidian';
// Using moment from obsidian instead of the direct import
import type {Moment} from 'moment';
// import { Moment}  from "obsidian";

class DailyNotesService {
  public getState() {
    return useDailyNotesStore.getState();
  }

  public getApp(app: App) {
    useDailyNotesStore.getState().setApp(app);
    return app;
  }

  public async getMyAllDailyNotes() {
    const dailyNotes = getAllDailyNotes();
    useDailyNotesStore.getState().setDailyNotes(dailyNotes);
    return dailyNotes;
  }

  // public pushDailyNote(dailyNote: TFile) {
  //   appStore.dispatch({
  //     type: "INSERT_DAILYNOTE",
  //     payload: {
  //       event: {
  //         ...event,
  //       },
  //     },
  //   });
  // }

  public async getDailyNoteByEvent(date: Moment): Promise<TFile> {
    const dailyNotes = this.getState().dailyNotes || (await this.getMyAllDailyNotes());
    const dailyNote = getDailyNote(date, dailyNotes);
    return dailyNote;
  }
}

const dailyNotesService = new DailyNotesService();

export default dailyNotesService;
