import {WorkspaceLeaf, ItemView, TFile} from 'obsidian';
import {CALENDAR_VIEW_TYPE} from './constants';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import type BigCalendarPlugin from './index';
import {fileService, eventService} from '@/services';
import {getDateFromFile} from 'obsidian-daily-notes-interface';

export class BigCalendar extends ItemView {
  plugin: BigCalendarPlugin;
  private root: ReactDOM.Root | null = null;

  constructor(leaf: WorkspaceLeaf, plugin: BigCalendarPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getDisplayText(): string {
    return 'Big Calendar';
  }

  getIcon(): string {
    return 'calendar-with-checkmark';
  }

  getViewType(): string {
    return CALENDAR_VIEW_TYPE;
  }

  private async onFileDeleted(file: TFile): Promise<void> {
    if (getDateFromFile(file, 'day')) {
      await fileService.getAllFiles();
      eventService.clearEvents();
      eventService.fetchAllEvents(this.app);
    }
  }

  private async onFileModified(file: TFile): Promise<void> {
    const date = getDateFromFile(file, 'day');

    if (date && this.root) {
      // eventService.clearEvents();
      //   await pushNewEvents(file);
      eventService.fetchAllEvents(this.app);
    }
  }

  private onFileCreated(file: TFile): void {
    if (this.app.workspace.layoutReady && this.root) {
      if (getDateFromFile(file, 'day')) {
        fileService.getAllFiles();
        // eventService.clearEvents();
        eventService.fetchAllEvents(this.app);
      }
    }
  }

  //   private onCalendarClose() {
  //     storage.remove(['currentDate']);
  //     // Nothing to clean up.
  //   }

  async onOpen(): Promise<void> {
    this.onFileCreated = this.onFileCreated.bind(this);
    this.onFileDeleted = this.onFileDeleted.bind(this);
    this.onFileModified = this.onFileModified.bind(this);

    this.registerEvent(this.app.vault.on('create', this.onFileCreated));
    this.registerEvent(this.app.vault.on('delete', this.onFileDeleted));
    this.registerEvent(this.app.vault.on('modify', this.onFileModified));

    this.root = ReactDOM.createRoot(this.contentEl);
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async onClose() {
    // Clean up React 18 root
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}
