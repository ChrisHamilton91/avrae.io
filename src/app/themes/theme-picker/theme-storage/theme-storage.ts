import {EventEmitter, Injectable} from '@angular/core';

export interface DocsSiteTheme {
  href: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}


@Injectable()
export class ThemeStorage {
  static storageKey = 'docs-theme-storage-current';

  onThemeUpdate: EventEmitter<DocsSiteTheme> = new EventEmitter<DocsSiteTheme>();

  storeTheme(theme: DocsSiteTheme) {
    try {
      localStorage[ThemeStorage.storageKey] = JSON.stringify(theme);
    } catch (e) {
    }

    this.onThemeUpdate.emit(theme);
  }

  getStoredTheme(): DocsSiteTheme {
    try {
      return JSON.parse(localStorage[ThemeStorage.storageKey] || null);
    } catch (e) {
      return null;
    }
  }

  clearStorage() {
    try {
      localStorage.removeItem(ThemeStorage.storageKey);
    } catch (e) {
    }
  }
}
