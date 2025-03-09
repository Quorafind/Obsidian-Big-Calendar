import useAppStore, {stores} from '../stores/appStore';
import useDailyNotesStore from '../stores/dailyNotesStore';
import useEventStore from '../stores/eventStore';

// This hook is a convenience wrapper around all our stores
// It allows components to import just one hook to access any store

export const useStore = () => {
  return {
    // Individual stores
    useAppStore,
    useDailyNotesStore,
    useEventStore,

    // Static access to stores without hooks (for use outside React components)
    stores,
  };
};

// Example selectors for common state access patterns
export const useEvents = () => useEventStore((state) => state.events);
export const useTags = () => useEventStore((state) => state.tags);
export const useDailyNotes = () => useDailyNotesStore((state) => state.dailyNotes);
export const useApp = () => useDailyNotesStore((state) => state.app);

export default useStore;
