import { Plugin, Notice } from "obsidian";
import { BigCalendar } from "./bigCalendar";
import { CALENDAR_VIEW_TYPE } from "./data/constants";
import { App } from "obsidian";
import addIcons from "src/ui/customIcons";
import { outputTasksResults } from "./data/parseFileTasks";
// import { outputResults } from "./data/parseFile";
import { BigCalendarSettingTab,DEFAULT_SETTINGS,BigCalendarSettings } from './setting';

declare global {
  interface Window {
    app: App;
    plugin: BigCalendarPlugin;
  }
}

export default class BigCalendarPlugin extends Plugin {
  public settings: BigCalendarSettings;
  // static settings: any;
  async onload(): Promise<void> {

    await this.loadSettings();
    this.addSettingTab(new BigCalendarSettingTab(this.app, this));

    this.registerView(
      CALENDAR_VIEW_TYPE,(leaf) => new BigCalendar(leaf, this),
    );

    addIcons();
    this.addRibbonIcon('changeTaskStatus', 'Big Calendar', () => {
			new Notice('Open Big Calendar Successfully');
      this.openCalendar();
		});

    this.addCommand({
      id: "open-big-calendar",
      name: "Open Big Calendar",
      callback: () => this.openCalendar(),
      hotkeys: [],
    });

    await this.loadSettings();

    // this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));

    // if (!this.app.workspace.layoutReady) {
    //   this.app.workspace.onLayoutReady(async () => outputTasksResults());
    //  } else {  
    //   outputTasksResults();
    // }
  }

  public async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  onunload() {
    this.app.workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);
    new Notice('Close Big Calendar Successfully');
  }

  // onLayoutReady(): void {
  //   if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length) {
  //     return;
  //   }
  //   this.app.workspace.getRightLeaf(false).setViewState({
  //     type: VIEW_TYPE,
  //     active: true,
  //   });
  // }

  async openCalendar() {
    const leaf = this.app.workspace.getLeaf(true);
    const neovisView = new BigCalendar(leaf, this);
    await leaf.open(neovisView);
  }
}
