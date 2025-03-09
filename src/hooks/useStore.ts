import useAppStore, {stores} from '../stores/appStore';
import useFileStore from '../stores/fileStore';
import useEventStore from '../stores/eventStore';
import useGlobalStateStore from '../stores/globalStateStore';
import useLocationStore from '../stores/locationStore';
import {useMemo, useRef} from 'react';

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
// Use useMemo to prevent unnecessary re-renders
export const useEvents = () => {
  const events = useEventStore((state) => state.events);
  // Memoize the events to prevent unnecessary re-renders
  return useMemo(() => events, [events]);
};

export const useTags = () => useEventStore((state) => state.tags);
export const useDailyNotes = () => useFileStore((state) => state.files);
export const useApp = () => useFileStore((state) => state.app);
export const useGlobalSettings = () => {
  const settings = useGlobalStateStore((state) => ({
    shouldHideImageUrl: state.shouldHideImageUrl,
    shouldUseMarkdownParser: state.shouldUseMarkdownParser,
  }));
  // Memoize the settings to prevent unnecessary re-renders
  return useMemo(() => settings, [settings.shouldHideImageUrl, settings.shouldUseMarkdownParser]);
};
export const useIsMobileView = () => useGlobalStateStore((state) => state.isMobileView);
export const useShowSidebar = () => useGlobalStateStore((state) => state.showSiderbarInMobileView);

// Optimized version of useLocation to prevent infinite loops
export const useLocation = () => {
  // Use separate selectors for each property instead of creating an object
  const pathname = useLocationStore((state) => state.pathname);
  const hash = useLocationStore((state) => state.hash);
  const query = useLocationStore((state) => state.query);

  // Create a ref to cache previous values
  const prevValuesRef = useRef({pathname, hash, query: JSON.stringify(query)});

  // Return memoized location object
  return useMemo(() => {
    const prevValues = prevValuesRef.current;
    const queryString = JSON.stringify(query);

    // Check if any values have changed
    if (pathname !== prevValues.pathname || hash !== prevValues.hash || queryString !== prevValues.query) {
      // Update ref with new values
      prevValuesRef.current = {
        pathname,
        hash,
        query: queryString,
      };
    }

    // Return location object
    return {
      pathname,
      hash,
      query,
    };
  }, [pathname, hash, query]);
};

export default useStore;
