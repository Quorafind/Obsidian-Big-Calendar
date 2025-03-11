# Obsidian Big Calendar

A modern, feature-rich calendar plugin for Obsidian that integrates with your daily notes and tasks. Based on [React Big Calendar](https://github.com/jquense/react-big-calendar).

## Features

- **Multiple Calendar Views**

  - Month View
  - Week View
  - Day View
  - Agenda View

- **Seamless Obsidian Integration**

  - Automatically detects and displays tasks with time information
  - Parses time blocks from daily notes
  - Click on events to jump to the original note
  - Real-time updates when files are created, modified, or deleted

- **Customization Options**
  - Choose first day of the week (Sunday or Monday)
  - Configure where to insert and process events in your notes
  - Customize event display format

## Usage

### Time Formats

The plugin recognizes the following formats in your daily notes:

- Tasks with time range or time: `- [ ] 15:00 Meeting with team` or `- [ ] 14:00-18:00 Meeting with team`
- Time blocks: `- 19:00 Dinner with family`
- Tasks with no time: `- [ ] Review project proposal`

### Configuration

1. **First Day of Week**: Choose between Sunday (default) or Monday
2. **Insert after heading**: Specify where new events should be inserted in your notes
3. **Process Events below**: Only entries below this string/section will be processed

## Installation

### Community Plugins

1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "Big Calendar"
4. Click Install, then Enable

### BRAT (Beta Reviewer's Auto-update Tool)

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat)
2. Add `Quorafind/Obsidian-Big-Calendar` to BRAT

### Manual Installation

1. Download the latest release from [GitHub](https://github.com/Quorafind/Obsidian-Big-Calendar/releases)
2. Extract the files (main.js, manifest.json, styles.css) to your vault's plugins folder: `{{obsidian_vault}}/.obsidian/plugins/Obsidian-Big-Calendar`
3. Reload Obsidian
4. Enable the plugin in Obsidian settings

## Support Development

If you find Big Calendar useful, consider supporting its development:

<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"></a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
