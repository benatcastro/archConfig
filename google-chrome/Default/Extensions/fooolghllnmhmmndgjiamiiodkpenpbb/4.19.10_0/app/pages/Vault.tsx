import { FC, useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from '@extension/common/constants';
import { SortingType, SortingDirection, VaultType } from '@common/constants';
import { Route, Switch } from 'react-router-dom';
import replaceSlashesWithDashes from '@common/utils/replaceSlashesWithDashes';
import VaultList from '@extension/app/components/VaultList/VaultList';
import useSearchParam from '@extension/app/hooks/useSearchParam';
import { PendingSharesContext, VaultContext } from '@extension/app/context';
import ViewItem from '@extension/app/pages/ViewItem/ViewItem';
import ViewPendingItem from '@extension/app/pages/ViewItem/ViewPendingItem';
import { isCreditCard, isPassword } from '@common/utils/itemTypeGuards';
import { getUpdatedItemList } from '@common/utils/getUpdatedItemList/getUpdatedItemList';
import { useSorting } from '@extension/app/hooks/useSorting';
import { IItem } from '@common/interfaces';
import { TFolderItem } from '@common/contracts/contracts';
import FullscreenLoader from '@common/components/FullScreenLoader/FullscreenLoader';
import { logError } from '@extension/common/utils';
import useLoaderLogging from '@common/hooks/useLoaderLogging/useLoaderLogging';

const searchVault = (vault: Array<IItem>, query: string) => {
  const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const q = new RegExp(escapedQ, 'i');
  return vault.filter(
    item => q.test(item.title) ||
      (isPassword(item) && q.test(item.username)) ||
      (isPassword(item) && q.test((item).url)) ||
      (isPassword(item) && q.test((item).note)) ||
      (isCreditCard(item) && q.test((item).cardholder_name)),
  );
};

// TODO: remove this when vaultcontext is converted to TS
interface IVaultContext {
  vaultItems: Array<IItem>;
  vaultFolders: Array<TFolderItem>;
  error: string;
  isLoading: boolean;
}

const Vault: FC = () => {
  const pendingShares = useContext(PendingSharesContext);
  const { vaultItems, vaultFolders, error, isLoading } = useContext<IVaultContext>(VaultContext);

  const sorting = useSorting();
  const vaultType = useSearchParam('type') as VaultType;
  const folderId = useSearchParam('folder');
  const query = useSearchParam('query');

  useLoaderLogging(!sorting, logError, 'Vault:EmptySorting');
  useLoaderLogging(isLoading, logError, 'Vault:isLoading');

  const [items, setItems] = useState<Array<IItem>>(null);
  useEffect(() => {
    let filtered: Array<IItem>;
    if (query) {
      filtered = searchVault(vaultItems, query);
    } else if (vaultType) {
      if (folderId) {
        filtered = vaultItems.filter(i => i.folder_id === folderId);
      } else if (vaultType === VaultType.Shared) {
        filtered = vaultItems.filter(i => i.shared);
      } else if (vaultType === VaultType.Folder) {
        filtered = vaultFolders;
      } else {
        filtered = vaultItems.filter(i => i.type === vaultType as string);
      }
    } else {
      filtered = vaultItems.slice(0);
    }

    if (sorting && sorting.type === SortingType.Recent) {
      filtered.sort(
        (a, b) => (new Date(replaceSlashesWithDashes(b.last_used_at)).getTime()) -
          (new Date(replaceSlashesWithDashes(a.last_used_at)).getTime()),
      );
      if (sorting.sort === SortingDirection.Desc) {
        filtered.reverse();
      }
    } else if (sorting && sorting.type === SortingType.Alpha && sorting.sort === SortingDirection.Asc) {
      filtered.sort(({ title = '' }, b) => title.localeCompare(b.title || ''));
    } else if (sorting && sorting.type === SortingType.Alpha && sorting.sort === SortingDirection.Desc) {
      filtered.sort((a, { title = '' }) => title.localeCompare(a.title || ''));
    }

    if (vaultType === VaultType.Shared && pendingShares.length > 0) {
      filtered = getUpdatedItemList(pendingShares, filtered) as Array<IItem>;
    }

    setItems(prevItems => {
      if (JSON.stringify(prevItems) === JSON.stringify(filtered)) {
        return prevItems;
      }
      return filtered;
    });
  }, [vaultItems, vaultFolders, pendingShares, query, vaultType, folderId, sorting]);

  if (error) {
    return (
      <div className="h-full flex justify-center items-center text-center p-4 color-primary">
        <FormattedMessage id="undefinedError" />
      </div>
    );
  }

  if (isLoading || !sorting) {
    return <FullscreenLoader />;
  }

  return (
    <Switch>
      <Route exact path={ROUTES.VIEW_ITEM(':id')} component={ViewItem} />
      <Route path={ROUTES.PENDING_ITEM(':email')} component={ViewPendingItem} />
      <Route>
        <VaultList
          items={items}
          vaultType={vaultType}
          query={query}
          sorting={sorting}
        />
      </Route>
    </Switch>
  );
};

export default Vault;
