/**
 * Unified parser for tasks and list items in Obsidian Big Calendar
 * Provides high-performance parsing of lists, tasks, times, dates, and text content
 */

import {moment} from 'obsidian';
import {BigCalendarSettings} from '@/setting';

/**
 * Represents the status of a task
 */
export enum TaskStatus {
  // Standard statuses
  Todo = 'Todo',
  Done = 'Done',
  Cancelled = 'Cancelled',
  Forwarded = 'Forwarded',
  Deferred = 'Deferred',
  InProgress = 'InProgress',
  Question = 'Question',
  // Additional statuses
  Important = 'Important',
  Info = 'Info',
  Bookmark = 'Bookmark',
  Pro = 'Pro',
  Con = 'Con',
  Brainstorming = 'Brainstorming',
  Example = 'Example',
  Quote = 'Quote',
  Note = 'Note',
  Win = 'Win',
  Lose = 'Lose',
  Add = 'Add',
  Reviewed = 'Reviewed',
  // Default for non-recognized status characters
  Unknown = 'Unknown',
  // Non-task
  NotATask = 'NotATask',
}

/**
 * Maps status characters to TaskStatus enum values
 */
const STATUS_MAPPING: Record<string, TaskStatus> = {
  ' ': TaskStatus.Todo,
  x: TaskStatus.Done,
  X: TaskStatus.Done,
  '-': TaskStatus.Cancelled,
  '>': TaskStatus.Forwarded,
  D: TaskStatus.Deferred,
  '/': TaskStatus.InProgress,
  '?': TaskStatus.Question,
  '!': TaskStatus.Important,
  i: TaskStatus.Info,
  B: TaskStatus.Bookmark,
  P: TaskStatus.Pro,
  C: TaskStatus.Con,
  b: TaskStatus.Brainstorming,
  E: TaskStatus.Example,
  Q: TaskStatus.Quote,
  N: TaskStatus.Note,
  W: TaskStatus.Win,
  L: TaskStatus.Lose,
  '+': TaskStatus.Add,
  R: TaskStatus.Reviewed,
};

/**
 * Represents time information
 */
export interface TimeInfo {
  hour: number;
  minute: number;
  second?: number;
  isEndTime?: boolean;
}

/**
 * Represents date information
 */
export interface DateInfo {
  date: string; // YYYY-MM-DD format
  moment: moment.Moment;
  type: 'due' | 'start' | 'scheduled' | 'done';
  rawMatch?: string;
}

/**
 * Unified representation of a parsed line item
 */
export interface ParsedLine {
  // Basic information
  originalLine: string;
  content: string;
  indentation: string;

  // Task-specific information
  isTask: boolean;
  taskStatus?: TaskStatus;
  statusCharacter?: string;

  // Time and date information
  startTime?: TimeInfo;
  endTime?: TimeInfo;
  dates: DateInfo[];

  // Markers
  hasRecurrence: boolean;
  recurrenceRule?: string;
  blockLink?: string;

  // Line type information
  isListItem: boolean;
  listMarker: string;
}

/**
 * Regex patterns for parsing
 */
