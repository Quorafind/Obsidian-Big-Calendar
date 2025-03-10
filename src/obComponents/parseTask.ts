// Credits go to Schemar's Tasks Plugin: https://github.dev/schemar/obsidian-tasks

import {moment} from 'obsidian';
import {Recurrence} from './parseTasksRecurrence';
import {parseLine, TaskStatus as ParserTaskStatus, DateInfo} from './parser';

export enum Status {
  Todo = 'Todo',
  Done = 'Done',
}

export class Task {
  public readonly status: Status;
  public readonly description: string;
  public readonly path: string;
  /**
   * The original character from within `[]` in the document.
   * Required to be added to the LI the same way obsidian does as a `data-task` attribute.
   */
  public readonly originalStatusCharacter: string;
  public readonly precedingHeader: string | null;

  public readonly startDate: moment.Moment | null;
  public readonly scheduledDate: moment.Moment | null;
  public readonly dueDate: moment.Moment | null;
  public readonly doneDate: moment.Moment | null;

  public readonly recurrence: Recurrence | null;
  /** The blockLink is a "^" annotation after the dates/recurrence rules. */
  public readonly blockLink: string;

  public static readonly dateFormat = 'YYYY-MM-DD';
  public static readonly taskRegex = /^([\s\t]*)[-*] +\[(.)\] *(.*)/u;
  // Use the regex generator function for due date regex
  // Note: Task plugin uses slightly different emoji patterns, so we'll keep the original
  public static readonly startDateRegex = /🛫 ?(\d{4}-\d{2}-\d{2})$/u;
  public static readonly scheduledDateRegex = /[⏳⌛] ?(\d{4}-\d{2}-\d{2})$/u;
  public static readonly dueDateRegex = /[📅📆🗓] ?(\d{4}-\d{2}-\d{2})$/u;
  public static readonly doneDateRegex = /✅ ?(\d{4}-\d{2}-\d{2})$/u;
  public static readonly recurrenceRegex = /🔁([a-zA-Z0-9, !]+)$/u;

  constructor({
    status,
    description,
    path,
    originalStatusCharacter,
    startDate,
    scheduledDate,
    dueDate,
    doneDate,
    recurrence,
    blockLink = '',
  }: {
    status: Status;
    description: string;
    path: string;
    originalStatusCharacter: string;
    startDate: moment.Moment | null;
    scheduledDate: moment.Moment | null;
    dueDate: moment.Moment | null;
    doneDate: moment.Moment | null;
    recurrence: Recurrence | null;
    blockLink?: string;
  }) {
    this.status = status;
    this.description = description;
    this.path = path;
    this.originalStatusCharacter = originalStatusCharacter;
    this.startDate = startDate;
    this.scheduledDate = scheduledDate;
    this.dueDate = dueDate;
    this.doneDate = doneDate;
    this.recurrence = recurrence;
    this.blockLink = blockLink;
  }

  public static fromLine({
    line,
    path,
    precedingHeader,
  }: {
    line: string;
    path: string;
    precedingHeader: string | null;
  }): Task | null {
    // Use the new parser for more efficient and comprehensive parsing
    const parsedLine = parseLine(line);

    // If it's not a task, return null
    if (!parsedLine.isTask) {
      return null;
    }

    // Map the parser's TaskStatus to our Status enum
    let status: Status;
    switch (parsedLine.taskStatus) {
      case ParserTaskStatus.Todo:
        status = Status.Todo;
        break;
      default:
        status = Status.Done;
    }

    // Extract dates from the parsedLine
    let startDate: moment.Moment | null = null;
    let scheduledDate: moment.Moment | null = null;
    let dueDate: moment.Moment | null = null;
    let doneDate: moment.Moment | null = null;

    // Map the dates from parsedLine.dates to our date fields
    for (const dateInfo of parsedLine.dates) {
      switch (dateInfo.type) {
        case 'start':
          startDate = dateInfo.moment;
          break;
        case 'scheduled':
          scheduledDate = dateInfo.moment;
          break;
        case 'due':
          dueDate = dateInfo.moment;
          break;
        case 'done':
          doneDate = dateInfo.moment;
          break;
      }
    }

    // Extract recurrence information
    let recurrence: Recurrence | null = null;
    if (parsedLine.hasRecurrence && parsedLine.recurrenceRule) {
      recurrence = Recurrence.fromText({
        recurrenceRuleText: parsedLine.recurrenceRule,
        startDate,
        scheduledDate,
        dueDate,
      });
    }

    const task = new Task({
      status,
      description: parsedLine.content,
      path,
      originalStatusCharacter: parsedLine.statusCharacter || '',
      startDate,
      scheduledDate,
      dueDate,
      doneDate,
      recurrence,
      blockLink: parsedLine.blockLink || '',
    });

    return task;
  }
}
