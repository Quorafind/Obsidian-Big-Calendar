import {App, PluginSettingTab, Setting, Modal} from 'obsidian';
import type BigCalendar from './index';
import {t} from './translations/helper';
import '@/less/setting.less';

export interface BigCalendarSettings {
  StartDate: string;
  InsertAfter: string;
  DefaultEventComposition: string;
  ProcessEntriesBelow: string;
  WorkspaceFilters: WorkspaceFilter[];
  DefaultFilterId: string;
}

export interface WorkspaceFilter {
  id: string;
  name: string;
  eventTypes: string[];
  contentRegex: string;
  folderPaths: string[];
  metadataKeys: string[];
  metadataValues: Record<string, string>;
  isEnabled: boolean;
}

export const DEFAULT_SETTINGS: BigCalendarSettings = {
  StartDate: 'Sunday',
  InsertAfter: '# Journal',
  ProcessEntriesBelow: '',
  DefaultEventComposition: '{TIME} {CONTENT}',
  WorkspaceFilters: [
    {
      id: 'default',
      name: 'Default',
      eventTypes: [],
      contentRegex: '',
      folderPaths: [],
      metadataKeys: [],
      metadataValues: {},
      isEnabled: true,
    },
  ],
  DefaultFilterId: 'default',
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

    new Setting(containerEl)
      .setHeading()
      .setName(t('Workspace Filters'))
      .addExtraButton((button) =>
        button.setIcon('plus').onClick(() => {
          const newFilter: WorkspaceFilter = {
            id: `filter-${Date.now()}`,
            name: `Filter ${this.plugin.settings.WorkspaceFilters.length}`,
            eventTypes: [],
            contentRegex: '',
            folderPaths: [],
            metadataKeys: [],
            metadataValues: {},
            isEnabled: true,
          };
          this.plugin.settings.WorkspaceFilters.push(newFilter);
          this.applySettingsUpdate();
          this.display();
        }),
      );

    this.plugin.settings.WorkspaceFilters.forEach((filter, index) => {
      const filterSetting = new Setting(containerEl)
        .setName(filter.name)
        .setDesc(t('Configure filter settings'))
        .addExtraButton((button) =>
          button.setIcon('pencil').onClick(() => {
            this.showFilterEditModal(filter, index);
          }),
        )
        .addToggle((toggle) =>
          toggle.setValue(filter.isEnabled).onChange(async (value) => {
            this.plugin.settings.WorkspaceFilters[index].isEnabled = value;
            this.applySettingsUpdate();
          }),
        );

      if (index > 0) {
        filterSetting.addButton((button) =>
          button.setButtonText(t('Delete')).onClick(() => {
            this.plugin.settings.WorkspaceFilters.splice(index, 1);
            this.applySettingsUpdate();
            this.display();
          }),
        );
      }
    });

    new Setting(containerEl)
      .setName(t('Default Filter'))
      .setDesc(t('Choose the default filter to apply when opening the calendar'))
      .addDropdown((dropdown) => {
        this.plugin.settings.WorkspaceFilters.forEach((filter) => {
          dropdown.addOption(filter.id, filter.name);
        });
        dropdown.setValue(this.plugin.settings.DefaultFilterId);
        dropdown.onChange(async (value) => {
          this.plugin.settings.DefaultFilterId = value;
          this.applySettingsUpdate();
        });
      });

    new Setting(containerEl).setHeading().setName(t('Say Thank You'));

    new Setting(containerEl)
      .setName(t('Donate'))
      .setDesc(t('If you like this plugin, consider donating to support continued development:'))
      // .setClass("AT-extra")
      .addButton((bt) => {
        bt.buttonEl.outerHTML = `<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>`;
      });
  }

  private showFilterEditModal(filter: WorkspaceFilter, index: number) {
    const modal = new FilterEditModal(this.app, filter, (updatedFilter: WorkspaceFilter) => {
      // Update the filter in the settings
      this.plugin.settings.WorkspaceFilters[index] = updatedFilter;
      this.applySettingsUpdate();
      this.display();
    });
    modal.open();
  }
}