export const PATTERNS = {
  // Basic line structure
  LIST_ITEM: /^(\s*)(-|\*|\+|\d+\.)\s+(.*)$/,
  TASK: /^(\s*)(-|\*|\+|\d+\.)\s+\[(.)\]\s+(.*)$/,

  // Time patterns
  TIME_STANDARD: /(\d{1,2}):(\d{2})(?::(\d{2}))?/g,
  TIME_WITH_TAG: /<time>(\d{1,2}):(\d{2})(?::(\d{2}))?<\/time>/g,
  END_TIME: /⏲\s?(\d{1,2}):(\d{2})(?::(\d{2}))?/g,
  TIME_RANGE: /(\d{1,2}):(\d{2})(?::(\d{2}))?-(\d{1,2}):(\d{2})(?::(\d{2}))?/g,

  // Date patterns
  DUE_DATE: /\s(📅|📆|(@{)|(\[due::))\s?(\d{4}-\d{2}-\d{2})(\])?/g,
  START_DATE: /🛫\s?(\d{4}-\d{2}-\d{2})/g,
  SCHEDULED_DATE: /[⏳⌛]\s?(\d{4}-\d{2}-\d{2})/g,
  DONE_DATE: /✅\s?(\d{4}-\d{2}-\d{2})/g,

  // Additional markers
  RECURRENCE: /🔁([a-zA-Z0-9, !]+)$/,
  BLOCK_LINK: /\s\^([a-zA-Z0-9-]+)$/,
};

/**
 * Extracts start and end times from a line
 *
 * @param line The text line to parse
 * @returns Object containing start and end times if found
 */
export function extractTimes(line: string): {startTime?: TimeInfo; endTime?: TimeInfo} {
  const result: {startTime?: TimeInfo; endTime?: TimeInfo} = {};

  // First, check for time range format (HH:MM-HH:MM)
  const timeRangeMatches = [...line.matchAll(PATTERNS.TIME_RANGE)];
  if (timeRangeMatches.length > 0) {
    const match = timeRangeMatches[0];
    result.startTime = {
      hour: parseInt(match[1]),
      minute: parseInt(match[2]),
      second: match[3] ? parseInt(match[3]) : undefined,
      isEndTime: false,
    };
    result.endTime = {
      hour: parseInt(match[4]),
      minute: parseInt(match[5]),
      second: match[6] ? parseInt(match[6]) : undefined,
      isEndTime: true,
    };
    return result;
  }

  // Extract end time (prioritize)
  const endTimeMatch = [...line.matchAll(PATTERNS.END_TIME)][0];
  if (endTimeMatch) {
    result.endTime = {
      hour: parseInt(endTimeMatch[1]),
      minute: parseInt(endTimeMatch[2]),
      second: endTimeMatch[3] ? parseInt(endTimeMatch[3]) : undefined,
      isEndTime: true,
    };
  }

  // Extract start time - first check for time tag
  const timeTagMatches = [...line.matchAll(PATTERNS.TIME_WITH_TAG)];
  if (timeTagMatches.length > 0) {
    const match = timeTagMatches[0];
    result.startTime = {
      hour: parseInt(match[1]),
      minute: parseInt(match[2]),
      second: match[3] ? parseInt(match[3]) : undefined,
      isEndTime: false,
    };
  } else {
    // Check for standard time format
    const standardTimeMatches = [...line.matchAll(PATTERNS.TIME_STANDARD)];
    if (standardTimeMatches.length > 0) {
      // Use the first time as start time (if it's not the same as end time)
      const match = standardTimeMatches[0];
      const potentialStartTime = {
        hour: parseInt(match[1]),
        minute: parseInt(match[2]),
        second: match[3] ? parseInt(match[3]) : undefined,
        isEndTime: false,
      };

      if (
        !result.endTime ||
        result.endTime.hour !== potentialStartTime.hour ||
        result.endTime.minute !== potentialStartTime.minute
      ) {
        result.startTime = potentialStartTime;
      } else if (standardTimeMatches.length > 1) {
        // If the first time was the end time, try using the second time as start time
        const secondMatch = standardTimeMatches[1];
        result.startTime = {
          hour: parseInt(secondMatch[1]),
          minute: parseInt(secondMatch[2]),
          second: secondMatch[3] ? parseInt(secondMatch[3]) : undefined,
          isEndTime: false,
        };
      }
    }
  }

  return result;
}

/**
 * Extracts all dates from a line
 *
 * @param line The text line to parse
 * @returns Array of date information objects
 */
export function extractDates(line: string): DateInfo[] {
  const dates: DateInfo[] = [];

  // Extract due dates
  const dueDateMatches = [...line.matchAll(PATTERNS.DUE_DATE)];
  for (const match of dueDateMatches) {
    dates.push({
      date: match[4],
      moment: moment(match[4], 'YYYY-MM-DD'),
      type: 'due',
      rawMatch: match[0],
    });
  }

  // Extract start dates
  const startDateMatches = [...line.matchAll(PATTERNS.START_DATE)];
  for (const match of startDateMatches) {
    dates.push({
      date: match[1],
      moment: moment(match[1], 'YYYY-MM-DD'),
      type: 'start',
      rawMatch: match[0],
    });
  }

  // Extract scheduled dates
  const scheduledDateMatches = [...line.matchAll(PATTERNS.SCHEDULED_DATE)];
  for (const match of scheduledDateMatches) {
    dates.push({
      date: match[1],
      moment: moment(match[1], 'YYYY-MM-DD'),
      type: 'scheduled',
      rawMatch: match[0],
    });
  }

  // Extract done dates
  const doneDateMatches = [...line.matchAll(PATTERNS.DONE_DATE)];
  for (const match of doneDateMatches) {
    dates.push({
      date: match[1],
      moment: moment(match[1], 'YYYY-MM-DD'),
      type: 'done',
      rawMatch: match[0],
    });
  }

  return dates;
}

/**
 * Extracts recurrence information from a line
 *
 * @param line The text line to parse
 * @returns Recurrence rule text if found
 */
export function extractRecurrence(line: string): string | undefined {
  const match = line.match(PATTERNS.RECURRENCE);
  return match ? match[1].trim() : undefined;
}

/**
 * Extracts block link information from a line
 *
 * @param line The text line to parse
 * @returns Block link ID if found
 */
export function extractBlockLink(line: string): string | undefined {
  const match = line.match(PATTERNS.BLOCK_LINK);
  return match ? match[1] : undefined;
}

/**
 * Cleans the content by removing metadata markers
 *
 * @param content The original content text
 * @param dates Array of date information to remove
 * @param recurrenceRule Recurrence rule to remove (if present)
 * @param blockLink Block link to remove (if present)
 * @returns Cleaned content text
 */
export function cleanContent(content: string, dates: DateInfo[], recurrenceRule?: string, blockLink?: string): string {
  let result = content;

  // Remove dates
  for (const date of dates) {
    if (date.rawMatch) {
      result = result.replace(date.rawMatch, '');
    }
  }

  // Remove recurrence
  if (recurrenceRule) {
    result = result.replace(`🔁${recurrenceRule}`, '');
  }

  // Remove block link
  if (blockLink) {
    result = result.replace(`^${blockLink}`, '');
  }

  // Remove end time markers
  result = result.replace(/⏲\s?\d{1,2}:\d{2}(:\d{2})?/g, '');

  // Clean up any excess whitespace
  return result.trim();
}

/**
 * Parses a line for task or list item information
 *
 * @param line The text line to parse
 * @returns A ParsedLine object with all extracted information
 */
export function parseLine(line: string): ParsedLine {
  // Initialize the result object
  const result: ParsedLine = {
    originalLine: line,
    content: '',
    indentation: '',
    isTask: false,
    isListItem: false,
    listMarker: '',
    dates: [],
    hasRecurrence: false,
  };

  // Check if it's a task
  const taskMatch = line.match(PATTERNS.TASK);
  if (taskMatch) {
    result.isTask = true;
    result.isListItem = true;
    result.indentation = taskMatch[1];
    result.listMarker = taskMatch[2];
    result.statusCharacter = taskMatch[3];
    result.taskStatus = STATUS_MAPPING[taskMatch[3]] || TaskStatus.Unknown;
    result.content = taskMatch[4];
  } else {
    // Check if it's a list item
    const listMatch = line.match(PATTERNS.LIST_ITEM);
    if (listMatch) {
      result.isListItem = true;
      result.indentation = listMatch[1];
      result.listMarker = listMatch[2];
      result.content = listMatch[3];
      result.taskStatus = TaskStatus.NotATask;
    } else {
      // It's a regular line
      result.content = line;
      result.taskStatus = TaskStatus.NotATask;
    }
  }

  // Extract times
  const times = extractTimes(result.content);
  result.startTime = times.startTime;
  result.endTime = times.endTime;

  // Extract dates
  result.dates = extractDates(result.content);

  // Extract recurrence
  const recurrenceRule = extractRecurrence(result.content);
  result.hasRecurrence = !!recurrenceRule;
  result.recurrenceRule = recurrenceRule;

  // Extract block link
  result.blockLink = extractBlockLink(result.content);

  // Clean content by removing metadata markers
  result.content = cleanContent(result.content, result.dates, result.recurrenceRule, result.blockLink);

  return result;
}

/**
 * Checks if a line contains a token that indicates items below it should be parsed
 *
 * @param line The line to check
 * @param settings Plugin settings
 * @returns Boolean indicating if the line contains the parse below token
 */
export function lineContainsParseBelowToken(line: string, settings: BigCalendarSettings): boolean {
  if (settings.ProcessEntriesBelow === '') {
    return true;
  }

  try {
    const pattern = new RegExp(settings.ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), '');
    return pattern.test(line);
  } catch (e) {
    console.error('Invalid regex pattern in ProcessEntriesBelow setting', e);
    return false;
  }
}

