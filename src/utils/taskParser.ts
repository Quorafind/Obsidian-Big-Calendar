import {create} from 'zustand';
import {TFile, moment} from 'obsidian';

// Define task types
export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED',
}

export interface Task {
  id?: string;
  content: string;
  status: TaskStatus;
  file: TFile;
  line: number;
  date?: moment.Moment;
  dueDate?: moment.Moment;
  tags?: string[];
  isEvent?: boolean;
  startTime?: string;
  endTime?: string;
}

// Store for caching parsed tasks
interface TaskCacheState {
  tasks: Record<string, Task[]>; // key is file path
  lastParsed: Record<string, number>; // key is file path, value is timestamp
  addTasks: (filePath: string, tasks: Task[]) => void;
  getTasks: (filePath: string) => Task[] | undefined;
  isStale: (filePath: string, modifiedTime: number) => boolean;
  clearCache: () => void;
}

export const useTaskCache = create<TaskCacheState>((set, get) => ({
  tasks: {},
  lastParsed: {},

  addTasks: (filePath, tasks) =>
    set((state) => ({
      tasks: {...state.tasks, [filePath]: tasks},
      lastParsed: {...state.lastParsed, [filePath]: Date.now()},
    })),

  getTasks: (filePath) => get().tasks[filePath],

  isStale: (filePath, modifiedTime) => {
    const lastParsed = get().lastParsed[filePath];
    return !lastParsed || lastParsed < modifiedTime;
  },

  clearCache: () => set({tasks: {}, lastParsed: {}}),
}));

// Efficient task parsing function
export function parseTasksFromText(
  text: string,
  file: TFile,
  customMarkers: Record<TaskStatus, string> = {
    [TaskStatus.TODO]: ' ',
    [TaskStatus.IN_PROGRESS]: '/',
    [TaskStatus.DONE]: 'x',
    [TaskStatus.CANCELLED]: '-',
  },
): Task[] {
  // Return from cache if available and not stale
  const cache = useTaskCache.getState();
  const mtime = file.stat?.mtime || 0;

  if (!cache.isStale(file.path, mtime)) {
    const cachedTasks = cache.getTasks(file.path);
    if (cachedTasks) return cachedTasks;
  }

  const lines = text.split(/\r?\n/);
  const tasks: Task[] = [];

  // Regular expressions for task detection
  const taskRegex = /^\s*[-*] \[([ x\/\-])\]\s*(.*)/;
  const eventRegex = /^\s*[-*] ((\d{1,2}):(\d{2}))\s*(.*)/;
  const dueDateRegex = /📅\s*(\d{4}-\d{2}-\d{2})/;
  const tagsRegex = /#([a-zA-Z0-9_-]+)/g;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let task: Partial<Task> | null = null;

    // Check if line is a task
    const taskMatch = line.match(taskRegex);
    if (taskMatch) {
      const marker = taskMatch[1];
      const content = taskMatch[2];

      // Map marker to status
      let status: TaskStatus = TaskStatus.TODO;
      if (marker === customMarkers[TaskStatus.DONE]) status = TaskStatus.DONE;
      else if (marker === customMarkers[TaskStatus.IN_PROGRESS]) status = TaskStatus.IN_PROGRESS;
      else if (marker === customMarkers[TaskStatus.CANCELLED]) status = TaskStatus.CANCELLED;

      task = {content, status, file, line: i, isEvent: false};
    }
    // Check if line is an event
    else {
      const eventMatch = line.match(eventRegex);
      if (eventMatch) {
        const time = eventMatch[1];
        const content = eventMatch[4];

        task = {
          content,
          status: TaskStatus.TODO,
          file,
          line: i,
          isEvent: true,
          startTime: time,
        };
      }
    }

    // If we found a task or event, extract more details
    if (task) {
      // Extract due date if present
      const dueDateMatch = task.content.match(dueDateRegex);
      if (dueDateMatch) {
        task.content = task.content.replace(dueDateMatch[0], '').trim();
      }

      // Extract tags
      const tags: string[] = [];
      let tagMatch;
      while ((tagMatch = tagsRegex.exec(task.content)) !== null) {
        tags.push(tagMatch[1]);
      }
      if (tags.length > 0) {
        task.tags = tags;
      }

      tasks.push(task as Task);
    }
  }

  // Store in cache
  cache.addTasks(file.path, tasks);

  return tasks;
}

// Function to parse tasks from multiple files efficiently
export async function parseTasksFromFiles(
  files: TFile[],
  vault: any,
  customMarkers?: Record<TaskStatus, string>,
): Promise<Task[]> {
  const allTasks: Task[] = [];
  const cache = useTaskCache.getState();

  // Process files in parallel for efficiency
  await Promise.all(
    files.map(async (file) => {
      const mtime = file.stat?.mtime || 0;

      // Use cache if available and not stale
      if (!cache.isStale(file.path, mtime)) {
        const cachedTasks = cache.getTasks(file.path);
        if (cachedTasks) {
          allTasks.push(...cachedTasks);
          return;
        }
      }

      // Read and parse file
      const content = await vault.read(file);
      const tasks = parseTasksFromText(content, file, customMarkers);
      allTasks.push(...tasks);
    }),
  );

  return allTasks;
}

export default {parseTasksFromText, parseTasksFromFiles, useTaskCache, TaskStatus};
