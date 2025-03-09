import utils from '@/utils/utils';
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
const useEventStore = create<EventState>((set, get) => ({
  events: [],
  tags: [],

  // Actions
  setEvents: (events) => {
    // First check if the events array actually changed
    const currentEvents = get().events;

    // If the arrays are the same reference, do nothing
    if (events === currentEvents) {
      return;
    }

    // If lengths are different, definitely set new events
    if (events.length !== currentEvents.length) {
      set({
        events: utils.dedupeObjectWithId(
          events.sort((a, b) => utils.getTimeStampByDate(b.start) - utils.getTimeStampByDate(a.start)),
        ),
      });
      return;
    }

    // Check if any events have changed
    const hasChanged = events.some((event, index) => {
      const currentEvent = currentEvents[index];
      return (
        event.id !== currentEvent.id ||
        event.start !== currentEvent.start ||
        event.end !== currentEvent.end ||
        event.title !== currentEvent.title
      );
    });

    // Only update if something changed
    if (hasChanged) {
      set({
        events: utils.dedupeObjectWithId(
          events.sort((a, b) => utils.getTimeStampByDate(b.start) - utils.getTimeStampByDate(a.start)),
        ),
      });
    }
  },

  setTags: (tags) => set({tags}),

  insertEvent: (event) => {
    // Get current events
    const currentEvents = get().events;

    // Check if event already exists
    const eventExists = currentEvents.some((e) => e.id === event.id);

    // Only insert if event doesn't exist
    if (!eventExists) {
      set((state) => ({
        events: utils.dedupeObjectWithId([event, ...state.events]),
      }));
    }
  },

  deleteEventById: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),

  editEvent: (updatedEvent) =>
    set((state) => {
      // Find the event to update
      const eventIndex = state.events.findIndex((event) => event.id === updatedEvent.id);

      // If event not found, return state unchanged
      if (eventIndex === -1) {
        return state;
      }

      // Create a new events array with the updated event
      const newEvents = [...state.events];
      newEvents[eventIndex] = {...newEvents[eventIndex], ...updatedEvent};

      return {
        events: newEvents,
      };
    }),
}));

export default useEventStore;
