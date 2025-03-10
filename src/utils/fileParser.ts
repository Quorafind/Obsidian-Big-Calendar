/**
 * File parsing utilities for Obsidian Big Calendar
 * Contains functions for parsing and extracting information from note files
 */

import {
  createTimeRegex,
  createDueDateRegex,
  extractEventHour,
  extractEventMinute,
  ifDueDate,
  getDueLabel,
  getDueDate,
} from './regexGenerators';

/**
 * Splits a file content into lines
 *
 * @param content The file content as a string
 * @returns Array of lines
 */
export function getAllLinesFromFile(content: string): string[] {
  return content.split(/\r?\n/);
}

/**
 * Extracts time information from a line
 *
 * @param line The line to extract from
 * @returns Object containing hour and minute, or undefined if not found
 */
export function extractEventTime(line: string): {hour: number; minute: number} | undefined {
  const hour = extractEventHour(line);
  const minute = extractEventMinute(line);

  if (hour !== undefined && minute !== undefined) {
    return {hour, minute};
  }

  return undefined;
}

/**
 * Extracts due date information from a line
 *
 * @param line The line to extract from
 * @returns Object containing due date information
 */
export function extractDueDate(line: string): {
  hasDate: boolean;
  label?: string;
  date?: string;
  rawDate?: string;
} {
  const hasDate = ifDueDate(line);

  if (!hasDate) {
    return {hasDate: false};
  }

  const label = getDueLabel(line);
  const fullDateString = getDueDate(line);

  // Extract the raw date (YYYY-MM-DD) from the full date string
  const dateMatch = fullDateString?.match(/(\d{4}-\d{2}-\d{2})/);
  const rawDate = dateMatch ? dateMatch[0] : undefined;

  return {
    hasDate: true,
    label,
    date: fullDateString,
    rawDate,
  };
}

/**
 * Parses event information from a line
 *
 * @param line The line to parse
 * @returns Object containing event information
 */
export function parseEventInfoFromLine(line: string): {
  hasEvent: boolean;
  time?: {hour: number; minute: number};
  date?: {hasDate: boolean; label?: string; date?: string; rawDate?: string};
} {
  const time = extractEventTime(line);
  const date = extractDueDate(line);

  return {
    hasEvent: !!time || date.hasDate,
    time,
    date,
  };
}

/**
 * Checks if a line contains an event
 *
 * @param line The line to check
 * @returns Boolean indicating if the line contains an event
 */
export function lineContainsEvent(line: string): boolean {
  return createTimeRegex().test(line) || createDueDateRegex().test(line);
}
