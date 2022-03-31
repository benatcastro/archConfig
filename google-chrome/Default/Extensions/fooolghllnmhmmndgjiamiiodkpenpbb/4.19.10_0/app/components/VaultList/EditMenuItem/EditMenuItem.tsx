import { DESKTOP_ROUTES } from '@extension/common/constants';
import { FormattedMessage } from 'react-intl';
import { FC, memo } from 'react';
import { IItem } from '@common/interfaces/item';
import { isLimitedAccess } from '@extension/app/utils/itemAccessUtils/itemAccessUtils';
import { api } from '@extension/app/api';
import MenuItem from '@common/components/Menu/MenuItem';

export const EditMenuItem: FC<Record<'item', IItem>> = memo(({ item }) => {
  if (isLimitedAccess(item.acl)) {
    return null;
  }

  return (
    <MenuItem
      onClick={() => api.extension.openDesktopApp({ route: DESKTOP_ROUTES.EDIT_ITEM, args: [item.uuid] })}
    >
      <FormattedMessage id="edit" />
    </MenuItem>
  );
});
