import { Plugin, Notice} from "obsidian";
import { BigCalendar } from "./bigCalendar";
import { VIEW_TYPE } from "./data/constants";
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
    addIcons();
    this.addRibbonIcon('changeTaskStatus', 'Big Calendar', () => {
			new Notice('Open Big Calendar Successfully');
      this.openCalendar();
		});

    this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));

    if (!this.app.workspace.layoutReady) {
      this.app.workspace.onLayoutReady(async () => outputResults());
     } else {  
      outputResults();
    }
  }

  onunload() {
    new Notice('Close Big Calendar Successfully');
  }

  onLayoutReady(): void {
    if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length) {
      return;
    }
    this.app.workspace.getRightLeaf(false).setViewState({
      type: VIEW_TYPE,
    });
  }

  async openCalendar() {
    const leaf = this.app.workspace.getLeaf(false);

    const neovisView = new BigCalendar(leaf, this);
    await leaf.open(neovisView);

  }
}
