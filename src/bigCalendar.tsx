import {WorkspaceLeaf, ItemView, TFile, setIcon} from 'obsidian';
import {CALENDAR_VIEW_TYPE} from './constants';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import type BigCalendarPlugin from './index';
import {fileService, eventService} from '@/services';
import {getDateFromFile} from 'obsidian-daily-notes-interface';
import {ViewProvider} from '@/hooks/useView';
import {t} from '@/translations/helper';

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
      // Get updates only for this specific file's events
      eventService.clearEventsForFile(file.path);

      // Still need to update our files list, but don't reprocess all events
      await fileService.getAllFiles();
    }
  }

  private async onFileModified(file: TFile): Promise<void> {
    const date = getDateFromFile(file, 'day');

    if (date && this.root) {
      // Update only events from this specific file
      await eventService.fetchEventsFromFile(this.app, file);
    }
  }

  private onFileCreated(file: TFile): void {
    if (this.app.workspace.layoutReady && this.root) {
      if (getDateFromFile(file, 'day')) {
        // Update our files list
        fileService.getAllFiles();

        // Process only events from this new file
        eventService.fetchEventsFromFile(this.app, file);
      }
    }
  }

  async onOpen(): Promise<void> {
    this.onFileCreated = this.onFileCreated.bind(this);
    this.onFileDeleted = this.onFileDeleted.bind(this);
    this.onFileModified = this.onFileModified.bind(this);

    this.registerEvent(this.app.vault.on('create', this.onFileCreated));
    this.registerEvent(this.app.vault.on('delete', this.onFileDeleted));
    this.registerEvent(this.app.vault.on('modify', this.onFileModified));

    const actionElement = this.addAction('filter', t('Filter'), () => {
      setIcon(actionElement, !this.contentEl.hasClass('filter-open') ? 'filter' : 'filter-x');
      this.contentEl.toggleClass('filter-open', !this.contentEl.hasClass('filter-open'));
    });

    this.root = ReactDOM.createRoot(this.contentEl);
    this.root.render(
      <React.StrictMode>
        <ViewProvider initialView={this}>
          <App />
        </ViewProvider>
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
