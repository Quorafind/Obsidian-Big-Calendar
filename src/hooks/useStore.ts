import useAppStore, {stores} from '../stores/appStore';
import useFileStore from '../stores/fileStore';
import useEventStore from '../stores/eventStore';
import useGlobalStateStore from '../stores/globalStateStore';
import useLocationStore from '../stores/locationStore';

// This hook is a convenience wrapper around all our stores
// It allows components to import just one hook to access any store

export const useStore = () => {
  return {
    // Individual stores
    useAppStore,
    useFileStore,
    useEventStore,
    useGlobalStateStore,
    useLocationStore,

    // Static access to stores without hooks (for use outside React components)
    stores,
  };
};

// Example selectors for common state access patterns
export const useEvents = () => useEventStore((state) => state.events);
export const useTags = () => useEventStore((state) => state.tags);
export const useDailyNotes = () => useFileStore((state) => state.files);
export const useApp = () => useFileStore((state) => state.app);
export const useGlobalSettings = () =>
  useGlobalStateStore((state) => ({
    shouldHideImageUrl: state.shouldHideImageUrl,
    shouldUseMarkdownParser: state.shouldUseMarkdownParser,
  }));
export const useIsMobileView = () => useGlobalStateStore((state) => state.isMobileView);
export const useShowSidebar = () => useGlobalStateStore((state) => state.showSiderbarInMobileView);
export const useLocation = () =>
  useLocationStore((state) => ({
    pathname: state.pathname,
    hash: state.hash,
    query: state.query,
  }));

export default useStore;
