/**
 * Regex generators for Obsidian Big Calendar
 * Contains unified regex patterns for parsing dates, times, and other elements from notes
 */

/**
 * Creates a regex for matching due date notations in Obsidian notes
 * Matches formats: 📅 2023-01-01, 📆 2023-01-01, @{2023-01-01}, [due:: 2023-01-01]
 *
 * @returns RegExp object for matching due dates
 */
export function createDueDateRegex(): RegExp {
  return /\s(📅|📆|(@{)|(\[due\:\:))\s?(\d{4}-\d{2}-\d{2})(\])?/;
}

/**
 * Creates a regex for testing if a line contains a due date
 *
 * @param line The line to test
 * @returns boolean indicating if the line contains a due date
 */
export function ifDueDate(line: string): boolean {
  return createDueDateRegex().test(line);
}

/**
 * Extracts the due date label (📅, 📆, @{, [due::) from a line
 *
 * @param line The line to extract from
 * @returns The due date label or undefined if not found
 */
export function getDueLabel(line: string): string | undefined {
  return createDueDateRegex().exec(line)?.[1];
}

/**
 * Extracts the full due date string from a line
 *
 * @param line The line to extract from
 * @returns The full due date string or undefined if not found
 */
export function getDueDate(line: string): string | undefined {
  return createDueDateRegex().exec(line)?.[0];
}

/**
 * Creates a regex for matching time notations in Obsidian notes
 * Matches format: ⏲ HH:MM
 *
 * @returns RegExp object for matching times
 */
export function createTimeRegex(): RegExp {
  return /⏲\s?(\d{1,2})\:(\d{2})/;
}

/**
 * Extracts the hour component from a time notation
 *
 * @param line The line to extract from
 * @returns The hour as a number or undefined if not found
 */
export function extractEventHour(line: string): number | undefined {
  const match = createTimeRegex().exec(line);
  return match ? parseInt(match[1]) : undefined;
}

/**
 * Extracts the minute component from a time notation
 *
 * @param line The line to extract from
 * @returns The minute as a number or undefined if not found
 */
export function extractEventMinute(line: string): number | undefined {
  const match = createTimeRegex().exec(line);
  return match ? parseInt(match[2]) : undefined;
}

/**
 * Extracts date and time information from a line of text
 *
 * @param line The line to extract from
 * @returns Object containing date and time information
 */
export function createDateTimeExtractor(line: string): {
  hasDate: boolean;
  date?: string;
  dateLabel?: string;
  hasTime: boolean;
  hour?: number;
  minute?: number;
} {
  const hasDate = ifDueDate(line);
  const hasTime = createTimeRegex().test(line);

  return {
    hasDate,
    date: hasDate ? getDueDate(line) : undefined,
    dateLabel: hasDate ? getDueLabel(line) : undefined,
    hasTime,
    hour: hasTime ? extractEventHour(line) : undefined,
    minute: hasTime ? extractEventMinute(line) : undefined,
  };
}
