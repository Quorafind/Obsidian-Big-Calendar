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
        const file = fileService.getFile(event);
        if (file) {
          const filePath = file.path;
          if (!this.fileEventMap.has(filePath)) {
            this.fileEventMap.set(filePath, []);
          }
          this.fileEventMap.get(filePath)?.push(event);
        }
      });

      // Update the store with all events
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
   * Filter events
   * /

  /**
   * Filter events based on filter criteria
   * @param filterCriteria Optional filter criteria object
   * @returns Array of filtered events
   */
  public filterEvents(filterCriteria?: Model.EventFilter) {
    try {
      // Get all events from the store
      const allEvents = useEventStore.getState().allEvents;

      // If no filter criteria or empty filter, return all events
      if (!filterCriteria || Object.keys(filterCriteria).length === 0) {
        useEventStore.getState().setFilteredEvents(allEvents);
        return allEvents;
      }

      // Apply filters
      let filteredEvents = [...allEvents];

      console.log('filterCriteria', filterCriteria);

      // Filter by event type if specified
      if (filterCriteria.eventType) {
        filteredEvents = filteredEvents.filter((event) => event.eventType === filterCriteria.eventType);
      }

      // Filter by content text if specified
      if (filterCriteria.contentText) {
        const searchText = filterCriteria.contentText.toLowerCase();
        filteredEvents = filteredEvents.filter((event) => event.title.toLowerCase().includes(searchText));
      }

      // Filter by content regex if specified
      if (filterCriteria.contentRegex) {
        try {
          const regex = new RegExp(filterCriteria.contentRegex);
          filteredEvents = filteredEvents.filter((event) => regex.test(event.title));
        } catch (error) {
          console.error('Invalid regex pattern:', filterCriteria.contentRegex);
        }
      }

      // Filter by folder paths if specified
      if (filterCriteria.folderPaths && filterCriteria.folderPaths.length > 0) {
        filteredEvents = filteredEvents.filter((event) => {
          if (!event.path) return false;
          return filterCriteria.folderPaths.some((folderPath) => event.path.startsWith(folderPath));
        });
      }

      // Filter by date range if specified
      if (filterCriteria.startDate && filterCriteria.endDate) {
        const startTimestamp = new Date(filterCriteria.startDate).getTime();
        const endTimestamp = new Date(filterCriteria.endDate).getTime();

        filteredEvents = filteredEvents.filter((event) => {
          const eventStartTime = new Date(event.start).getTime();
          return eventStartTime >= startTimestamp && eventStartTime <= endTimestamp;
        });
      } else if (filterCriteria.startDate) {
        // Filter by start date only
        const startTimestamp = new Date(filterCriteria.startDate).getTime();
        filteredEvents = filteredEvents.filter((event) => new Date(event.start).getTime() >= startTimestamp);
      } else if (filterCriteria.endDate) {
        // Filter by end date only
        const endTimestamp = new Date(filterCriteria.endDate).getTime();
        filteredEvents = filteredEvents.filter((event) => new Date(event.start).getTime() <= endTimestamp);
      }

      // Update the store with filtered events
      useEventStore.getState().setFilteredEvents(filteredEvents);

      return filteredEvents;
    } catch (error) {
      console.error('Failed to filter events:', error);
      return useEventStore.getState().allEvents;
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
  public async editEvent(event: Model.Event, startDate: stringOrDate, endDate: stringOrDate, newTitle?: string) {
    try {
      if (startDate && endDate && event.id && event.title) {
        // 记录原始ID以便跟踪
        const originalEventId = event.id;

        // 先执行changeEvent，让文件更新完成
        const updatedEvent = await changeEvent(
          event.id,
          event.originalContent || event.title,
          newTitle || event.title,
          event.eventType || 'default',
          startDate,
          endDate,
          new Date(event.end),
          event.path,
        );

        // 检查updatedEvent.id与原始event.id是否相同
        if (updatedEvent.id !== originalEventId) {
          console.log('Event ID changed from', originalEventId, 'to', updatedEvent.id);

          // 使用原始事件ID删除旧事件 - 可能来自changeEvent返回的originalEventId或原始event.id
          const idToDelete = (updatedEvent as any).originalEventId || originalEventId;
          console.log('Deleting event with ID:', idToDelete);

          // 先从状态中删除旧事件
          useEventStore.getState().deleteEventById(idToDelete);

          // 移除不需要持久化的字段
          const cleanEvent = {...updatedEvent};
          delete (cleanEvent as any).originalEventId;

          // 再添加新事件到状态
          useEventStore.getState().insertEvent(cleanEvent);
          console.log('Inserted new event with ID:', cleanEvent.id);
          console.log('Old event path:', event.path);

          // 获取新事件对应的文件
          const newEventFile = this.getEventFile(cleanEvent);
          const newPath = newEventFile ? newEventFile.path : null;
          console.log('New event path:', newPath);

          // 更新fileEventMap - 处理旧路径
          if (event.path) {
            // 从原始文件路径中移除旧事件
            const oldEvents = this.fileEventMap.get(event.path) || [];
            console.log('oldEvents in original path:', oldEvents);
            const updatedEvents = oldEvents.filter((e) => e.id !== idToDelete);

            // 如果更新后事件列表为空，则从map中删除该路径
            if (updatedEvents.length === 0) {
              this.fileEventMap.delete(event.path);
              console.log('Removed empty path:', event.path);
            } else {
              // 更新原始文件路径的事件列表
              this.fileEventMap.set(event.path, updatedEvents);
              console.log('Updated events in original path:', event.path);
            }
          }

          // 处理新路径 - 确保新事件被添加到正确的文件路径下
          if (newPath) {
            // 从新文件路径中获取事件列表
            const newPathEvents = this.fileEventMap.get(newPath) || [];

            // 确保不重复添加事件
            if (!newPathEvents.some((e) => e.id === cleanEvent.id)) {
              // 添加新事件到新的文件事件列表
              newPathEvents.push(cleanEvent);

              // 更新map
              this.fileEventMap.set(newPath, newPathEvents);
              console.log('Added event to new path:', newPath);
            }

            // 更新事件对象的path属性
            cleanEvent.path = newPath;
          }
        } else {
          // 如果ID没变，正常更新事件状态
          console.log('event path', event.path);
          useEventStore.getState().editEvent(updatedEvent);
          console.log('Updated existing event with same ID:', updatedEvent.id);

          // 更新fileEventMap中的事件 - 使用event的path属性
          if (event.path) {
            const events = this.fileEventMap.get(event.path) || [];
            const eventIndex = events.findIndex((e) => e.id === updatedEvent.originalEventId);

            if (eventIndex !== -1) {
              const updatedEvents = [...events];
              updatedEvents[eventIndex] = updatedEvent;
              this.fileEventMap.set(event.path, updatedEvents);
            }
          }
        }

        // 移除不需要持久化的字段
        const returnEvent = {...updatedEvent};
        delete (returnEvent as any).originalEventId;

        return returnEvent;
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
      const newEvents: Model.Event[] = [];
      await getEventsFromDailyNote(file, newEvents);

      if (!Array.isArray(newEvents)) {
        return [];
      }

      // Get existing events for this file
      const existingEvents = this.fileEventMap.get(file.path) || [];

      // Compare and update events
      const updatedFileEvents: Model.Event[] = [];

      // Process new events
      for (const newEvent of newEvents) {
        // Try to find matching event in existing events
        const existingEvent = existingEvents.find((e) => e.id === newEvent.id || e.title === newEvent.title);

        // If no match or if event has changed, use the new event
        if (
          !existingEvent ||
          existingEvent.id !== newEvent.id ||
          existingEvent.title !== newEvent.title ||
          new Date(existingEvent.end).getTime() !== new Date(newEvent.end).getTime()
        ) {
          updatedFileEvents.push(newEvent);
        } else {
          // If no changes, keep the existing event
          updatedFileEvents.push(existingEvent);
        }
      }

      // Update the file-event map
      this.fileEventMap.set(file.path, updatedFileEvents);

      // Get all current events that are NOT from this file path
      const currentEvents = this.getState().events.filter((event) => event.path !== file.path);

      // Combine with updated events from this file
      const updatedEvents = [...currentEvents, ...updatedFileEvents];

      // Update the store
      useEventStore.getState().setEvents(updatedEvents);

      if (!this.initialized) {
        this.initialized = true;
      }

      return updatedFileEvents;
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
    originalPath: string,
  ): Promise<Model.Event> {
    return await changeEvent(
      eventId,
      '', // originalContent
      content,
      eventType,
      eventStartDate,
      eventEndDate,
      originalEndDate,
      originalPath,
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
  public getEventFile(event: Model.Event): TFile | null {
    return fileService.getFile(event);
  }
}

const eventService = new EventService();
export default eventService;
