import { useEffect } from 'react';
import { ROUTES } from '@common/constants';
import { noOp } from '@common/constants/function';
import { Notification } from '@common/constants/notification';
import { INotification } from '@extension/app/context/OrganizationContext';
import { getItem } from '@extension/app/api/VaultApi';
import { createListener } from '@extension/app/api';
import history from '@extension/app/utils/history';
import { TNonFolderItem, ICreditCardItem, IPasswordItem, INoteItem } from '@common/contracts/contracts';
import { ListenerType } from '@extension/common/constants';
import { useRefState } from '@common/hooks/useRefState';
import { IItem } from '@common/interfaces';

const clearSensitiveData = (item: TNonFolderItem) => ({
  ...item,
  card_number: undefined as ICreditCardItem['card_number'],
  cvc: undefined as ICreditCardItem['cvc'],
  pin: undefined as ICreditCardItem['pin'],
  secret: undefined as IPasswordItem['secret'] | INoteItem['secret'],
});

const useVaultItem = (uuid: string) => {
  const [item, setItem] = useRefState<IItem>();

  useEffect(() => {
    const handleVaultChanges = (msg: INotification) => {
      if (msg.type === Notification.VaultChange) {
        const vaultChanges: Array<TNonFolderItem> = msg.items || [];
        const updated = vaultChanges.find(i => i.uuid === uuid);

        if (updated) {
          setItem(clearSensitiveData(updated));
          return;
        }

        const vaultDeletes: Array<TNonFolderItem> = msg.deleted_items || [];
        const ind = vaultDeletes.findIndex(i => i.uuid === uuid);
        if (ind !== -1) {
          const isTrash = window.location.hash.includes(ROUTES.TRASH);
          history.push(isTrash ? ROUTES.TRASH : ROUTES.VAULT);
        }
      }
    };

    let didCancel = false;
    let removeListener = noOp;
    (async () => {
      setItem(undefined);
      if (uuid) {
        const result = (await getItem(uuid)) as TNonFolderItem;

        if (didCancel) {
          return;
        }
        removeListener = createListener('vaultChangeListener', handleVaultChanges, ListenerType.RuntimeMessage);
        setItem(clearSensitiveData(result));
      }
    })();

    return () => {
      removeListener();
      didCancel = true;
    };
  }, [setItem, uuid]);

  return item;
};

export default useVaultItem;
