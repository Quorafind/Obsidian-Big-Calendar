// Credits go to Schemar's Tasks Plugin: https://github.dev/schemar/obsidian-tasks

import {moment} from 'obsidian';
import {Recurrence} from './parseTasksRecurrence';

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
  // The following regexes end with `$` because they will be matched and
  // removed from the end until none are left.
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
  }

  public static fromLine({line, path}: {line: string; path: string; precedingHeader: string | null}): Task | null {
    const regexMatch = line.match(Task.taskRegex);
    if (regexMatch === null) {
      return null;
    }

    const statusString = regexMatch[2].toLowerCase();

    let status: Status;
    switch (statusString) {
      case ' ':
        status = Status.Todo;
        break;
      default:
        status = Status.Done;
    }

    // match[3] includes the whole body of the task after the brackets.
    const body = regexMatch[3].trim();

    let description = body;

    // Keep matching and removing special strings from the end of the
    // description in any order. The loop should only run once if the
    // strings are in the expected order after the description.
    let matched: boolean;
    let startDate: moment.Moment | null = null;
    let scheduledDate: moment.Moment | null = null;
    let dueDate: moment.Moment | null = null;
    let doneDate: moment.Moment | null = null;
    let recurrence: Recurrence | null = null;
    // Add a "max runs" failsafe to never end in an endless loop:
    const maxRuns = 7;
    let runs = 0;
    do {
      matched = false;

      const doneDateMatch = description.match(Task.doneDateRegex);
      if (doneDateMatch !== null) {
        doneDate = window.moment(doneDateMatch[1], Task.dateFormat);
        description = description.replace(Task.doneDateRegex, '').trim();
        matched = true;
      }

      const dueDateMatch = description.match(Task.dueDateRegex);
      if (dueDateMatch !== null) {
        dueDate = window.moment(dueDateMatch[1], Task.dateFormat);
        description = description.replace(Task.dueDateRegex, '').trim();
        matched = true;
      }

      const scheduledDateMatch = description.match(Task.scheduledDateRegex);
      if (scheduledDateMatch !== null) {
        scheduledDate = window.moment(scheduledDateMatch[1], Task.dateFormat);
        description = description.replace(Task.scheduledDateRegex, '').trim();
        matched = true;
      }

      const startDateMatch = description.match(Task.startDateRegex);
      if (startDateMatch !== null) {
        startDate = window.moment(startDateMatch[1], Task.dateFormat);
        description = description.replace(Task.startDateRegex, '').trim();
        matched = true;
      }

      const recurrenceMatch = description.match(Task.recurrenceRegex);
      if (recurrenceMatch !== null) {
        recurrence = Recurrence.fromText({
          recurrenceRuleText: recurrenceMatch[1].trim(),
          startDate,
          scheduledDate,
          dueDate,
        });

        description = description.replace(Task.recurrenceRegex, '').trim();
        matched = true;
      }

      runs++;
    } while (matched && runs <= maxRuns);

    const task = new Task({
      status,
      description,
      path,
      originalStatusCharacter: statusString,
      startDate,
      scheduledDate,
      dueDate,
      doneDate,
      recurrence,
    });
    return task;
  }
}
