import { FC, useCallback, useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from '@nord/ui/lib/Image';
import { trashItem } from '@extension/app/api/VaultApi';
import { EditMenuItem } from '@extension/app/components/VaultList/EditMenuItem/EditMenuItem';
import { api } from '@extension/app/api';
import AuthContext from '@extension/app/context/AuthContext';
import Tooltip from '@common/components/Tooltip/Tooltip';
import { IItem } from '@common/interfaces';
import { ItemActionModalType } from '@common/store/reducers/itemActionModalsReducer/itemActionModalsConstants';
import { VaultItemModalsContext } from '@extension/app/context/VaultItemModalsContext/VaultItemModalsContext';
import { VaultItemModalType } from '@extension/app/context/VaultItemModalsContext/VaultItemModalsContextContracts';
import MenuItem from '@common/components/Menu/MenuItem';
import { showFeedback } from '@extension/app/components/VaultList/VaultListUtils';
import { getSameItemsTranslation } from '@common/utils/getItemsTranslation';
import getFolderName from '@common/utils/getFolderName';
import { VaultContext } from '@extension/app/context';

export interface ICommonContextMenu {
  item: IItem;
  isShareHidden?: boolean;
  isEditHidden?: boolean;
}

export const CommonContextMenu: FC<ICommonContextMenu> = ({ item, isEditHidden, isShareHidden }) => {
  const { formatMessage } = useIntl();
  const { vaultFolders } = useContext(VaultContext);
  const { subscriptionData } = useContext(AuthContext);
  const { setVaultItemModalData } = useContext(VaultItemModalsContext);
  const hasPremiumPrivileges = !!(subscriptionData?.isPremium || subscriptionData?.isBusiness);

  const removeFromFolder = useCallback(() => api.item.removeFromFolder([item]).then(() => {
    showFeedback(
      <FormattedMessage
        id="itemRemovedFromFolder"
        values={{
          item: getSameItemsTranslation(1, item, formatMessage),
          itemsCount: 1,
          folderName: getFolderName(vaultFolders, item.folder_id),
        }}
      />,
    );
  }), [formatMessage, item, vaultFolders]);

  return (
    <>
      <MenuItem
        onClick={() => {
          api.extension.openDesktopApp({
            modal: {
              itemId: item.uuid,
              modalType: ItemActionModalType.MoveToFolder,
            },
          });
        }}
      >
        <FormattedMessage id="moveToFolder" />
      </MenuItem>

      {item.folder_id && (
        <MenuItem onClick={removeFromFolder}>
          <FormattedMessage id="removeFromFolder" />
        </MenuItem>
      )}

      <div className="border-t border-primary-accent-1 my-2" />

      {item.shared && item.owner && (
        <MenuItem
          colorClassName="text-red hover:bg-primary-accent-3"
          onClick={() => setVaultItemModalData({ type: VaultItemModalType.MoveToTrash, itemId: item.uuid })}
        >
          <FormattedMessage id="moveToTrash" />
        </MenuItem>
      )}

      {item.shared && !item.owner && (
        <MenuItem
          colorClassName="text-red hover:bg-primary-accent-3"
          onClick={
            () => setVaultItemModalData({ type: VaultItemModalType.RemoveAccessToSharedItem, itemId: item.uuid })
          }
        >
          <FormattedMessage id="removeMyAccess" />
        </MenuItem>
      )}

      {!isEditHidden && (
        <EditMenuItem item={item} />
      )}

      {!isShareHidden && (
        <MenuItem
          className="flex items-center"
          onClick={() => api.extension.openDesktopApp({
            displayUpgradeModal: !hasPremiumPrivileges,
            ...(hasPremiumPrivileges && { modal: {
              itemId: item.uuid,
              modalType: ItemActionModalType.Share,
            } }),
          })}
        >
          <FormattedMessage id="share" />
          {!hasPremiumPrivileges && (
            <>
              <Tooltip id="premium" showOnHover>
                <FormattedMessage id="premium" />
              </Tooltip>
              <Image
                src="icons/16/premium_crown.svg"
                className="ml-2"
                noLazy
                responsive={false}
                data-tip-premium
              />
            </>
          )}
        </MenuItem>
      )}

      {!item.shared && !item.deleted_at && (
        <MenuItem onClick={() => trashItem(item.uuid)} >
          <FormattedMessage id="moveToTrash" />
        </MenuItem>
      )}
    </>
  );
};
