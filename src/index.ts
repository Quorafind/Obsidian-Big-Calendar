import {Plugin, Notice, Platform, FileView} from 'obsidian';
import {BigCalendar} from './bigCalendar';
import {CALENDAR_VIEW_TYPE} from './constants';
import addIcons from './obComponents/customIcons';
import {BigCalendarSettingTab, DEFAULT_SETTINGS, BigCalendarSettings} from './setting';
import {t} from './translations/helper';

export default class BigCalendarPlugin extends Plugin {
  public settings: BigCalendarSettings;

  async onload(): Promise<void> {
    await this.loadSettings();

    // Register view and add icons
    this.registerView(CALENDAR_VIEW_TYPE, (leaf) => new BigCalendar(leaf, this));
    addIcons();

    // Add ribbon icon
    this.addRibbonIcon('changeTaskStatus', 'Big Calendar', () => {
      new Notice(t('Open Big Calendar Successfully'));
      this.openCalendar();
    });

    // Add command
    this.addCommand({
      id: 'open-big-calendar',
      name: t('Open Big Calendar'),
      callback: () => this.openCalendar(),
      hotkeys: [],
    });

    // Add settings tab
    this.addSettingTab(new BigCalendarSettingTab(this.app, this));
  }

  public async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  onunload(): void {
    this.app.workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);
    new Notice(t('Close big calendar successfully'));
  }

  async openCalendar(): Promise<void> {
    const workspace = this.app.workspace;
    workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);

    const leaf = workspace.getLeaf(
      !Platform.isMobile && workspace.activeLeaf && workspace.activeLeaf.view instanceof FileView,
    );

    await leaf.setViewState({type: CALENDAR_VIEW_TYPE});
    workspace.revealLeaf(leaf);
  }
}
