import { Plugin, Notice} from "obsidian";
import { BigCalendar } from "./bigCalendar";
import { CALENDAR_VIEW_TYPE } from "./data/constants";
import { App } from "obsidian";
import addIcons from "src/ui/customIcons";
import { outputResults } from "./data/parseFile";

declare global {
  interface Window {
    app: App;
  }
}


export default class ReactStarterPlugin extends Plugin {
  async onload(): Promise<void> {

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

    // this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));

    if (!this.app.workspace.layoutReady) {
      this.app.workspace.onLayoutReady(async () => outputResults());
     } else {  
      outputResults();
    }
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
