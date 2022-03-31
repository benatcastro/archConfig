import { FC, memo } from 'react';
import { api } from '@extension/app/api';
import { FormattedMessage } from 'react-intl';
import { getSecret } from '@extension/app/api/VaultApi';
import { isLimitedAccess } from '@extension/app/utils/itemAccessUtils/itemAccessUtils';
import { INoteItem } from '@common/contracts/contracts';
import MenuItem from '@common/components/Menu/MenuItem';
import { copyWithFeedback } from '@extension/app/components/VaultList/VaultListUtils';
import useDebouncedCopyActionLogger from '@common/hooks/useDebouncedCopyActionLogger/useDebouncedCopyActionLogger';
import { CommonContextMenu } from './CommonContextMenu';

interface INoteItemContextMenu {
  item: INoteItem;
}

const NoteContextMenu: FC<INoteItemContextMenu> = ({ item }) => {
  const logCopyAction = useDebouncedCopyActionLogger(api.action, item.uuid, true);

  const copyNote = async () => {
    logCopyAction();
    const note = await getSecret(item.uuid);
    copyWithFeedback(note, <FormattedMessage id="secureNote" />);
  };

  return (
    <>
      {item.secret && item.secret !== '0' && (
        <>
          <MenuItem onClick={copyNote}>
            <FormattedMessage id="copyNote" />
          </MenuItem>
          <div className="border-t border-primary-accent-1 my-2" />
        </>
      )}
      <CommonContextMenu
        item={item}
        isShareHidden={isLimitedAccess(item.acl)}
      />
    </>
  );
};

export default memo(NoteContextMenu);
