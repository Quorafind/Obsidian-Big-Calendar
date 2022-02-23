import appStore from '../stores/appStore';
import {waitForInsert} from '../obComponents/obCreateEvent';
import {changeEvent} from '../obComponents/obUpdateEvent';
import api from '../helpers/api';
// import userService from "./userService";
import {stringOrDate} from 'react-big-calendar';

class EventService {
  public initialized = false;

  public getState() {
    return appStore.getState().eventState;
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
    appStore.dispatch({
      type: 'SET_EVENTS',
      payload: {
        events,
      },
    });

    if (!this.initialized) {
      this.initialized = true;
    }

    return events;
  }

  public pushEvent(event: Model.Event) {
    appStore.dispatch({
      type: 'INSERT_EVENT',
      payload: {
        event: {
          ...event,
        },
      },
    });
  }

  public getEventById(id: string) {
    for (const m of this.getState().events) {
      if (m.id === id) {
        return m;
      }
    }

    return null;
  }

  public async hideEventById(id: string) {
    await api.hideEvent(id);
    appStore.dispatch({
      type: 'DELETE_EVENT_BY_ID',
      payload: {
        id: id,
      },
    });
  }

  // public async restoreEventById(id: string) {
  //   await api.restoreEvent(id);
  //   // eventService.clearEvents();
  //   // eventService.fetchAllEvents();
  // }

  // public async deleteEventById(id: string) {
  //   await api.deleteEvent(id);
  // }

  public async editEvent(event: Model.Event, startDate: stringOrDate, endDate: stringOrDate) {
    await this.updateEvent(event.id, event.originalContent, event.title, event.eventType, startDate, endDate, event.end);
    appStore.dispatch({
      type: 'EDIT_EVENT',
      payload: event,
    });
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
    appStore.dispatch({
      type: 'SET_EVENTS',
      payload: {
        events: [],
      },
    });
  }

  public async createEvent(text: string, startDate: stringOrDate, endDate: stringOrDate): Promise<Model.Event> {
    const event = await waitForInsert(text, startDate, endDate);
    return event;
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
    const event = await changeEvent(eventId, originalText, text, type, startDate, endDate, originalEndDate);
    return event;
  }
}

const eventService = new EventService();

export default eventService;
