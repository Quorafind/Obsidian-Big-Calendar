import useFileStore from '@/stores/fileStore';
import {createDailyNote, getAllDailyNotes, getDailyNote, getDailyNoteSettings} from 'obsidian-daily-notes-interface';
import {App, TFile} from 'obsidian';

class FileService {
  public getState() {
    return useFileStore.getState();
  }

  public setApp(app: App) {
    useFileStore.getState().setApp(app);
    return app;
  }

  public initAllFiles() {
    const files = getAllDailyNotes();
    useFileStore.getState().setFiles(files);
    return;
  }

  public async getAllFiles() {
    const files = getAllDailyNotes();
    useFileStore.getState().setFiles(files);
    return files;
  }

  /**
   * Get all daily notes and update the store
   * This method is used by the BigCalendar component
   *
   * @returns Promise resolving to the daily notes
   */
  public async getMyAllDailyNotes() {
    return this.getAllFiles();
  }

  public async createDailyNote(date: moment.Moment): Promise<TFile> {
    const app = this.getState().app;
    if (!app) throw new Error('App not initialized');

    const dailyNote = await createDailyNote(date);
    return dailyNote;
  }

  public async getDailyNoteByEvent(date: moment.Moment): Promise<TFile> {
    const files = this.getState().files || (await this.getAllFiles());
    const dailyNote = getDailyNote(date, files);
    return dailyNote;
  }

  /**
   * Get the file by event ID
   *
   * @param eventId ID of the event
   * @returns The TFile object for the event
   */
  public getFile(event: Model.Event): TFile | null {
    const app = this.getState().app;
    if (!app) return null;

    // Assuming the event ID represents a path or part of a path to the file
    const file = app.vault.getFileByPath(event.path);
    return file || null;
  }

  /**
   * Get the path of the daily notes folder
   *
   * @returns Path to the daily notes folder
   */
  public getDailyNotePath(): string {
    const dailyNotesSetting = getDailyNoteSettings();
    const dailyNotePath = dailyNotesSetting.folder;
    return dailyNotePath;
  }

  /**
   * Read the content of a file
   *
   * @param filePath Path to the file
   * @returns Promise resolving to the file content
   */
  public async readFileContent(filePath: string): Promise<string> {
    const app = this.getState().app;
    if (!app) throw new Error('App not initialized');

    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file || !(file instanceof TFile)) {
      throw new Error(`File not found: ${filePath}`);
    }

    return await app.vault.read(file);
  }

  /**
   * Write content to a file
   *
   * @param filePath Path to the file
   * @param content Content to write
   * @returns Promise resolving when write is complete
   */
  public async writeFileContent(filePath: string, content: string): Promise<void> {
    const app = this.getState().app;
    if (!app) throw new Error('App not initialized');

    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file || !(file instanceof TFile)) {
      throw new Error(`File not found: ${filePath}`);
    }

    return await app.vault.modify(file, content);
  }
}

const fileService = new FileService();

export default fileService;
