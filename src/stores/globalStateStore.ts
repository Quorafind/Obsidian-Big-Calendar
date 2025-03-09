import {BigCalendarSettings} from '@/setting';
import {create} from 'zustand';

export interface AppSetting {
  shouldHideImageUrl: boolean;
  shouldUseMarkdownParser: boolean;
}

export interface GlobalState extends AppSetting {
  markEventId: string;
  editEventId: string;
  isMobileView: boolean;
  showSiderbarInMobileView: boolean;

  pluginSetting: BigCalendarSettings;

  // Actions
  setMarkEventId: (markEventId: string) => void;
  setEditEventId: (editEventId: string) => void;
  setMobileView: (isMobileView: boolean) => void;
  setShowSiderbarInMobileView: (showSiderbarInMobileView: boolean) => void;
  setAppSetting: (appSetting: Partial<AppSetting>) => void;

  setPluginSetting: (pluginSetting: BigCalendarSettings) => void;
}

const useGlobalStateStore = create<GlobalState>((set) => ({
  // Initial state
  markEventId: '',
  editEventId: '',
  shouldSplitEventWord: true,
  shouldHideImageUrl: true,
  shouldUseMarkdownParser: true,
  useTinyUndoHistoryCache: false,
  isMobileView: false,
  showSiderbarInMobileView: false,
  pluginSetting: null,

  // Actions
  setMarkEventId: (markEventId) => set((state) => (markEventId === state.markEventId ? state : {markEventId})),

  setEditEventId: (editEventId) => set((state) => (editEventId === state.editEventId ? state : {editEventId})),

  setMobileView: (isMobileView) => set((state) => (isMobileView === state.isMobileView ? state : {isMobileView})),

  setShowSiderbarInMobileView: (showSiderbarInMobileView) =>
    set((state) => (showSiderbarInMobileView === state.showSiderbarInMobileView ? state : {showSiderbarInMobileView})),

  setAppSetting: (appSetting) =>
    set((state) => ({
      ...state,
      ...appSetting,
    })),

  setPluginSetting: (pluginSetting) =>
    set((state) => ({
      ...state,
      ...pluginSetting,
    })),
}));

export default useGlobalStateStore;
