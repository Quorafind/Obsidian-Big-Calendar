import {storage} from '../helpers/storage';
import useGlobalStateStore, {AppSetting} from '../stores/globalStateStore';

class GlobalStateService {
  constructor() {
    const cachedSetting = storage.get(['shouldSplitEventWord', 'shouldHideImageUrl', 'shouldUseMarkdownParser']);
    const defaultAppSetting = {
      shouldSplitEventWord: cachedSetting.shouldSplitEventWord ?? true,
      shouldHideImageUrl: cachedSetting.shouldHideImageUrl ?? true,
      shouldUseMarkdownParser: cachedSetting.shouldUseMarkdownParser ?? true,
    };

    this.setAppSetting(defaultAppSetting);
  }

  public getState = () => {
    return useGlobalStateStore.getState();
  };

  public setEditEventId = (editEventId: string) => {
    useGlobalStateStore.getState().setEditEventId(editEventId);
  };

  public setMarkEventId = (markEventId: string) => {
    useGlobalStateStore.getState().setMarkEventId(markEventId);
  };

  public setIsMobileView = (isMobileView: boolean) => {
    useGlobalStateStore.getState().setMobileView(isMobileView);
  };

  public setShowSiderbarInMobileView = (showSiderbarInMobileView: boolean) => {
    useGlobalStateStore.getState().setShowSiderbarInMobileView(showSiderbarInMobileView);
  };

  public setAppSetting = (appSetting: Partial<AppSetting>) => {
    useGlobalStateStore.getState().setAppSetting(appSetting);
    storage.set(appSetting);
  };
}

const globalStateService = new GlobalStateService();

export default globalStateService;
