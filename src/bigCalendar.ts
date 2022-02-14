import {WorkspaceLeaf, ItemView, TFile} from 'obsidian';
import {CALENDAR_VIEW_TYPE} from './constants';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import type BCalendar from './index';
import type BigCalendarPlugin from './index';
import {dailyNotesService, eventService} from './services';
import {getDateFromFile} from 'obsidian-daily-notes-interface';

export class BigCalendar extends ItemView {
  plugin: BigCalendarPlugin;
  private bigCalendarComponent: React.ReactElement;

  constructor(leaf: WorkspaceLeaf, plugin: BigCalendarPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getDisplayText(): string {
    // TODO: Make this interactive: Either the active workspace or the local graph
    return 'Big Calendar';
  }

  getIcon(): string {
    return 'calendar-with-checkmark';
  }

  getViewType(): string {
    return CALENDAR_VIEW_TYPE;
  }

  private onEventsSettingsUpdate(): void {
    eventService.clearEvents();
    eventService.fetchAllEvents();
  }

  private async onFileDeleted(file: TFile): Promise<void> {
    if (getDateFromFile(file, 'day')) {
      await dailyNotesService.getMyAllDailyNotes();
      eventService.clearEvents();
      eventService.fetchAllEvents();
    }
  }

  private async onFileModified(file: TFile): Promise<void> {
    const date = getDateFromFile(file, 'day');

    if (date && this.bigCalendarComponent) {
      // eventService.clearEvents();
      eventService.fetchAllEvents();
    }
  }

  private onFileCreated(file: TFile): void {
    if (this.app.workspace.layoutReady && this.bigCalendarComponent) {
      if (getDateFromFile(file, 'day')) {
        dailyNotesService.getMyAllDailyNotes();
        // eventService.clearEvents();
        eventService.fetchAllEvents();
      }
    }
  }

  async onOpen(): Promise<void> {
    this.onEventsSettingsUpdate = this.onEventsSettingsUpdate.bind(this);
    this.onFileCreated = this.onFileCreated.bind(this);
    this.onFileDeleted = this.onFileDeleted.bind(this);
    this.onFileModified = this.onFileModified.bind(this);

    this.registerEvent(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (<any>this.app.workspace).on('obsidian-events:settings-updated', this.onEventsSettingsUpdate),
    );

    this.registerEvent(this.app.vault.on('create', this.onFileCreated));
    this.registerEvent(this.app.vault.on('delete', this.onFileDeleted));
    this.registerEvent(this.app.vault.on('modify', this.onFileModified));

    dailyNotesService.getApp(this.app);

    InsertAfter = this.plugin.settings.InsertAfter;
    StartDate = this.plugin.settings.StartDate;
    DefaultEventComposition = this.plugin.settings.DefaultEventComposition;
    ProcessEntriesBelow = this.plugin.settings.ProcessEntriesBelow;

    this.bigCalendarComponent = React.createElement(App);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ReactDOM.render(this.bigCalendarComponent, (this as any).contentEl);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async onClose() {
    // Nothing to clean up.
  }
}

export let InsertAfter: string;
export let StartDate: string;
export let DefaultEventComposition: string;
export let ProcessEntriesBelow: string;
