import {BigCalendarSettings} from '@/setting';
import {storage} from '@/utils/storage';
import useGlobalStateStore, {AppSetting} from '@/stores/globalStateStore';
import fileStore from '@/stores/fileStore';

class GlobalStateService {
  constructor() {
    const cachedSetting = storage.get(
      ['shouldHideImageUrl', 'shouldUseMarkdownParser'] as Array<keyof AppSetting>,
      fileStore.getState().app,
    ) as Partial<AppSetting>;
    const defaultAppSetting: AppSetting = {
      shouldHideImageUrl: cachedSetting?.shouldHideImageUrl ?? true,
      shouldUseMarkdownParser: cachedSetting?.shouldUseMarkdownParser ?? true,
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
    storage.set(appSetting, fileStore.getState().app);
  };

  public setPluginSetting = (pluginSetting: BigCalendarSettings) => {
    useGlobalStateStore.getState().setPluginSetting(pluginSetting);
    // storage.set(pluginSetting);
  };
}

const globalStateService = new GlobalStateService();

export default globalStateService;
