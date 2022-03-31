import { FC, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { getSecret } from '@extension/app/api/VaultApi';
import { isFullAccess, isLimitedAccess } from '@extension/app/utils/itemAccessUtils/itemAccessUtils';
import { IPasswordItem } from '@common/contracts/contracts';
import MenuItem from '@common/components/Menu/MenuItem';
import { copyWithFeedback } from '@extension/app/components/VaultList/VaultListUtils';
import useDebouncedCopyActionLogger from '@common/hooks/useDebouncedCopyActionLogger/useDebouncedCopyActionLogger';
import { api } from '@extension/app/api';
import { CommonContextMenu } from './CommonContextMenu';

interface IPasswordItemContextMenu {
  item: IPasswordItem;
}

const PasswordContextMenu: FC<IPasswordItemContextMenu> = ({ item }) => {
  const isCopyPasswordEnabled = item.secret !== '0' && isFullAccess(item.acl);
  const logCopyAction = useDebouncedCopyActionLogger(api.action, item.uuid, true);

  const copyPassword = async () => {
    logCopyAction();
    const pass = await getSecret(item.uuid);
    copyWithFeedback(pass, <FormattedMessage id="password" />);
  };

  return (
    <>
      {item.username && (
        <MenuItem onClick={() => {
          copyWithFeedback(item.username, <FormattedMessage id="emailOrUsername" />);
          logCopyAction();
        }}
        >
          <FormattedMessage id="copyEmailUsername" />
        </MenuItem>
      )}
      {isCopyPasswordEnabled && (
        <MenuItem onClick={copyPassword}>
          <FormattedMessage id="copyPassword" />
        </MenuItem>
      )}
      {item.note && (
        <MenuItem onClick={() => {
          logCopyAction();
          copyWithFeedback(item.note, <FormattedMessage id="note" />);
        }}
        >
          <FormattedMessage id="copyNote" />
        </MenuItem>
      )}
      {(item.username || isCopyPasswordEnabled) && (
        <div className="border-t border-primary-accent-1 my-2" />
      )}
      <CommonContextMenu item={item} isShareHidden={isLimitedAccess(item.acl)} />
    </>
  );
};

export default memo(PasswordContextMenu);
