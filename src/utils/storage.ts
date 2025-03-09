import {View} from 'react-big-calendar';
import {App} from 'obsidian';

/**
 * Define storage data type
 */
interface StorageData {
  // 编辑器输入缓存内容
  editorContentCache: string;
  // 是否隐藏图片链接地址
  shouldHideImageUrl: boolean;
  // markdown 解析开关
  shouldUseMarkdownParser: boolean;
  // 视图状态
  viewCache: View;
  // 滚动高度
  currentDate: Date;
}

type StorageKey = keyof StorageData;

/**
 * storage helper
 */
export namespace storage {
  export function get(keys: StorageKey[], app: App): Partial<StorageData> {
    const data: Partial<StorageData> = {};

    for (const key of keys) {
      try {
        const stringifyValue = app.loadLocalStorage(key);
        if (stringifyValue !== null) {
          const val = JSON.parse(stringifyValue);
          data[key] = val;
        }
      } catch (error: any) {
        console.error('Get storage failed in ', key, error);
      }
    }

    return data;
  }

  export function set(data: Partial<StorageData>, app: App) {
    for (const key in data) {
      try {
        const stringifyValue = JSON.stringify(data[key as StorageKey]);
        app.saveLocalStorage(key, stringifyValue);
      } catch (error: any) {
        console.error('Save storage failed in ', key, error);
      }
    }
  }

  export function remove(keys: StorageKey[], app: App) {
    for (const key of keys) {
      try {
        app.saveLocalStorage(key, null);
      } catch (error: any) {
        console.error('Remove storage failed in ', key, error);
      }
    }
  }

  export function emitStorageChangedEvent() {
    const iframeEl = document.createElement('iframe');
    iframeEl.style.display = 'none';
    document.body.appendChild(iframeEl);

    iframeEl.contentWindow?.localStorage.setItem('t', Date.now().toString());
    iframeEl.remove();
  }
}
