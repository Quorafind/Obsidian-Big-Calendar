import {App, TFile} from 'obsidian';
import {create} from 'zustand';

// Define the state interface
export interface FileState {
  files: Record<string, TFile> | null;
  app: App | null;
  setFiles: (files: Record<string, TFile>) => void;
  setApp: (app: App) => void;
}

// Create the store using Zustand
const useFileStore = create<FileState>((set) => ({
  // Initial state
  files: null,
  app: null,

  // Actions
  setFiles: (files) => set({files}),
  setApp: (app) => set({app}),
}));

export default useFileStore;
