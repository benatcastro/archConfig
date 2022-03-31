import { Locale } from '@common/constants/locale';
import { Translations } from '@common/utils/Translations';
import { createListener } from '@extension/app/api';
import StorageApi from '@extension/browser/storageApi';
import { ListenerType, Storage } from '@extension/common/constants';
import enLocale from '@extension/assets/lang/compiled/en.json';
import deLocale from '@extension/assets/lang/compiled/de.json';
import frLocale from '@extension/assets/lang/compiled/fr.json';
import itLocale from '@extension/assets/lang/compiled/it.json';
import esLocale from '@extension/assets/lang/compiled/es.json';

class ExtensionTranslationsProvider extends Translations {
  public constructor() {
    const locales = {
      [Locale.English]: enLocale,
      [Locale.German]: deLocale,
      [Locale.French]: frLocale,
      [Locale.Italian]: itLocale,
      [Locale.Spanish]: esLocale,
    };

    super(locales);

    StorageApi.get({ [Storage.AppLanguage]: null }).then(result => {
      const language = result?.appLanguage;
      if (language) {
        super.createIntl(language);
      }
    });

    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    createListener('handleLocaleChangeListener', this.handleLocaleChange, ListenerType.StorageChange);
  }

  public handleLocaleChange(changes: Record<string, any>) {
    if (changes[Storage.AppLanguage]) {
      const locale = changes[Storage.AppLanguage].newValue;
      super.createIntl(locale);
    }
  }
}

export const ExtensionTranslations = new ExtensionTranslationsProvider();
