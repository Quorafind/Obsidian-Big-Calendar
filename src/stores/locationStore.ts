import {create} from 'zustand';

// Define the state interface
export interface LocationState extends AppLocation {
  // Actions
  setLocation: (location: AppLocation) => void;
  setPathname: (pathname: AppRouter) => void;
  setQuery: (query: Query) => void;
  setQueryFilter: (filter: string) => void;
  setTagQuery: (tag: string) => void;
  setDurationQuery: (duration: TDuration | null) => void;
  setType: (type: EventSpecType | '') => void;
  setText: (text: string) => void;
  setHash: (hash: string) => void;
}

// Create the store using Zustand
const useLocationStore = create<LocationState>((set, get) => ({
  // Initial state
  pathname: '/',
  hash: '',
  query: {
    tag: '',
    duration: null,
    text: '',
    type: '',
    filter: '',
  },

  // Actions
  setLocation: (location) => {
    // Only update if values have changed
    const state = get();
    const hasChanges =
      location.pathname !== state.pathname ||
      location.hash !== state.hash ||
      JSON.stringify(location.query) !== JSON.stringify(state.query);

    if (hasChanges) {
      set(location);
    }
  },

  setPathname: (pathname) => {
    // Only update if pathname has changed
    const currentPathname = get().pathname;
    if (pathname !== currentPathname) {
      set((state) => ({
        ...state,
        pathname,
      }));
    }
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

  setType: (type) => {
    // Only update if type has changed
    const currentType = get().query.type;
    if (type !== currentType) {
      set((state) => ({
        ...state,
        query: {
          ...state.query,
          type,
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
}));

export default useLocationStore;
