import {create} from 'zustand';
import useDailyNotesStore from './dailyNotesStore';
import useEventStore from './eventStore';
import useGlobalStateStore from './globalStateStore';
import useLocationStore from './locationStore';

// This is a simplified root store that can be used to access other stores
// No need to combine reducers like in Redux since Zustand uses individual stores

// Define the state interface
export interface AppState {
  version: string;
  initialized: boolean;
  setInitialized: (initialized: boolean) => void;
  // Any app-level state and actions
}

// Create the store using Zustand
const useAppStore = create<AppState>((set) => ({
  // Initial state
  version: '0.3.0',
  initialized: false,

  // Actions
  setInitialized: (initialized) => set({initialized}),
}));

// Export a way to access all stores from a single point if needed
export const stores = {
  app: useAppStore,
  dailyNotes: useDailyNotesStore,
  events: useEventStore,
  globalState: useGlobalStateStore,
  location: useLocationStore,
  // Add other stores here as they are refactored
};

export default useAppStore;
