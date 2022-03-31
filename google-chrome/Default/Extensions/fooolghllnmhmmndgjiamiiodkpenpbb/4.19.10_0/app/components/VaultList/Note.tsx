import { FC, memo } from 'react';
import { Image, Text } from '@nord/ui';
import TrashItemActions from '@extension/app/components/VaultList/TrashItemActions';
import { IItemTypeProps } from '@extension/app/components/VaultList/VaultList';
import { INoteItem } from '@common/contracts/contracts';
import ItemMenu from './ItemMenu/ItemMenu';

const Note: FC<IItemTypeProps<INoteItem>> = ({ item, isTrash }) => (
  <>
    <div className="w-third flex flex-1 items-center overflow-hidden">
      <Image
        className="item-image-32px my-1"
        src="icons/32/secure-note.svg"
        alt={item.title}
        noLazy
      />
      <div className="flex-1 min-w-0 px-4 overflow-hidden">
        <Text className="truncate color-primary" variant="body2">
          {item.title}
        </Text>
      </div>
    </div>
    <div className="vault-item-actions">
      {isTrash ? <TrashItemActions item={item} /> : <ItemMenu item={item} />}
    </div>
  </>
);

export default memo(Note);
