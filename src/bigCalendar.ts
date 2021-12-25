import { WorkspaceLeaf , ItemView } from "obsidian";
import {CALENDAR_VIEW_TYPE} from './data/constants';
import React from "react";
import ReactDOM from "react-dom";
import { closeTaskTimerID, closeTimerID } from "./ui/BigCalendarView";

import { reactPreview } from './ui/BigCalendarView';
import type BigCalendarPlugin from './index';
import { outputTasksResults } from "./data/parseFileTasks";

export class BigCalendar extends ItemView {
	plugin: BigCalendarPlugin;
	private reactComponent: React.ReactElement;

	constructor(leaf: WorkspaceLeaf, plugin: BigCalendarPlugin) {
		super(leaf);
		this.plugin = plugin;
	}
  
	getDisplayText(): string {
		// TODO: Make this interactive: Either the active workspace or the local graph
		return 'Big Calendar';
	}

	getIcon(): string {
		return "calendar-with-checkmark";
	}
  
	getViewType(): string {
		return CALENDAR_VIEW_TYPE;
	}

	async onOpen(): Promise<void> {

		await this.plugin.loadSettings();

		InsertAfter = this.plugin.settings.InsertAfter;
		StartDate = this.plugin.settings.StartDate;
		this.registerInterval(closeTimerID);
		this.registerInterval(closeTaskTimerID);

		outputTasksResults();

		this.reactComponent = React.createElement(reactPreview);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ReactDOM.render(this.reactComponent, (this as any).contentEl);
	}

	async onClose() {
		clearInterval(closeTimerID);
		clearInterval(closeTaskTimerID);
		// Nothing to clean up.
	}
}

export let InsertAfter: string;
export let StartDate: string;