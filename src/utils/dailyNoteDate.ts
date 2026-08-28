import {TFile, moment, App} from 'obsidian';
import {getDailyNoteSettings, getDateFromFile, getAllDailyNotes as libGetAllDailyNotes} from 'obsidian-daily-notes-interface';
import {fileService} from '@/services';

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

/**
 * Like the library's getAllDailyNotes, but keys files by dates parsed from
 * the full path so that daily notes in other months are not silently
 * dropped when the basename alone can't be parsed against the current
 * date's month/year.
 */
export function getAllDailyNotes(): Record<string, TFile> {
	const {folder} = getDailyNoteSettings();
	const app = fileService.getState().app;
	if (!app) return {};
	const root = app.vault.getAbstractFileByPath(folder);
	if (!root) return {};

	const files: Record<string, TFile> = {};
	const walk = (abstractFile: any) => {
		if (abstractFile instanceof TFile) {
			const date = getDateFromFileFromFullPath(abstractFile, 'day');
			if (date) {
				files[`day-${date.clone().startOf('day').format()}`] = abstractFile;
			}
		} else if (abstractFile.children) {
			for (const child of abstractFile.children) {
				walk(child);
			}
		}
	};
	walk(app.vault.getAbstractFileByPath(folder));
	return files;
}