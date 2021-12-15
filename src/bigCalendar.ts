import{WorkspaceLeaf,ItemView } from "obsidian";
import {CALENDAR_VIEW_TYPE} from './data/constants';
import React from "react";
import ReactDOM from "react-dom";

import { reactPreview } from "./ui/BigCalendarView";
import type MyPlugin from './index';

export class BigCalendar extends ItemView {
	plugin: MyPlugin;
	private reactComponent: React.ReactElement;

	constructor(leaf: WorkspaceLeaf, plugin: MyPlugin) {
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

		this.reactComponent = React.createElement(reactPreview);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ReactDOM.render(this.reactComponent, (this as any).contentEl);
	}
  
}