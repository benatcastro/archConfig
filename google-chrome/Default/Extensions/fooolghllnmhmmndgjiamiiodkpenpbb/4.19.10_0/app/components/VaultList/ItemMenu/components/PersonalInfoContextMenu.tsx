import { FC, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { duplicatePersonalInfo } from '@extension/app/api/VaultApi';
import { isLimitedAccess } from '@extension/app/utils/itemAccessUtils/itemAccessUtils';
import { IPersonalInfoItem } from '@common/contracts/contracts';
import MenuItem from '@common/components/Menu/MenuItem';
import { CommonContextMenu } from './CommonContextMenu';

interface IPersonalInfoItemContextMenu {
  item: IPersonalInfoItem;
}

const PersonalInfoContextMenu: FC<IPersonalInfoItemContextMenu> = ({ item }) => (
  <>
    <MenuItem onClick={() => duplicatePersonalInfo(item)}>
      <FormattedMessage id="duplicate" />
    </MenuItem>
    <div className="border-t border-primary-accent-1 my-2" />
    <CommonContextMenu item={item} isShareHidden={isLimitedAccess(item.acl)} />
  </>
);

export default memo(PersonalInfoContextMenu);
