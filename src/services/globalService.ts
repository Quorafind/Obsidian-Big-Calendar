import {BigCalendarSettings} from '@/setting';
import {storage} from '@/utils/storage';
import useGlobalStateStore, {AppSetting} from '@/stores/globalStateStore';
import fileStore from '@/stores/fileStore';

class GlobalService {
  constructor() {
    const defaultAppSetting: AppSetting = {
      shouldHideImageUrl: true,
      shouldUseMarkdownParser: true,
    };

    try {
      const app = fileStore.getState().app;
      if (app) {
        const cachedSetting = storage.get(
          ['shouldHideImageUrl', 'shouldUseMarkdownParser'] as Array<keyof AppSetting>,
          app,
        ) as Partial<AppSetting>;

        if (cachedSetting?.shouldHideImageUrl !== undefined) {
          defaultAppSetting.shouldHideImageUrl = cachedSetting.shouldHideImageUrl;
        }

        if (cachedSetting?.shouldUseMarkdownParser !== undefined) {
          defaultAppSetting.shouldUseMarkdownParser = cachedSetting.shouldUseMarkdownParser;
        }
      }
    } catch (error) {
      console.error('Failed to load cached settings:', error);
    }

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
    console.log(pluginSetting);
    useGlobalStateStore.getState().setPluginSetting(pluginSetting);
  };
}

const globalService = new GlobalService();

export default globalService;
