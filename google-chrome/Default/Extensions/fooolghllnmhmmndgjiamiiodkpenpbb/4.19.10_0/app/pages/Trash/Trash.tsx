import { ListenerType, ROUTES } from '@extension/common/constants';
import { useEffect, useState } from 'react';
import useSearchParam from '@extension/app/hooks/useSearchParam';
import { useSorting } from '@extension/app/hooks/useSorting';
import { INotification } from '@extension/app/context/OrganizationContext';
import { createListener, api } from '@extension/app/api/index';
import { logError } from '@extension/common/utils';
import { FormattedMessage } from 'react-intl';
import { sortItems } from '@extension/common/utils/sortItems';
import VaultList from '@extension/app/components/VaultList/VaultList';
import { Notification } from '@common/constants/notification';
import { updateTrashItems } from '@extension/app/pages/Trash/utils/updateTrashItems';
import { IItem } from '@common/interfaces';
import { VaultType } from '@common/constants';
import { noOp } from '@common/constants/function';
import FullscreenLoader from '@common/components/FullScreenLoader/FullscreenLoader';
import { Route, Switch } from 'react-router-dom';
import ViewItem from '@extension/app/pages/ViewItem/ViewItem';
import useLoaderLogging from '@common/hooks/useLoaderLogging/useLoaderLogging';

const Trash = () => {
  const [vault, setVault] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState<Array<IItem>>(null);
  const query = useSearchParam('query');
  const sorting = useSorting();

  useLoaderLogging(isLoading, logError, 'Trash');

  useEffect(() => {
    let didCancel = false;

    const handleVaultChanges = (msg: INotification) => {
      if (didCancel) {
        return;
      }

      if (msg.type === Notification.VaultChange) {
        const vaultChanges = msg.items;
        const vaultDeletes = msg.deleted_items;

        if (vaultDeletes && vaultDeletes.length) {
          api.item.fetchTrashedItems().then(trashItems => setVault(trashItems));
        } else if (vaultChanges && vaultChanges.length) {
          setVault(prev => updateTrashItems(prev, vaultChanges));
        }
      }
    };

    let removeListener = noOp;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const trashItems = await api.item.fetchTrashedItems();

        if (didCancel) {
          return;
        }

        removeListener = createListener('Trash', handleVaultChanges, ListenerType.RuntimeMessage);
        setVault(trashItems.map(item => ({ ...item, selected: false })));
      } catch (error) {
        setError(error.message);
        logError('fetchTrashItems:', error);
      }

      setLoading(false);
    })();

    return () => {
      removeListener();
      didCancel = true;
    };
  }, []);

  useEffect(() => {
    const sortedList = sortItems(vault, sorting);
    setItems(prevItems => JSON.stringify(prevItems) === JSON.stringify(sortedList) ? prevItems : sortedList);
  }, [vault, sorting]);

  if (error) {
    return (
      <div className="h-full flex justify-center items-center text-center p-4">
        <FormattedMessage id="undefinedError" />
      </div>
    );
  }

  if (isLoading) {
    return <FullscreenLoader />;
  }

  return (
    <Switch>
      <Route exact path={ROUTES.VIEW_TRASH_ITEM(':id')} component={ViewItem} />
      <Route>
        <VaultList
          items={items}
          query={query}
          vaultType={VaultType.Trash}
          sorting={sorting}
          isTrash
        />
      </Route>
    </Switch>
  );
};

export default Trash;
