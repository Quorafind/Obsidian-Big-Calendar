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
  return /\s(📅|📆|(@{)|(\[due::))\s?(\d{4}-\d{2}-\d{2})(\])?/;
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
  return /⏲\s?(\d{1,2}):(\d{2})/;
}

/**
 * Creates a regex for matching time range formats
 * Matches format: HH:MM-HH:MM
 *
 * @returns RegExp object for matching time ranges
 */
export function createTimeRangeRegex(): RegExp {
  return /(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})/;
}

/**
 * Extracts the hour component from a time notation
 *
 * @param line The line to extract from
 * @returns The hour as a number or undefined if not found
 */
export function extractEventHour(line: string): number | undefined {
  // First try to match time range format
  const rangeMatch = createTimeRangeRegex().exec(line);
  if (rangeMatch) {
    return parseInt(rangeMatch[1]);
  }

  // Try to match standard time at the beginning
  const standardMatch = /^-\s*(\d{1,2}):(\d{2})/.exec(line);
  if (standardMatch) {
    return parseInt(standardMatch[1]);
  }

  // If no match yet, try the timer emoji format
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
  // First try to match time range format
  const rangeMatch = createTimeRangeRegex().exec(line);
  if (rangeMatch) {
    return parseInt(rangeMatch[2]);
  }

  // Try to match standard time at the beginning
  const standardMatch = /^-\s*(\d{1,2}):(\d{2})/.exec(line);
  if (standardMatch) {
    return parseInt(standardMatch[2]);
  }

  // If no match yet, try the timer emoji format
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

/**
 * Creates a regex for matching deleted event IDs
 *
 * @returns RegExp object for matching deleted event IDs
 */
export function createDeletedEventIdRegex(): RegExp {
  return /^- (\d{14})(\d+)\s(.+)\s(deletedAt: )(.+)$/;
}

/**
 * Creates a regex for matching deleted event content
 *
 * @returns RegExp object for matching deleted event content
 */
export function createDeletedEventContentRegex(): RegExp {
  return /^- (\d+)\s(.+)\s(deletedAt: )(.+)$/;
}

/**
 * Creates a regex for matching deleted event date
 *
 * @returns RegExp object for matching deleted event date
 */
export function createDeletedEventDateRegex(): RegExp {
  return /^- (\d+)\s(.+)\s(deletedAt: )(.+)$/;
}

/**
 * Extracts the ID from a deleted event line
 *
 * @param line The line to extract from
 * @returns The ID or undefined if not found
 */
export function extractDeletedEventId(line: string): string | undefined {
  return createDeletedEventIdRegex().exec(line)?.[1];
}

/**
 * Extracts the content from a deleted event line
 *
 * @param line The line to extract from
 * @returns The content or undefined if not found
 */
export function extractDeletedEventContent(line: string): string | undefined {
  return createDeletedEventContentRegex().exec(line)?.[2];
}

/**
 * Extracts the deletion date from a deleted event line
 *
 * @param line The line to extract from
 * @returns The deletion date or undefined if not found
 */
export function extractDeletedEventDate(line: string): string | undefined {
  return createDeletedEventDateRegex().exec(line)?.[4];
}
