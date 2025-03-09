import {create} from 'zustand';
import {View} from 'react-big-calendar';
import {App, moment} from 'obsidian';

// Define the Calendar state interface
export interface CalendarState {
  // State properties
  events: Model.Event[];
  calendarView: View;
  calendarDate: Date;
  selectable: boolean;
  resizable: boolean;
  calendarPopup: boolean;
  startDay: 'sunday' | 'monday';
  isLoading: boolean;

  // Actions
  setEvents: (events: Model.Event[]) => void;
  setCalendarView: (view: View) => void;
  setCalendarDate: (date: Date) => void;
  setSelectable: (selectable: boolean) => void;
  setResizable: (resizable: boolean) => void;
  setCalendarPopup: (popup: boolean) => void;
  setStartDay: (startDay: 'sunday' | 'monday') => void;
  setLoading: (isLoading: boolean) => void;
  updateEvent: (eventId: string, updates: Partial<Model.Event>) => void;

  // Storage-related actions
  saveCalendarView: (app: App) => void;
  saveCalendarDate: (app: App) => void;
  loadStoredPreferences: (app: App) => void;
}

// Create the store
const useCalendarStore = create<CalendarState>((set, get) => ({
  // Initial state
  events: [],
  calendarView: 'month',
  calendarDate: new Date(),
  selectable: true,
  resizable: true,
  calendarPopup: true,
  startDay: 'monday',
  isLoading: true,

  // Actions
  setEvents: (events) => {
    // Check if the events array has actually changed
    const currentEvents = get().events;

    // Skip update if it's the same reference
    if (events === currentEvents) {
      return;
    }

    // Update only if there's a meaningful change
    if (events.length !== currentEvents.length || JSON.stringify(events) !== JSON.stringify(currentEvents)) {
      set({events});
    }
  },

  setCalendarView: (view) => {
    // Only update if the view has changed
    if (get().calendarView !== view) {
      set({calendarView: view});
    }
  },

  setCalendarDate: (date) => {
    // Only update if the date has changed
    const currentDate = get().calendarDate;
    if (!currentDate || !date || currentDate.getTime() !== date.getTime()) {
      set({calendarDate: date});
    }
  },

  setSelectable: (selectable) => {
    // Only update if the value has changed
    if (get().selectable !== selectable) {
      set({selectable});
    }
  },

  setResizable: (resizable) => {
    // Only update if the value has changed
    if (get().resizable !== resizable) {
      set({resizable});
    }
  },

  setCalendarPopup: (popup) => {
    // Only update if the value has changed
    if (get().calendarPopup !== popup) {
      set({calendarPopup: popup});
    }
  },

  setStartDay: (startDay) => {
    // Only update if the value has changed
    if (get().startDay !== startDay) {
      set({startDay});

      // Update moment locale based on start day
      if (startDay === 'sunday') {
        moment.updateLocale('en', {week: {dow: 0}});
      } else {
        moment.updateLocale('en', {week: {dow: 1}});
      }
    }
  },

  setLoading: (isLoading) => {
    // Only update if the value has changed
    if (get().isLoading !== isLoading) {
      set({isLoading});
    }
  },

  updateEvent: (eventId, updates) => {
    // Get current events
    const events = get().events;

    // Find the event to update
    const eventIndex = events.findIndex((event) => event.id === eventId);

    // If event not found, do nothing
    if (eventIndex === -1) {
      return;
    }

    // Create new array with updated event
    const updatedEvents = [...events];
    updatedEvents[eventIndex] = {
      ...updatedEvents[eventIndex],
      ...updates,
    };

    set({events: updatedEvents});
  },

  // Storage-related actions
  saveCalendarView: (app) => {
    const view = get().calendarView;
    try {
      app.saveLocalStorage('viewCache', JSON.stringify(view));
    } catch (error) {
      console.error('Failed to save calendar view', error);
    }
  },

  saveCalendarDate: (app) => {
    const date = get().calendarDate;
    try {
      app.saveLocalStorage('currentDate', JSON.stringify(date));
    } catch (error) {
      console.error('Failed to save calendar date', error);
    }
  },

  loadStoredPreferences: (app) => {
    try {
      // Load view
      const viewString = app.loadLocalStorage('viewCache');
      if (viewString) {
        const view = JSON.parse(viewString) as View;
        if (view !== get().calendarView) {
          set({calendarView: view});
        }
      }

      // Load date
      const dateString = app.loadLocalStorage('currentDate');
      if (dateString) {
        const date = new Date(JSON.parse(dateString));
        if (!isNaN(date.getTime())) {
          const currentDate = get().calendarDate;
          if (!currentDate || currentDate.getTime() !== date.getTime()) {
            set({calendarDate: date});
          }
        }
      }
    } catch (error) {
      console.error('Failed to load stored preferences', error);
    }
  },
}));

export default useCalendarStore;
