import useEventStore from '../stores/eventStore';
import {waitForInsert} from '../obComponents/obCreateEvent';
import {changeEvent} from '../obComponents/obUpdateEvent';
import api from '../helpers/api';
// import userService from "./userService";
import {stringOrDate} from 'react-big-calendar';
import {deleteForever} from '../obComponents/obDeleteEvent';

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
}

const eventService = new EventService();
export default eventService;
