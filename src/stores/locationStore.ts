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
const useLocationStore = create<LocationState>((set) => ({
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
  setLocation: (location) => set(location),

  setPathname: (pathname) =>
    set((state) => ({
      ...state,
      pathname,
    })),

  setQuery: (query) =>
    set((state) => ({
      ...state,
      query,
    })),

  setQueryFilter: (filter) =>
    set((state) => ({
      ...state,
      query: {
        ...state.query,
        filter,
      },
    })),

  setTagQuery: (tag) =>
    set((state) => ({
      ...state,
      query: {
        ...state.query,
        tag,
      },
    })),

  setDurationQuery: (duration) =>
    set((state) => ({
      ...state,
      query: {
        ...state.query,
        duration,
      },
    })),

  setType: (type) =>
    set((state) => ({
      ...state,
      query: {
        ...state.query,
        type,
      },
    })),

  setText: (text) =>
    set((state) => ({
      ...state,
      query: {
        ...state.query,
        text,
      },
    })),

  setHash: (hash) =>
    set((state) => ({
      ...state,
      hash,
    })),
}));

export default useLocationStore;
