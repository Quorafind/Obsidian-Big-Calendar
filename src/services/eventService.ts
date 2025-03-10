import useEventStore from '@/stores/eventStore';
import {waitForInsert} from '@/obComponents/createEvent';
import {changeEvent} from '@/obComponents/updateEvent';
import {stringOrDate} from 'react-big-calendar';
import {deleteForever} from '@/obComponents/deleteEvent';
import fileService from '@/services/fileService';
import {parseEventInfoFromLine, lineContainsEvent} from '@/utils/fileParser';
import {App, TFile, moment} from 'obsidian';
import {getEvents, getEventsFromDailyNote} from '@/obComponents/getEvents';
import {hideEvent} from '@/obComponents/hideEvent';

/**
 * Event Service - Handles creation, updating, deletion and querying of calendar events
 */
class EventService {
  public initialized = false;
  private fileEventMap: Map<string, Model.Event[]> = new Map(); // Map to store events by file path

  /**
   * Get the current state of the event store
   */
  public getState() {
    return useEventStore.getState();
  }

  /**
   * Fetch all events and update the store
   * @returns Array of all events
   */
  public async fetchAllEvents(app: App) {
    try {
      const data = await getEvents(app);
      const events = Array.isArray(data) ? [...data] : [];

      // Clear all file-event mapping and rebuild
      this.fileEventMap.clear();

      // Group events by file
      events.forEach((event) => {
        // Assuming eventId contains file path or can be mapped to a file
        const file = fileService.getFile(event.id);
        if (file) {
          const filePath = file.path;
          if (!this.fileEventMap.has(filePath)) {
            this.fileEventMap.set(filePath, []);
          }
          this.fileEventMap.get(filePath)?.push(event);
        }
      });

      useEventStore.getState().setEvents(events);

      if (!this.initialized) {
        this.initialized = true;
      }

      return events;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      return [];
    }
  }

  /**
   * Add a new event to the store
   * @param event Event object to add
   * @returns The added event
   */
  public pushEvent(event: Model.Event) {
    useEventStore.getState().insertEvent({...event});
    return event;
  }

  /**
   * Find an event by ID
   * @param id Event ID
   * @returns Found event or undefined
   */
  public getEventById(id: string) {
    const {events} = this.getState();
    return events.find((item) => item.id === id);
  }

  /**
   * Hide an event (remove from view but keep in delete file)
   * @param id ID of the event to hide
   * @returns Whether operation was successful
   */
  public async hideEventById(id: string) {
    useEventStore.getState().deleteEventById(id);

    try {
      await hideEvent(id);
      return true;
    } catch (err) {
      console.error('Failed to hide event:', err);
      return false;
    }
  }

  /**
   * Permanently delete an event
   * @param id ID of the event to delete
   * @returns Whether operation was successful
   */
  public async deleteEventById(id: string) {
    useEventStore.getState().deleteEventById(id);

    try {
      await deleteForever(id);
      return true;
    } catch (err) {
      console.error('Failed to delete event:', err);
      return false;
    }
  }

  /**
   * Edit an event
   * @param event Event object to edit
   * @param startDate New start date
   * @param endDate New end date
   * @returns Updated event or null
   */
  public async editEvent(event: Model.Event, startDate: stringOrDate, endDate: stringOrDate) {
    try {
      if (startDate && endDate && event.id && event.title) {
        // 检查日期是否发生了变化
        // 记录原始ID以便跟踪
        const originalEventId = event.id;

        // 先执行changeEvent，让文件更新完成
        const updatedEvent = await changeEvent(
          event.id,
          event.originalContent || '',
          event.title,
          event.eventType || '',
          startDate,
          endDate,
          new Date(event.end),
        );

        // 如果返回的事件ID与原始ID不同，说明事件被移动并创建了新事件
        if (updatedEvent.id !== originalEventId) {
          // 先从状态中删除旧事件
          useEventStore.getState().deleteEventById(originalEventId);
          // 再添加新事件到状态
          useEventStore.getState().insertEvent(updatedEvent);
          console.log(`Event moved from ID ${originalEventId} to ${updatedEvent.id}`);
        } else {
          // 如果ID没变，正常更新事件状态
          useEventStore.getState().editEvent(updatedEvent);
        }

        return updatedEvent;
      }
      return event;
    } catch (err) {
      console.error('Failed to edit event:', err);
      return null;
    }
  }

  /**
   * Clear all events
   */
  public clearEvents() {
    useEventStore.getState().setEvents([]);
    this.fileEventMap.clear();
  }

  /**
   * Clear events for a specific file
   * @param filePath Path of the file
   */
  public clearEventsForFile(filePath: string) {
    // If we don't have this file in our map, nothing to do
    if (!this.fileEventMap.has(filePath)) {
      return;
    }

    // Get all events from the store
    const currentEvents = [...this.getState().events];

    // Get events to remove (from the file)
    const eventsToRemove = this.fileEventMap.get(filePath) || [];

    // Filter out events from the specific file
    const remainingEvents = currentEvents.filter((event) => !eventsToRemove.some((e) => e.id === event.id));

    // Update the store with remaining events
    useEventStore.getState().setEvents(remainingEvents);

    // Remove file entry from the map
    this.fileEventMap.delete(filePath);
  }

