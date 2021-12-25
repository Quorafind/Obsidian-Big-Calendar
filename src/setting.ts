import { App , PluginSettingTab, Setting, } from "obsidian";
import type BigCalendarPlugin from "./index";

export interface BigCalendarSettings {
    StartDate: string;
    InsertAfter: string;
  }
  
export const DEFAULT_SETTINGS: BigCalendarSettings = {
    StartDate: "Sunday",
    InsertAfter: "# Journal",
};

export class BigCalendarSettingTab extends PluginSettingTab {

    plugin: BigCalendarPlugin;
    //eslint-disable-next-line
    private applyDebounceTimer: number = 0;

    constructor(app: App, plugin: BigCalendarPlugin) {
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

        const { containerEl } = this;
        this.containerEl.empty();

        new Setting(containerEl)
        .setName("FIRST_DAY_of_WEEK")
        .setDesc("CHOOSE_WHICH_DAY_YOU_WANT")
        .addDropdown((dropdown) =>
          dropdown
            .addOption("sunday", "Sunday")
            .addOption("monday", "Monday")
            .setValue(this.plugin.settings.StartDate)
            .onChange(async (value) => {
              this.plugin.settings.StartDate = value;
              this.applySettingsUpdate();
            }),
        );

        new Setting(containerEl)
        .setName("INSERT_AFTER")
        .setDesc("INSERT_AFTER")
        .addText((text) =>
          text
            .setPlaceholder("# JOURNAL")
            .setValue(this.plugin.settings.InsertAfter)
            .onChange(async (value) => {
              this.plugin.settings.InsertAfter = value;
              this.applySettingsUpdate();
            }),
        );
    }

}