// Modal for editing filter settings
class FilterEditModal extends Modal {
  private filter: WorkspaceFilter;
  private onSubmit: (filter: WorkspaceFilter) => void;
  private eventTypesEl: HTMLElement;
  private folderPathsEl: HTMLElement;
  private metadataKeysEl: HTMLElement;
  private metadataValuesEl: HTMLElement;

  constructor(app: App, filter: WorkspaceFilter, onSubmit: (filter: WorkspaceFilter) => void) {
    super(app);
    this.filter = {...filter}; // Create a copy to avoid modifying the original
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const {contentEl} = this;
    contentEl.empty();
    contentEl.createEl('h2', {text: t('Edit Filter')});

    // Filter name
    new Setting(contentEl).setName(t('Filter Name')).addText((text) => {
      text.setValue(this.filter.name).onChange((value) => {
        this.filter.name = value;
      });
    });

    // Content Regex
    new Setting(contentEl)
      .setName(t('Content Regex'))
      .setDesc(t('Regular expression to match against event content'))
      .addText((text) => {
        text.setValue(this.filter.contentRegex).onChange((value) => {
          this.filter.contentRegex = value;
        });
      });

    // Event Types
    new Setting(contentEl)
      .setName(t('Event Types'))
      .setDesc(t('Types of events to include in this filter'))
      .addButton((button) => {
        button
          .setIcon('plus')
          .setTooltip(t('Add Event Type'))
          .onClick(() => {
            const input = new Setting(this.eventTypesEl)
              .addText((text) => {
                text.setPlaceholder(t('Enter event type'));
              })
              .addButton((btn) => {
                btn.setButtonText(t('Cancel')).onClick(() => {
                  input.clear();
                  input.settingEl.detach();
                });
              })
              .addButton((btn) => {
                btn.setButtonText(t('Add')).onClick(() => {
                  const value = (input.components[0] as any).inputEl.value;
                  if (value && !this.filter.eventTypes.includes(value)) {
                    this.filter.eventTypes.push(value);
                    this.renderEventTypes();
                  }
                });
              });
          });
      });

    this.eventTypesEl = contentEl.createDiv('event-types-container');
    this.renderEventTypes();

    // Folder Paths
    new Setting(contentEl)
      .setName(t('Folder Paths'))
      .setDesc(t('Folder paths to include in this filter'))
      .addButton((button) => {
        button
          .setIcon('plus')
          .setTooltip(t('Add Folder Path'))
          .onClick(() => {
            const input = new Setting(this.folderPathsEl)
              .addText((text) => {
                text.setPlaceholder(t('Enter folder path'));
              })
              .addButton((btn) => {
                btn.setButtonText(t('Cancel')).onClick(() => {
                  input.clear();
                  input.settingEl.detach();
                });
              })
              .addButton((btn) => {
                btn.setButtonText(t('Add')).onClick(() => {
                  const value = (input.components[0] as any).inputEl.value;
                  if (value && !this.filter.folderPaths.includes(value)) {
                    this.filter.folderPaths.push(value);
                    this.renderFolderPaths();
                  }
                });
              });
          });
      });

    this.folderPathsEl = contentEl.createDiv('folder-paths-container');
    this.renderFolderPaths();

    // Metadata Keys
    new Setting(contentEl)
      .setName(t('Metadata Keys'))
      .setDesc(t('Metadata keys that should exist in the file'))
      .addButton((button) => {
        button
          .setIcon('plus')
          .setTooltip(t('Add Metadata Key'))
          .onClick(() => {
            const input = new Setting(this.metadataKeysEl)
              .addText((text) => {
                text.setPlaceholder(t('Enter metadata key'));
              })
              .addButton((btn) => {
                btn.setButtonText(t('Cancel')).onClick(() => {
                  input.clear();
                  input.settingEl.detach();
                });
              })
              .addButton((btn) => {
                btn.setButtonText(t('Add')).onClick(() => {
                  const value = (input.components[0] as any).inputEl.value;
                  if (value && !this.filter.metadataKeys.includes(value)) {
                    this.filter.metadataKeys.push(value);
                    this.renderMetadataKeys();
                  }
                });
              });
          });
      });

    this.metadataKeysEl = contentEl.createDiv('metadata-keys-container');
    this.renderMetadataKeys();

    // Metadata Values
    new Setting(contentEl)
      .setName(t('Metadata Values'))
      .setDesc(t('Key-value pairs for matching specific metadata values'))
      .addButton((button) => {
        button
          .setIcon('plus')
          .setTooltip(t('Add Metadata Value'))
          .onClick(() => {
            const container = this.metadataValuesEl.createDiv('metadata-value-pair');
            const keyInput = new Setting(container).setName(t('Key')).addText((text) => {
              text.setPlaceholder(t('Enter metadata key'));
            });

            const valueInput = new Setting(container).setName(t('Value')).addText((text) => {
              text.setPlaceholder(t('Enter metadata value'));
            });

            new Setting(container)
              .addButton((btn) => {
                btn.setButtonText(t('Cancel')).onClick(() => {
                  container.remove();
                });
              })
              .addButton((btn) => {
                btn.setButtonText(t('Add')).onClick(() => {
                  const key = (keyInput.components[0] as any).inputEl.value;
                  const value = (valueInput.components[0] as any).inputEl.value;
                  if (key) {
                    this.filter.metadataValues[key] = value;
                    this.renderMetadataValues();
                    container.remove();
                  }
                });
              });
          });
      });

    this.metadataValuesEl = contentEl.createDiv('metadata-values-container');
    this.renderMetadataValues();

    // Save button
    new Setting(contentEl).addButton((button) => {
      button
        .setButtonText(t('Save'))
        .setCta()
        .onClick(() => {
          this.onSubmit(this.filter);
          this.close();
        });
    });
  }

