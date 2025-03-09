import {App, TFile} from 'obsidian';
import {getAllDailyNotes} from 'obsidian-daily-notes-interface';
import {create} from 'zustand';

// Define the state interface
export interface DailyNotesState {
  dailyNotes: Record<string, TFile> | null;
  app: App | null;
  setDailyNotes: (dailyNotes: Record<string, TFile>) => void;
  setApp: (app: App) => void;
}

// Create the store using Zustand
const useDailyNotesStore = create<DailyNotesState>((set) => ({
  // Initial state
  dailyNotes: null,
  app: null,

  // Actions
  setDailyNotes: (dailyNotes) => set({dailyNotes}),
  setApp: (app) => set({app}),
}));

export default useDailyNotesStore;
