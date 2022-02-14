import type { TFile } from "obsidian";
import { getDateFromFile, getDateUID } from "obsidian-daily-notes-interface";

export const classList = (obj: Record<string, boolean>): string[] => {
  return Object.entries(obj)
    .filter(([_k, v]) => !!v)
    .map(([k, _k]) => k);
};

export function clamp(
  num: number,
  lowerBound: number,
  upperBound: number
): number {
  return Math.min(Math.max(lowerBound, num), upperBound);
}

/**
 * Lookup the dateUID for a given file. It compares the filename
 * to the daily and weekly note formats to find a match.
 *
 * @param file
 */
export function getDateUIDFromFile(file: TFile | null): string {
  if (!file) {
    return null;
  }

  // TODO: I'm not checking the path!
  let date = getDateFromFile(file, "day");
  if (date) {
    return getDateUID(date, "day");
  }

  date = getDateFromFile(file, "week");
  if (date) {
    return getDateUID(date, "week");
  }
  return null;
}

// https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
export function escapeRegExp(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

//credit to chhoumann, original code from: https://github.com/chhoumann/quickadd/blob/7536a120701a626ef010db567cea7cf3018e6c82/src/utility.ts#L130
export function getLinesInString(input: string): string[] {
  const lines: string[] = [];
  let tempString = input;

  while (tempString.contains("\n")) {
      const lineEndIndex = tempString.indexOf("\n");
      lines.push(tempString.slice(0, lineEndIndex));
      tempString = tempString.slice(lineEndIndex + 1);
  }

  lines.push(tempString);

  return lines;
}