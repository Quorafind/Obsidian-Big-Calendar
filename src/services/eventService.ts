import useEventStore from '../stores/eventStore';
import {waitForInsert} from '../obComponents/createEvent';
import {changeEvent} from '../obComponents/updateEvent';
import api from '../utils/api';
// import userService from "./userService";
import {stringOrDate} from 'react-big-calendar';
import {deleteForever} from '../obComponents/deleteEvent';
import fileService from './fileService';
import {parseEventInfoFromLine, getAllLinesFromFile, lineContainsEvent} from '../utils/fileParser';
import {TFile} from 'obsidian';

class EventService {
  public initialized = false;

  public getState() {
    return useEventStore.getState();
  }

  public async fetchAllEvents() {
    // if (!userService.getState().user) {
    //   return false;
    // }

    // const { data } = await api.getMyEvents();
    const data = await api.getMyEvents();
    const events = [] as any[];
    for (const m of data) {
      events.push(m);
    }

    useEventStore.getState().setEvents(events);

    if (!this.initialized) {
      this.initialized = true;
    }

    return events;
  }

  public pushEvent(event: Model.Event) {
    useEventStore.getState().insertEvent({
      ...event,
    });

    return event;
  }

  public getEventById(id: string) {
    const {events} = this.getState();
    return events.find((item) => item.id === id);
  }

  public async hideEventById(id: string) {
    useEventStore.getState().deleteEventById(id);

    try {
      await api.hideEvent(id);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async deleteEventById(id: string) {
    useEventStore.getState().deleteEventById(id);

    try {
      await deleteForever(id);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async editEvent(event: Model.Event, startDate: stringOrDate, endDate: stringOrDate) {
    useEventStore.getState().editEvent(event);

    try {
      if (startDate && endDate && event.id && event.title) {
        return await changeEvent(
          event.id,
          event.title,
          event.title,
          event.eventType || '',
          startDate,
          endDate,
          new Date(event.end),
        );
      }
      return event;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // public updateTagsState() {
  //   const {events} = this.getState();
  //   const tagsSet = new Set<string>();
  //   for (const m of events) {
  //     for (const t of Array.from(m.content.match(TAG_REG) ?? [])) {
  //       tagsSet.add(t.replace(TAG_REG, '$1').trim());
  //     }
  //     for (const t of Array.from(m.content.match(NOP_FIRST_TAG_REG) ?? [])) {
  //       tagsSet.add(t.replace(NOP_FIRST_TAG_REG, '$1').trim());
  //     }
  //     for (const t of Array.from(m.content.match(FIRST_TAG_REG) ?? [])) {
  //       tagsSet.add(t.replace(FIRST_TAG_REG, '$2').trim());
  //     }
  //   }

  //   appStore.dispatch({
  //     type: 'SET_TAGS',
  //     payload: {
  //       tags: Array.from(tagsSet),
  //     },
  //   });
  // }

  public clearEvents() {
    useEventStore.getState().setEvents([]);
  }

  public async createEvent(text: string, startDate: stringOrDate, endDate: stringOrDate): Promise<Model.Event> {
    return await waitForInsert(text, startDate, endDate);
  }

  public async updateEvent(
    eventId: string,
    originalText: string,
    text: string,
    type: string,
    startDate: stringOrDate,
    endDate: stringOrDate,
    originalEndDate: Date,
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
   * Parse an event from a line of text
   *
   * @param line The line to parse
   * @returns Partial event object with extracted information
   */
  public parseEventFromLine(line: string): Partial<Model.Event> | null {
    if (!lineContainsEvent(line)) {
      return null;
    }

    const eventInfo = parseEventInfoFromLine(line);
    if (!eventInfo.hasEvent) {
      return null;
    }

    const result: Partial<Model.Event> = {
      title: line.trim(),
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
   *
   * @param eventId ID of the event to update
   * @param content New content for the event
   * @returns Promise resolving to void
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
      '', // originalContent (this might need to be filled in)
      content,
      eventType,
      eventStartDate,
      eventEndDate,
      originalEndDate,
    );
  }

  /**
   * Create an event in a file
   *
   * @param content Content for the new event
   * @param date Date for the event
   * @returns Promise resolving to the event ID
   */
  public async createEventInFile(content: string, date: Date): Promise<string> {
    const result = await waitForInsert(content, date, '');
    return typeof result === 'string' ? result : result.id.toString();
  }

  /**
   * Delete an event from a file
   *
   * @param eventId ID of the event to delete
   * @returns Promise resolving to void
   */
  public async deleteEventFromFile(eventId: string): Promise<void> {
    await deleteForever(eventId);
  }

  /**
   * Get the file associated with an event
   *
   * @param eventId ID of the event
   * @returns The TFile object or null if not found
   */
  public getEventFile(eventId: string): TFile | null {
    return fileService.getFile(eventId);
  }
}

const eventService = new EventService();
export default eventService;
