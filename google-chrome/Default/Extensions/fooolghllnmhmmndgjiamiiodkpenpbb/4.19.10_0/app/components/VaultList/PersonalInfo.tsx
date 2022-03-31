import { FC, memo } from 'react';
import { Image, Text } from '@nord/ui';
import { IPersonalInfoItem } from '@common/contracts/contracts';
import TrashItemActions from '@extension/app/components/VaultList/TrashItemActions';
import { IItemTypeProps } from '@extension/app/components/VaultList/VaultList';
import ItemMenu from './ItemMenu/ItemMenu';

const PersonalInfo: FC<IItemTypeProps<IPersonalInfoItem>> = ({ item, isTrash }) => (
  <>
    <div className="w-third flex flex-1 items-center overflow-hidden">
      <Image
        className="item-image-32px my-1"
        src="icons/32/personal-info.svg"
        alt={item.title}
        noLazy
      />
      <div className="flex-1 min-w-0 px-4 overflow-hidden">
        <Text className="truncate color-primary" variant="body2">
          {item.title}
        </Text>
        <Text className="truncate color-primary-accent-1" variant="caption">
          {[item.name, item.address1].filter(Boolean).join(' · ')}
        </Text>
      </div>
    </div>
    <div className="vault-item-actions">
      {isTrash ? <TrashItemActions item={item} /> : <ItemMenu item={item} />}
    </div>
  </>
);

export default memo(PersonalInfo);
