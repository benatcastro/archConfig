import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import sortSharedUsersByOwner from '@common/utils/sortSharedUsersByOwner/sortSharedUsersByOwner';
import { showAlert } from '@common/utils/alerts';
import { logError } from '@extension/common/utils';
import { api } from '@extension/app/api';
import { IItem } from '@common/interfaces';

interface ISharedUser {
  email: string;
  owner: boolean;
}

export default function useSharedUsers(item: IItem) {
  const { formatMessage } = useIntl();
  const [sharedUsers, setSharedUsers] = useState<Array<ISharedUser>>([]);

  useEffect(() => {
    if (!item.uuid || !item.shared) {
      return;
    }

    (async () => {
      try {
        const shares = await api.share.fetchShares(item.uuid, item.type);

        setSharedUsers(sortSharedUsersByOwner(shares));
      } catch (error) {
        showAlert(formatMessage({ id: 'errorWhileAccessingItem' }));
        logError('useSharedUsers:', error);
      }
    })();
  }, [item.uuid, item.type, item.shared, formatMessage]);

  return [sharedUsers, setSharedUsers] as [typeof sharedUsers, typeof setSharedUsers];
}
