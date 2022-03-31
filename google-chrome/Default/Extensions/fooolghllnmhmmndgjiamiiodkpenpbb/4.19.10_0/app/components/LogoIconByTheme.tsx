import { FC, useEffect, useState } from 'react';

import { Image } from '@nord/ui';
import StorageApi from '@extension/browser/storageApi';
import { Storage } from '@extension/common/constants';
import { AppTheme } from '@common/constants/appTheme';

const LogoIconByTheme: FC = () => {
  const [appTheme, setAppTheme] = useState<AppTheme>(AppTheme.Light);
  const logoClassName = 'mx-auto item-image-80px';

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const { appTheme } = await StorageApi.get({ [Storage.AppTheme]: null });
      if (isMounted) {
        setAppTheme(appTheme);
      }
    })();
    return () => {
      isMounted = false;
    };
  });

  if (appTheme === AppTheme.Dark) {
    return <Image className={logoClassName} src="icons/logo-dark.svg" noLazy />;
  }

  return <Image className={logoClassName} src="icons/logo.svg" noLazy />;
};

export default LogoIconByTheme;