  onClose() {
    const {contentEl} = this;
    contentEl.empty();
  }

  private renderEventTypes() {
    this.eventTypesEl.empty();
    this.filter.eventTypes.forEach((type, index) => {
      new Setting(this.eventTypesEl)
        .setName(type)
        .addButton((btn) => {
          btn.setButtonText(t('Remove')).onClick(() => {
            this.filter.eventTypes.splice(index, 1);
            this.renderEventTypes();
          });
        })
        .addButton((button) => {
          button.setButtonText(t('Remove')).onClick(() => {
            this.filter.eventTypes.splice(index, 1);
            this.renderEventTypes();
          });
        });
    });
  }

  private renderFolderPaths() {
    this.folderPathsEl.empty();
    this.filter.folderPaths.forEach((path, index) => {
      new Setting(this.folderPathsEl).setName(path).addButton((button) => {
        button.setButtonText(t('Remove')).onClick(() => {
          this.filter.folderPaths.splice(index, 1);
          this.renderFolderPaths();
        });
      });
    });
  }

  private renderMetadataKeys() {
    this.metadataKeysEl.empty();
    this.filter.metadataKeys.forEach((key, index) => {
      new Setting(this.metadataKeysEl).setName(key).addButton((button) => {
        button.setButtonText(t('Remove')).onClick(() => {
          this.filter.metadataKeys.splice(index, 1);
          this.renderMetadataKeys();
        });
      });
    });
  }

  private renderMetadataValues() {
    this.metadataValuesEl.empty();
    Object.entries(this.filter.metadataValues).forEach(([key, value]) => {
      new Setting(this.metadataValuesEl).setName(`${key}: ${value}`).addButton((button) => {
        button.setButtonText(t('Remove')).onClick(() => {
          delete this.filter.metadataValues[key];
          this.renderMetadataValues();
        });
      });
    });
  }
}
