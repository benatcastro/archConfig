import { useEffect, useState, memo, FC } from 'react';
import { Link, Text, Image } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';
import './OfflineModeIndicator.scss';
import StorageApi from '@extension/browser/storageApi';
import { ListenerType, Storage } from '@extension/common/constants';
import { createListener, api } from '@extension/app/api';

const OfflineModeIndicator: FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await StorageApi.get({ [Storage.OnlineStatus]: null });

      setIsOnline(!!result[Storage.OnlineStatus]);

      if (result[Storage.OnlineStatus] === false) {
        setShow(true);
      }
    })();

    const handleChange = (changes: any) => {
      setIsOnline(prev => {
        if (changes[Storage.OnlineStatus]) {
          setShow(true);
          return changes[Storage.OnlineStatus].newValue;
        }
        return prev;
      });
    };
    return createListener('onOnlineStatusChange', handleChange, ListenerType.StorageChange);
  }, []);

  useEffect(() => {
    if (isOnline && show) {
      setTimeout(() => setShow(false), 3000);
    }
  }, [isOnline, show]);

  if (!show) return null;

  const modeIcon = isOnline ? (
    <Image
      src="icons/16/online.svg"
      className="mr-2"
      data-testid="online-icon"
      noLazy
      responsive={false}
    />
  ) : (
    <Image
      src="icons/16/offline.svg"
      className="mr-2"
      data-testid="offline-icon"
      noLazy
      responsive={false}
    />
  );
  const modeText = isOnline ? <FormattedMessage id="youAreBackOnline" /> : <FormattedMessage id="youAreOffline" />;

  return (
    <div className={cx('mode-indicator text-white sticky py-3 alert-fade-in w-full flex items-center justify-center', isOnline ? 'mode-indicator--online' : 'bg-black')} data-testid="offline-indicator">
      {modeIcon}
      <Text variant="caption">
        {modeText}
      </Text>
      {!isOnline && (
        <Link
          className="text-micro underline ml-1"
          colorClassName="text-white hover:text-grey"
          data-testid="refresh-button"
          onClick={api.app.getOnlineStatus}
        >
          <FormattedMessage id="refresh" />
        </Link>
      )}
    </div>
  );
};

export default memo(OfflineModeIndicator);
