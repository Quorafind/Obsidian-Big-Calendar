export interface AppSetting {
    shouldSplitEventWord: boolean;
    shouldHideImageUrl: boolean;
    shouldUseMarkdownParser: boolean;
    useTinyUndoHistoryCache: boolean;
  }
  
  export interface State extends AppSetting {
    markEventId: string;
    editEventId: string;
    isMobileView: boolean;
    showSiderbarInMobileView: boolean;
  }
  
  interface SetMarkEventIdAction {
    type: 'SET_MARK_EVENT_ID';
    payload: {
      markEventId: string;
    };
  }
  
  interface SetEditEventIdAction {
    type: 'SET_EDIT_EVENT_ID';
    payload: {
      editEventId: string;
    };
  }
  
  interface SetMobileViewAction {
    type: 'SET_MOBILE_VIEW';
    payload: {
      isMobileView: boolean;
    };
  }
  
  interface SetShowSidebarAction {
    type: 'SET_SHOW_SIDEBAR_IN_MOBILE_VIEW';
    payload: {
      showSiderbarInMobileView: boolean;
    };
  }
  
  interface SetAppSettingAction {
    type: 'SET_APP_SETTING';
    payload: Partial<AppSetting>;
  }
  
  export type Actions =
    | SetMobileViewAction
    | SetShowSidebarAction
    | SetEditEventIdAction
    | SetMarkEventIdAction
    | SetAppSettingAction;
  
  export function reducer(state: State, action: Actions): State {
    switch (action.type) {
      case 'SET_MARK_EVENT_ID': {
        if (action.payload.markEventId === state.markEventId) {
          return state;
        }
  
        return {
          ...state,
          markEventId: action.payload.markEventId,
        };
      }
      case 'SET_EDIT_EVENT_ID': {
        if (action.payload.editEventId === state.editEventId) {
          return state;
        }
  
        return {
          ...state,
          editEventId: action.payload.editEventId,
        };
      }
      case 'SET_MOBILE_VIEW': {
        if (action.payload.isMobileView === state.isMobileView) {
          return state;
        }
  
        return {
          ...state,
          isMobileView: action.payload.isMobileView,
        };
      }
      case 'SET_SHOW_SIDEBAR_IN_MOBILE_VIEW': {
        if (action.payload.showSiderbarInMobileView === state.showSiderbarInMobileView) {
          return state;
        }
  
        return {
          ...state,
          showSiderbarInMobileView: action.payload.showSiderbarInMobileView,
        };
      }
      case 'SET_APP_SETTING': {
        return {
          ...state,
          ...action.payload,
        };
      }
      default: {
        return state;
      }
    }
  }
  
  export const defaultState: State = {
    markEventId: '',
    editEventId: '',
    shouldSplitEventWord: true,
    shouldHideImageUrl: true,
    shouldUseMarkdownParser: true,
    useTinyUndoHistoryCache: false,
    isMobileView: false,
    showSiderbarInMobileView: false,
  };
  