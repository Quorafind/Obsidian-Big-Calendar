import {create} from 'zustand';

// Define the state interface
export interface LocationState extends AppLocation {
  setQuery: (query: Query) => void;
  setQueryFilter: (filter: string) => void;
  setTagQuery: (tag: string) => void;
  setDurationQuery: (duration: TDuration | null) => void;
  setEventType: (eventType: EventSpecType | '') => void;
  setText: (text: string) => void;
  setHash: (hash: string) => void;
  // New filter methods
  setContentRegex: (contentRegex: string) => void;
  setFolderPaths: (folderPaths: string[]) => void;
  setMetadataKeys: (metadataKeys: string[]) => void;
  setMetadataValues: (metadataValues: Record<string, string>) => void;
}

// Create the store using Zustand
const useLocationStore = create<LocationState>((set, get) => ({
  hash: '',
  query: {
    tag: '',
    duration: null,
    text: '',
    eventType: '',
    filter: '',
    contentRegex: '',
    folderPaths: [],
    metadataKeys: [],
    metadataValues: {},
  },

  setQuery: (query) => {
    // Only update if query has changed
    const currentQuery = get().query;
    if (JSON.stringify(query) !== JSON.stringify(currentQuery)) {
      set((state) => ({
        ...state,
        query,
      }));
    }
  },

  setQueryFilter: (filter) => {
    // Only update if filter has changed
    const currentFilter = get().query.filter;
    if (filter !== currentFilter) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          filter,
        },
      }));
    }
  },

  setTagQuery: (tag) => {
    // Only update if tag has changed
    const currentTag = get().query.tag;
    if (tag !== currentTag) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          tag,
        },
      }));
    }
  },

  setDurationQuery: (duration) => {
    // Only update if duration has changed
    const currentDuration = get().query.duration;
    const durationJson = JSON.stringify(duration);
    const currentDurationJson = JSON.stringify(currentDuration);

    if (durationJson !== currentDurationJson) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          duration,
        },
      }));
    }
  },

  setEventType: (eventType) => {
    // Only update if type has changed
    const currentEventType = get().query.eventType;
    if (eventType !== currentEventType) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          eventType,
        },
      }));
    }
  },

  setText: (text) => {
    // Only update if text has changed
    const currentText = get().query.text;
    if (text !== currentText) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          text,
        },
      }));
    }
  },

  setHash: (hash) => {
    // Only update if hash has changed
    const currentHash = get().hash;
    if (hash !== currentHash) {
      set((state) => ({
        ...state,
        hash,
      }));
    }
  },

  // New filter methods
  setContentRegex: (contentRegex) => {
    // Only update if contentRegex has changed
    const currentContentRegex = get().query.contentRegex || '';
    if (contentRegex !== currentContentRegex) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          contentRegex,
        },
      }));
    }
  },

  setFolderPaths: (folderPaths) => {
    // Only update if folderPaths has changed
    const currentFolderPaths = get().query.folderPaths || [];
    const folderPathsJson = JSON.stringify(folderPaths);
    const currentFolderPathsJson = JSON.stringify(currentFolderPaths);

    if (folderPathsJson !== currentFolderPathsJson) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          folderPaths,
        },
      }));
    }
  },

  setMetadataKeys: (metadataKeys) => {
    // Only update if metadataKeys has changed
    const currentMetadataKeys = get().query.metadataKeys || [];
    const metadataKeysJson = JSON.stringify(metadataKeys);
    const currentMetadataKeysJson = JSON.stringify(currentMetadataKeys);

    if (metadataKeysJson !== currentMetadataKeysJson) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          metadataKeys,
        },
      }));
    }
  },

  setMetadataValues: (metadataValues) => {
    // Only update if metadataValues has changed
    const currentMetadataValues = get().query.metadataValues || {};
    const metadataValuesJson = JSON.stringify(metadataValues);
    const currentMetadataValuesJson = JSON.stringify(currentMetadataValues);

    if (metadataValuesJson !== currentMetadataValuesJson) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          metadataValues,
        },
      }));
    }
  },
}));

export default useLocationStore;
