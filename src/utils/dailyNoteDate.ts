import {TFile, moment} from 'obsidian';
import {getDailyNoteSettings, getDateFromFile} from 'obsidian-daily-notes-interface';

/**
 * Parses a daily note's date from its full path (relative to the daily notes
 * folder) using the complete daily notes format.
 *
 * The upstream library parses only the file basename with only the last
 * segment of the format (e.g. "DD. dddd"). Without year and month context,
 * moment fills missing fields with the current date, so notes for dates in
 * other months resolve to the wrong day or fail to parse entirely.
 */
export function getDateFromFileFromFullPath(file: TFile, granularity: 'day'): moment.Moment | null {
	if (granularity !== 'day') {
		return getDateFromFile(file, granularity);
	}
	try {
		const {format, folder} = getDailyNoteSettings();
		let relativePath = file.path;
		if (folder && file.path.startsWith(`${folder}/`)) {
			relativePath = file.path.slice(folder.length + 1);
		}
		// Strip the .md extension before parsing
		relativePath = relativePath.replace(/\.md$/i, '');
		const date = moment(relativePath, format, true);
		if (date.isValid()) {
			return date;
		}
	} catch (e) {
		// fall through to the library's default behavior
	}
	return getDateFromFile(file, granularity);
}