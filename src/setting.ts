import {App, PluginSettingTab, Setting} from 'obsidian';
import type BigCalendar from './index';
import {t} from './translations/helper';

export interface BigCalendarSettings {
  StartDate: string;
  InsertAfter: string;
  DefaultEventComposition: string;
  ProcessEntriesBelow: string;
}

export const DEFAULT_SETTINGS: BigCalendarSettings = {
  StartDate: 'Sunday',
  InsertAfter: '# Journal',
  ProcessEntriesBelow: '',
  DefaultEventComposition: '{TIME} {CONTENT}',
};

export class BigCalendarSettingTab extends PluginSettingTab {
  plugin: BigCalendar;
  //eslint-disable-next-line
  private applyDebounceTimer: number = 0;

  constructor(app: App, plugin: BigCalendar) {
    super(app, plugin);
    this.plugin = plugin;
  }

  applySettingsUpdate() {
    clearTimeout(this.applyDebounceTimer);
    const plugin = this.plugin;
    this.applyDebounceTimer = window.setTimeout(() => {
      plugin.saveSettings();
    }, 100);
  }

  //eslint-disable-next-line
  async hide() {}

  async display() {
    await this.plugin.loadSettings();

    const {containerEl} = this;
    this.containerEl.empty();

    new Setting(containerEl).setHeading().setName(t('Regular Options'));

    new Setting(containerEl)
      .setName(t('First Day of Week'))
      .setDesc(t('Choose the first day of the week. Sunday is the default.'))
      .addDropdown((dropdown) =>
        dropdown
          .addOption('sunday', t('Sunday'))
          .addOption('monday', t('Monday'))
          .setValue(this.plugin.settings.StartDate)
          .onChange(async (value) => {
            this.plugin.settings.StartDate = value;
            this.applySettingsUpdate();
          }),
      );

    new Setting(containerEl)
      .setName(t('Insert after heading'))
      .setDesc(
        t('You should set the same heading below if you want to insert and process events below the same heading.'),
      )
      .addText((text) =>
        text
          .setPlaceholder('# JOURNAL')
          .setValue(this.plugin.settings.InsertAfter)
          .onChange(async (value) => {
            this.plugin.settings.InsertAfter = value;
            this.applySettingsUpdate();
          }),
      );

    new Setting(containerEl)
      .setName(t('Process Events below'))
      .setDesc(
        t(
          'Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.',
        ),
      )
      .addText((text) =>
        text
          .setPlaceholder(DEFAULT_SETTINGS.ProcessEntriesBelow)
          .setValue(this.plugin.settings.ProcessEntriesBelow)
          .onChange(async (value) => {
            this.plugin.settings.ProcessEntriesBelow = value;
            this.applySettingsUpdate();
          }),
      );

    new Setting(containerEl).setHeading().setName(t('Say Thank You'));

    new Setting(containerEl)
      .setName(t('Donate'))
      .setDesc(t('If you like this plugin, consider donating to support continued development:'))
      // .setClass("AT-extra")
      .addButton((bt) => {
        bt.buttonEl.outerHTML = `<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>`;
      });
  }
}
