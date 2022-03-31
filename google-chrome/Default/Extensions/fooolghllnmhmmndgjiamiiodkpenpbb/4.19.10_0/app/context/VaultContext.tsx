import { createContext, useEffect, useState, FC } from 'react';
import { useIntl } from 'react-intl';
import { ListenerType, Storage } from '@extension/common/constants';
import { SortingType, SortingDirection, ShareStatus, ItemType } from '@common/constants';
import StorageApi from '@extension/browser/storageApi';
import { logError } from '@extension/common/utils';
import { createListener, api } from '@extension/app/api';
import { Notification } from '@common/constants/notification';
import { IItem } from '@common/interfaces';
import { getFolders, getItems, sortItemsAlphabetically } from '@common/utils/vaultUtils/vaultUtils';
import useAction from '@common/hooks/useAction/useAction';
import { TFolderItem } from '@common/contracts/contracts';

interface IVaultContext {
  vaultItems: Array<IItem>;
  vaultFolders: Array<TFolderItem>;
  isLoading: boolean;
  error: string | null;
}

const VaultContext = createContext<IVaultContext>({ vaultItems: [], vaultFolders: [], isLoading: false, error: null });

async function fetchVaultItems() {
  const result = await StorageApi.get({
    [Storage.VaultSorting]: { type: SortingType.Recent, sort: SortingDirection.Asc },
  });

  const items = await api.item.fetchItems({
    sortBy: result[Storage.VaultSorting].type,
    itemTypes: Object.values(ItemType),
  });

  return {
    items: getItems(items),
    folders: sortItemsAlphabetically(getFolders(items)),
  };
}

export const VaultProvider: FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);
  const [vaultItems, setVaultItems] = useState<Array<IItem>>([]);
  const [vaultFolders, setVaultFolders] = useState<Array<IItem>>([]);
  const { formatMessage } = useIntl();

  const { action: fetchVault, isLoading } = useAction(fetchVaultItems, {
    onSuccess: result => {
      setError(null);
      if (result) {
        setVaultItems(result.items);
        setVaultFolders(result.folders);
      } else {
        setError(formatMessage({ id: 'undefinedError' }));
        logError('VaultContext:', `Result is empty = ${result}`);
      }
    },
    onError: error => {
      setError(error.message);
      logError('VaultContext:', error);
    },
  });

  useEffect(() => {
    let didCancel = false;

    function handleChange(msg: any) {
      if (didCancel) return;
      if (msg.type === Notification.VaultChange) {
        const vaultChanges: Array<IItem> = msg.items || [];
        const vaultDeletes: Array<IItem> = msg.deleted_items || [];

        const vaultItemChanges = getItems(vaultChanges);
        const vaultFolderChanges = getFolders(vaultChanges);

        const deletedItems = getItems(vaultDeletes);
        const deletedFolders = getFolders(vaultDeletes);

        if (vaultFolderChanges.length || deletedFolders.length) {
          setVaultFolders(prev => {
            let hasChanged = false;
            const updated = prev.slice(0);
            if (vaultFolderChanges.length) {
              hasChanged = true;
              vaultFolderChanges.forEach(item => {
                if (item.deleted_at) return;
                const ind = updated.findIndex(i => i.uuid === item.uuid);
                if (ind === -1) {
                  updated.push(item);
                } else {
                  updated[ind] = item;
                }
              });
            }

            if (deletedFolders.length) {
              deletedFolders.forEach(item => {
                const ind = updated.findIndex(i => i.uuid === item.uuid);
                if (ind !== -1) {
                  hasChanged = true;
                  updated.splice(ind, 1);
                }
              });
            }
            if (!hasChanged) {
              return prev;
            }

            sortItemsAlphabetically(updated, true);
            return updated;
          });
        }

        if (vaultItemChanges.length || deletedItems.length) {
          setVaultItems(prev => {
            let hasChanged = false;
            const updated = prev.slice(0);
            if (vaultItemChanges.length) {
              hasChanged = true;
              vaultItemChanges.forEach(item => {
                if (item.deleted_at || item.share_status === ShareStatus.Pending) {
                  return;
                }
                const ind = updated.findIndex(i => i.uuid === item.uuid);
                if (ind === -1) {
                  updated.push({ ...item, selected: false });
                } else {
                  updated[ind] = { ...item, selected: updated[ind].selected };
                }
              });
            }

            if (deletedItems.length) {
              deletedItems.forEach(item => {
                const ind = updated.findIndex(i => i.uuid === item.uuid);
                if (ind !== -1) {
                  hasChanged = true;
                  updated.splice(ind, 1);
                }
              });
            }
            if (!hasChanged) {
              return prev;
            }
            return updated;
          });
        }
      }
      if (msg.type === Notification.AccountChanged) {
        fetchVault();
      }
    }

    if (!didCancel) {
      fetchVault();
    }

    const removeListener = createListener(
      'VaultContext',
      handleChange,
      ListenerType.RuntimeMessage,
    );

    return () => {
      removeListener();
      didCancel = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <VaultContext.Provider value={{ vaultItems, vaultFolders, isLoading, error }}>
      {children}
    </VaultContext.Provider>
  );
};

export default VaultContext;
