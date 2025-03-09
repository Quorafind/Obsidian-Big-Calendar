/**
 * Unified API for Obsidian Big Calendar
 * This file exports all functions extracted from obComponents
 */

// Re-export utility functions
export * from './utils/regexGenerators';
export * from './utils/fileParser';

// Import services
import fileService from './services/fileService';
import eventService from './services/eventService';

// Event-related functions
export const getEvents = async () => {
  return await eventService.fetchAllEvents();
};

export const createEvent = async (content: string, date: Date): Promise<string> => {
  return await eventService.createEventInFile(content, date);
};

export const updateEvent = async (
  eventId: string,
  content: string,
  eventType: string,
  eventStartDate: any,
  eventEndDate: any,
  originalEndDate: Date,
) => {
  return await eventService.updateEventInFile(
    eventId,
    content,
    eventType,
    eventStartDate,
    eventEndDate,
    originalEndDate,
  );
};

export const deleteEvent = async (eventId: string): Promise<void> => {
  return await eventService.deleteEventFromFile(eventId);
};

export const parseEvent = (line: string) => {
  return eventService.parseEventFromLine(line);
};

// File-related functions
export const getFile = (eventId: string) => {
  return fileService.getFile(eventId);
};

export const getDailyNotePath = (): string => {
  return fileService.getDailyNotePath();
};

export const readFileContent = async (filePath: string): Promise<string> => {
  return await fileService.readFileContent(filePath);
};

export const writeFileContent = async (filePath: string, content: string): Promise<void> => {
  return await fileService.writeFileContent(filePath, content);
};

// Error handling wrapper
export const safeExecute = async <T>(
  operation: () => Promise<T>,
  errorMessage = 'An error occurred',
): Promise<T | null> => {
  try {
    return await operation();
  } catch (error) {
    console.error(`${errorMessage}: `, error);
    return null;
  }
};

// Default export of all functions as an object
export default {
  // Event operations
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  parseEvent,

  // File operations
  getFile,
  getDailyNotePath,
  readFileContent,
  writeFileContent,

  // Utility
  safeExecute,

  // Services
  fileService,
  eventService,
};