  /**
   * Fetch events from a specific file and update the store
   * @param app Obsidian App instance
   * @param file TFile to fetch events from
   * @returns Array of events from the file
   */
  public async fetchEventsFromFile(app: App, file: TFile): Promise<Model.Event[]> {
    try {
      // Get events specific to this file
      const events: Model.Event[] = [];
      await getEventsFromDailyNote(file, events);

      if (!Array.isArray(events)) {
        return [];
      }

      // Store these events in our file-event map
      this.fileEventMap.set(file.path, [...events]);

      // Get current events (excluding ones from this file if any)
      const currentEvents = this.getState().events.filter((event) => {
        // Check if this event is from our file
        const fileEvents = this.fileEventMap.get(file.path) || [];
        return !fileEvents.some((e) => e.id === event.id);
      });

      // Combine with new events from this file
      const updatedEvents = [...currentEvents, ...events];

      // Update the store
      useEventStore.getState().setEvents(updatedEvents);

      if (!this.initialized) {
        this.initialized = true;
      }

      return events;
    } catch (error) {
      console.error(`Failed to fetch events from file ${file.path}:`, error);
      return [];
    }
  }

  /**
   * Create a new event
   * @param text Event content
   * @param startDate Start date
   * @param endDate End date
   * @returns Created event object
   */
  public async createEvent(text: string, startDate: stringOrDate, endDate: stringOrDate): Promise<Model.Event> {
    return await waitForInsert(text, startDate, endDate);
  }

  /**
   * Update an event
   * @param eventId Event ID
   * @param originalText Original text
   * @param text New text
   * @param type Event type
   * @param startDate Start date
   * @param endDate End date
   * @param originalEndDate Original end date
   * @returns Updated event or null
   */
  public async updateEvent(
    eventId: string,
    text: string,
    type: string,
    startDate: stringOrDate,
    endDate: stringOrDate,
  ): Promise<Model.Event> {
    const event = this.getEventById(eventId);
    if (!event) {
      return null;
    }

    return await this.editEvent(
      {
        ...event,
        title: text,
        eventType: type,
      },
      startDate,
      endDate,
    );
  }

  /**
   * Parse an event from a text line
   * @param line Text line to parse
   * @returns Partial event object or null
   */
  public parseEventFromLine(line: string): Partial<Model.Event> | null {
    if (!lineContainsEvent(line)) {
      return null;
    }

    const eventInfo = parseEventInfoFromLine(line);
    if (!eventInfo.hasEvent) {
      return null;
    }

    // Clean the line to extract just the content without time information
    let title = line.trim();

    // Remove time patterns
    title = title.replace(/^- \d{1,2}:\d{2}(-\d{1,2}:\d{2})?\s+/, '- ');
    title = title.replace(/⏲\s?\d{1,2}:\d{2}/g, '').trim();
    title = title.replace(/📅\s?\d{4}-\d{2}-\d{2}/g, '').trim();

    const result: Partial<Model.Event> = {
      title: title,
    };

    // Add date information if available
    if (eventInfo.date?.hasDate && eventInfo.date.rawDate) {
      const dateStr = eventInfo.date.rawDate;
      result.start = new Date(dateStr);
      result.end = new Date(dateStr);
    }

    // Add time information if available
    if (eventInfo.time) {
      const {hour, minute} = eventInfo.time;

      if (result.start) {
        result.start.setHours(hour, minute, 0, 0);
      }

      if (result.end) {
        // Default end time is 1 hour after start
        result.end.setHours(hour + 1, minute, 0, 0);
      }
    }

    return result;
  }

  /**
   * Update an event in a file
   * @param eventId Event ID
   * @param content New content
   * @param eventType Event type
   * @param eventStartDate Start date
   * @param eventEndDate End date
   * @param originalEndDate Original end date
   * @returns Updated event
   */
  public async updateEventInFile(
    eventId: string,
    content: string,
    eventType: string,
    eventStartDate: stringOrDate,
    eventEndDate: stringOrDate,
    originalEndDate: Date,
  ): Promise<Model.Event> {
    return await changeEvent(
      eventId,
      '', // originalContent
      content,
      eventType,
      eventStartDate,
      eventEndDate,
      originalEndDate,
    );
  }

  /**
   * Create an event in a file
   * @param content Event content
   * @param date Event date
   * @returns Event ID
   */
  public async createEventInFile(content: string, date: Date): Promise<string> {
    const result = await waitForInsert(content, date, '');
    return typeof result === 'string' ? result : result.id.toString();
  }

  /**
   * Delete an event from a file
   * @param eventId Event ID
   */
  public async deleteEventFromFile(eventId: string): Promise<void> {
    await deleteForever(eventId);
  }

  /**
   * Get the file associated with an event
   * @param eventId Event ID
   * @returns File object or null
   */
  public getEventFile(eventId: string): TFile | null {
    return fileService.getFile(eventId);
  }
}

const eventService = new EventService();
export default eventService;
