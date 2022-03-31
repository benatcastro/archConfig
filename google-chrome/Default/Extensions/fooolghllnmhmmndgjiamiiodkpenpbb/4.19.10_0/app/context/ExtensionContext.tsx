import { createContext, FC, useEffect, useState } from 'react';
import BrowserApi from '@extension/browser/browserApi';
import parseUrl from '@common/utils/parseUrl/parseUrl';
import { logError } from '@extension/common/utils';

interface IExtensionProvider {
  isPopup: boolean;
}

export interface IExtensionContextValue extends IExtensionProvider {
  domain: string;
  websiteUrl: string;
}

export const ExtensionContext = createContext<IExtensionContextValue>(null);

const ExtensionProvider: FC<IExtensionProvider> = ({ isPopup, children }) => {
  const [domain, setDomain] = useState<IExtensionContextValue['domain']>(null);
  const [websiteUrl, setWebsiteUrl] = useState<IExtensionContextValue['websiteUrl']>(null);

  useEffect(() => {
    if (isPopup) {
      BrowserApi.getTabFromCurrentWindow().then(activeTab => {
        if (activeTab?.[0]) {
          const { url } = activeTab[0];
          if (url.startsWith('http')) {
            setWebsiteUrl(url);
            setDomain(parseUrl(logError, url).domain);
          }
        } else {
          setDomain(null);
        }
      });
    } else {
      setDomain(null);
    }
  }, [isPopup]);

  return (
    <ExtensionContext.Provider value={{ isPopup, domain, websiteUrl }}>
      {children}
    </ExtensionContext.Provider>
  );
};

export default ExtensionProvider;
