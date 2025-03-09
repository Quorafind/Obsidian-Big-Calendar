import utils from '../helpers/utils';
import {create} from 'zustand';

// Define the state interface
export interface EventState {
  events: Model.Event[];
  tags: string[];

  // Actions
  setEvents: (events: Model.Event[]) => void;
  setTags: (tags: string[]) => void;
  insertEvent: (event: Model.Event) => void;
  deleteEventById: (id: string) => void;
  editEvent: (event: Model.Event) => void;
}

// Create the store using Zustand
const useEventStore = create<EventState>((set) => ({
  // Initial state
  events: [],
  tags: [],

  // Actions
  setEvents: (events) =>
    set({
      events: utils.dedupeObjectWithId(
        events.sort((a, b) => utils.getTimeStampByDate(b.start) - utils.getTimeStampByDate(a.start)),
      ),
    }),

  setTags: (tags) => set({tags}),

  insertEvent: (event) =>
    set((state) => ({
      events: utils.dedupeObjectWithId([event, ...state.events]),
    })),

  deleteEventById: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),

  editEvent: (updatedEvent) =>
    set((state) => ({
      events: state.events.map((event) => (event.id === updatedEvent.id ? {...event, ...updatedEvent} : event)),
    })),
}));

export default useEventStore;
