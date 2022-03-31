import { useContext, useMemo, FC, ReactNode, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { ROUTES } from '@extension/common/constants';
import history from '@extension/app/utils/history';
import useSharedUsers from '@extension/app/hooks/useSharedUsers';
import { VaultContext, PendingSharesContext } from '@extension/app/context';
import { isCreditCard, isNote, isPassword, isPersonalInfo } from '@common/utils/itemTypeGuards';
import SharedWith from '@extension/app/pages/ViewItem/components/SharedWith/SharedWith';
import useVaultItem from '@extension/app/hooks/useVaultItem';
import { IItem } from '@common/interfaces';
import { Platform, ShareStatus } from '@common/constants';
import { ItemAccessAction } from '@common/constants/userAction';
import { api } from '@extension/app/api';
import { noOp } from '@common/constants/function';
import ItemHeader from './ItemHeader';
import PendingItem from './PendingItem';
import ViewPassword from './ViewPassword/ViewPassword';
import ViewNote from './ViewNote';
import ViewCreditCard from './ViewCreditCard';
import ViewPersonalInfo from './ViewPersonalInfo';

interface IItemTypeView {
  item: IItem;
  sharedWith: ReactNode;
}

const ItemTypeView: FC<IItemTypeView> = ({ item, sharedWith }) => {
  const { vaultFolders } = useContext(VaultContext);
  const itemWithFolder = useMemo(() => {
    if (!item.folder_id) return item;
    const folder = vaultFolders.find(folderItem => folderItem.uuid === item.folder_id);
    return { ...item, folder_name: folder?.title };
  }, [item, vaultFolders]);
  if (isPassword(itemWithFolder)) {
    return <ViewPassword item={itemWithFolder} sharedWith={sharedWith} />;
  }
  if (isNote(itemWithFolder)) {
    return <ViewNote item={itemWithFolder} sharedWith={sharedWith} />;
  }
  if (isCreditCard(itemWithFolder)) {
    return <ViewCreditCard item={itemWithFolder} sharedWith={sharedWith} />;
  }
  if (isPersonalInfo(itemWithFolder)) {
    return <ViewPersonalInfo item={itemWithFolder} sharedWith={sharedWith} />;
  }

  return null;
};

interface IViewItem {
  selectedUid?: string;
  closeViewItems?: () => void;
}

const ViewItem: FC<IViewItem> = ({ selectedUid, closeViewItems }) => {
  const params = useParams<{ id: string }>();
  const id = selectedUid || params.id;
  const { vaultItems } = useContext(VaultContext);
  const allShares = useContext(PendingSharesContext);

  // useVaultItem does not listen for vault changes, only fetches item data at the moment it was called on.
  // It is needed in cases like trash, where vault data is not available. For all other cases,
  // reactive item data from vaultContext should be used.
  const frozenItemData = useVaultItem(id);
  const item = (
    (vaultItems || []).find(i => i.uuid === id) ||
    (allShares || []).find(i => i.uuid === id) ||
    frozenItemData ||
    {} as IItem
  );
  const isTrash = !!useRouteMatch(ROUTES.TRASH);
  const [sharedUsers] = useSharedUsers(item);

  useEffect(() => {
    if (item?.uuid && item.share_status !== ShareStatus.Pending) {
      api.action.saveItemAction(ItemAccessAction.ItemViewed, [item.uuid], Platform.Extension).catch(noOp);
    }
  }, [item.share_status, item.uuid]);

  if (!item) {
    return null;
  }

  const close = () => {
    if (closeViewItems) {
      closeViewItems();
    } else {
      history.goBack();
    }
  };

  if (item.shared && item.share_status === ShareStatus.Pending) {
    return <PendingItem pendingItem={item} onClose={close} />;
  }

  return (
    <div className="h-full flex flex-col page-slide-in bg-primary overflow-y-auto">
      <div className="flex-1 overflow-y-auto">
        <ItemHeader item={item} close={close} isTrash={isTrash} />
        <ItemTypeView
          item={item}
          sharedWith={<SharedWith uuid={item.uuid} sharedUsers={sharedUsers} />}
        />
      </div>
    </div>
  );
};

export default ViewItem;
