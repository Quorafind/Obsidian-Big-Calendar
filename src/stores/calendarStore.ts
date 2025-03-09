import {create} from 'zustand';
import {Event, View} from 'react-big-calendar';
import {stringOrDate} from 'react-big-calendar';
import {App} from 'obsidian';
import {moment} from 'obsidian';

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
  setEvents: (events) => set({events}),

  setCalendarView: (view) => set({calendarView: view}),

  setCalendarDate: (date) => set({calendarDate: date}),

  setSelectable: (selectable) => set({selectable}),

  setResizable: (resizable) => set({resizable}),

  setCalendarPopup: (popup) => set({calendarPopup: popup}),

  setStartDay: (startDay) => {
    set({startDay});

    // Update moment locale based on start day
    if (startDay === 'sunday') {
      moment.updateLocale('en', {week: {dow: 0}});
    } else {
      moment.updateLocale('en', {week: {dow: 1}});
    }
  },

  setLoading: (isLoading) => set({isLoading}),

  updateEvent: (eventId, updates) =>
    set((state) => ({
      events: state.events.map((event) => (event.id === eventId ? {...event, ...updates} : event)),
    })),

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
        set({calendarView: view});
      }

      // Load date
      const dateString = app.loadLocalStorage('currentDate');
      if (dateString) {
        const date = new Date(JSON.parse(dateString));
        if (!isNaN(date.getTime())) {
          set({calendarDate: date});
        }
      }
    } catch (error) {
      console.error('Failed to load stored preferences', error);
    }
  },
}));

export default useCalendarStore;