/**
 * Checks if a line contains time information
 *
 * @param line The line to check
 * @returns Boolean indicating if the line contains time information
 */
export function lineContainsTime(line: string): boolean {
  return PATTERNS.TIME_STANDARD.test(line) || PATTERNS.TIME_WITH_TAG.test(line) || PATTERNS.END_TIME.test(line);
}

/**
 * Converts a ParsedLine to an event object
 *
 * @param parsedLine The parsed line
 * @param defaultDate The default date to use if no date is found
 * @param lineIndex The index of the line in the file (for ID generation)
 * @returns An event object compatible with full calendar
 */
export function convertToEvent(
  parsedLine: ParsedLine,
  defaultDate: moment.Moment,
  lineIndex: number,
  path: string,
): Model.Event | null {
  // Skip lines without time information
  if (!parsedLine.startTime) {
    return null;
  }

  // Determine the start date
  let startDate = defaultDate.clone();
  let endDate = defaultDate.clone();

  // Check for due date or start date
  for (const date of parsedLine.dates) {
    if (date.type === 'due') {
      endDate = date.moment.clone();
    } else if (date.type === 'start') {
      startDate = date.moment.clone();
    }
  }

  // Set start time
  startDate.hour(parsedLine.startTime.hour);
  startDate.minute(parsedLine.startTime.minute);
  startDate.second(parsedLine.startTime.second || 0);

  // Set end time if available, otherwise default to start time + 30 min
  if (parsedLine.endTime) {
    endDate.hour(parsedLine.endTime.hour);
    endDate.minute(parsedLine.endTime.minute);
    endDate.second(parsedLine.endTime.second || 0);
  } else {
    // Default duration: 30 minutes
    endDate = startDate.clone().add(30, 'minutes');
  }

  // If due date was used, ensure it includes time
  if (parsedLine.dates.some((d) => d.type === 'due')) {
    if (!parsedLine.endTime) {
      // If no end time was specified, keep the same time as start
      endDate.hour(parsedLine.startTime.hour);
      endDate.minute(parsedLine.startTime.minute);
      endDate.second(parsedLine.startTime.second || 0);
    }
  }

  // Generate unique ID
  const id = `${startDate.format('YYYYMMDDHHmm')}00${lineIndex}`;

  // Determine event type
  let eventType = 'default';
  if (parsedLine.isTask) {
    // Map task status to event type
    switch (parsedLine.taskStatus) {
      case TaskStatus.Todo:
        eventType = 'TASK-TODO';
        break;
      case TaskStatus.Done:
        eventType = 'TASK-DONE';
        break;
      case TaskStatus.Cancelled:
        eventType = 'TASK-CANCELLED';
        break;
      case TaskStatus.Forwarded:
        eventType = 'TASK-FORWARDED';
        break;
      case TaskStatus.Deferred:
        eventType = 'TASK-DEFERRED';
        break;
      case TaskStatus.InProgress:
        eventType = 'TASK-IN_PROGRESS';
        break;
      case TaskStatus.Question:
        eventType = 'TASK-QUESTION';
        break;
      case TaskStatus.Add:
        eventType = 'TASK-ADD';
        break;
      case TaskStatus.Reviewed:
        eventType = 'TASK-REVIEWED';
        break;
      case TaskStatus.Important:
        eventType = 'TASK-IMPORTANT';
        break;
      case TaskStatus.Info:
        eventType = 'TASK-INFO';
        break;
      case TaskStatus.Bookmark:
        eventType = 'TASK-BOOKMARK';
        break;
      case TaskStatus.Pro:
        eventType = 'TASK-PRO';
        break;
      case TaskStatus.Con:
        eventType = 'TASK-CON';
        break;
      case TaskStatus.Brainstorming:
        eventType = 'TASK-BRAINSTORMING';
        break;
      case TaskStatus.Example:
        eventType = 'TASK-EXAMPLE';
        break;
      case TaskStatus.Quote:
        eventType = 'TASK-QUOTE';
        break;
      case TaskStatus.Note:
        eventType = 'TASK-NOTE';
        break;
      case TaskStatus.Win:
        eventType = 'TASK-WIN';
        break;
      case TaskStatus.Lose:
        eventType = 'TASK-LOSE';
        break;
      default:
        eventType = 'default';
    }
  }

  // Create event object
  const event: Model.Event = {
    id,
    title: parsedLine.content,
    start: startDate.toDate(),
    end: endDate.toDate(),
    allDay: false,
    eventType,
    path,
  };

  // Add optional fields if available
  if (parsedLine.recurrenceRule) {
    event.recurrenceRule = parsedLine.recurrenceRule;
  }

  if (parsedLine.blockLink) {
    event.blockLink = parsedLine.blockLink;
  }

  return event;
}
