import { FC, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import enLocale from '@extension/assets/lang/compiled/en.json';
import deLocale from '@extension/assets/lang/compiled/de.json';
import frLocale from '@extension/assets/lang/compiled/fr.json';
import itLocale from '@extension/assets/lang/compiled/it.json';
import esLocale from '@extension/assets/lang/compiled/es.json';
import { createListener } from '@extension/app/api';
import StorageApi from '@extension/browser/storageApi';
import { ListenerType, Storage } from '@extension/common/constants';
import { Locale } from '@common/constants/locale';
import { logError } from '@extension/common/utils';

const loadLocaleData = async (locale: Locale) => {
  switch (locale) {
    case Locale.German:
      return deLocale;
    case Locale.French:
      return frLocale;
    case Locale.Italian:
      return itLocale;
    case Locale.Spanish:
      return esLocale;
    default:
      return enLocale;
  }
};

export const TranslationsProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState(Locale.English);
  const [messages, setMessages] = useState<Record<string, any>>(enLocale);

  useEffect(() => {
    (async () => setMessages({
      ...enLocale,
      ...(await loadLocaleData(locale)),
    }))();
  }, [locale]);

  useEffect(() => {
    (async () => {
      const initLocale = await StorageApi.get({ [Storage.AppLanguage]: null });
      if (initLocale[Storage.AppLanguage]) {
        setLocale(initLocale[Storage.AppLanguage]);
      }
    })();
  }, []);

  useEffect(() => {
    const handleAppLanguageChange = (changes: Record<string, any>) => {
      if (changes[Storage.AppLanguage]) {
        const language = changes[Storage.AppLanguage].newValue;
        setLocale(language);
      }
    };
    return createListener('useAppLanguageChangeListener', handleAppLanguageChange, ListenerType.StorageChange);
  }, []);

  const onError = (error: Error) => {
    logError('TranslationsProvider: ', error);
  };

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={Locale.English}
      messages={messages}
      onError={onError}
    >
      {children}
    </IntlProvider>
  );
};
