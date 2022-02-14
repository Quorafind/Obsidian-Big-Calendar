import {storage} from '../helpers/storage';
import appStore from '../stores/appStore';
import {AppSetting} from '../stores/globalStateStore';

class GlobalStateService {
  constructor() {
    const cachedSetting = storage.get([
      'shouldSplitEventWord',
      'shouldHideImageUrl',
      'shouldUseMarkdownParser',
    ]);
    const defaultAppSetting = {
      shouldSplitEventWord: cachedSetting.shouldSplitEventWord ?? true,
      shouldHideImageUrl: cachedSetting.shouldHideImageUrl ?? true,
      shouldUseMarkdownParser: cachedSetting.shouldUseMarkdownParser ?? true,
    };

    this.setAppSetting(defaultAppSetting);
  }

  public getState = () => {
    return appStore.getState().globalState;
  };

  public setEditEventId = (editEventId: string) => {
    appStore.dispatch({
      type: 'SET_EDIT_EVENT_ID',
      payload: {
        editEventId,
      },
    });
  };

  public setMarkEventId = (markEventId: string) => {
    appStore.dispatch({
      type: 'SET_MARK_EVENT_ID',
      payload: {
        markEventId,
      },
    });
  };

  public setIsMobileView = (isMobileView: boolean) => {
    appStore.dispatch({
      type: 'SET_MOBILE_VIEW',
      payload: {
        isMobileView,
      },
    });
  };

  public setShowSiderbarInMobileView = (showSiderbarInMobileView: boolean) => {
    appStore.dispatch({
      type: 'SET_SHOW_SIDEBAR_IN_MOBILE_VIEW',
      payload: {
        showSiderbarInMobileView,
      },
    });
  };

  public setAppSetting = (appSetting: Partial<AppSetting>) => {
    appStore.dispatch({
      type: 'SET_APP_SETTING',
      payload: appSetting,
    });
    storage.set(appSetting);
  };
}

const globalStateService = new GlobalStateService();

export default globalStateService;
