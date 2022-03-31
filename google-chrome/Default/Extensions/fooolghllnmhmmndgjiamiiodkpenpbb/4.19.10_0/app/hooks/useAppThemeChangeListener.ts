import StorageApi from '@extension/browser/storageApi';
import { ListenerType, Storage } from '@extension/common/constants';
import { createListener } from '@extension/app/api';
import { AppTheme, ThemeClassName } from '@common/constants/appTheme';
import { useEffect } from 'react';

const getThemeClassName = (theme: AppTheme) => theme === AppTheme.Dark ? ThemeClassName.Dark : ThemeClassName.Light;

const addThemeClassNameToHtmlElement = (className: ThemeClassName) => {
  Object.values(ThemeClassName).forEach(themeClassName => {
    if (themeClassName !== className) {
      document.documentElement.classList.remove(themeClassName);
    }
  });

  if (!document.documentElement.classList.contains(className)) {
    document.documentElement.classList.add(className);
  }
};

export const useAppThemeChangeListener = () => {
  (async () => {
    const { appTheme } = await StorageApi.get({ [Storage.AppTheme]: null });

    addThemeClassNameToHtmlElement(getThemeClassName(appTheme));
  })();

  const handleAppThemeChange = (changes: Record<string, any>) => {
    if (changes[Storage.AppTheme]) {
      const theme = changes[Storage.AppTheme].newValue;
      addThemeClassNameToHtmlElement(getThemeClassName(theme));
    }
  };

  useEffect(() => (
    createListener('useAppThemeChangeListener', handleAppThemeChange, ListenerType.StorageChange)
  ), []);
};
