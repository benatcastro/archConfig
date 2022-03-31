import { FC, memo } from 'react';
import { Text } from '@nord/ui';
import { formatCardNumber } from '@extension/common/utils';
import TrashItemActions from '@extension/app/components/VaultList/TrashItemActions';
import { IItemTypeProps } from '@extension/app/components/VaultList/VaultList';
import { ICreditCardItem } from '@common/contracts/contracts';
import CreditCardIcon from '@common/components/CreditCardIcon/CreditCardIcon';
import { getCardHiddenSymbolsAndNumbers } from '@extension/common/utils/creditCard';
import ItemMenu from './ItemMenu/ItemMenu';

const CreditCard: FC<IItemTypeProps<ICreditCardItem>> = ({ item, isTrash }) => {
  const stylizedCardNumber = formatCardNumber(item.card_number, item.card_type);
  const { hiddenSymbols, numbers } = getCardHiddenSymbolsAndNumbers(stylizedCardNumber || '');

  return (
    <>
      <div className="w-third flex flex-1 items-center overflow-hidden">
        <CreditCardIcon className="rounded-image-8px item-image-32px my-1" type={item.card_type} />
        <div className="flex-1 min-w-0 px-4 overflow-hidden">
          <Text className="truncate color-primary" variant="body2">
            {item.title}
          </Text>
          <Text className="truncate color-primary-accent-1" variant="caption">
            <span className="font-roboto-mono">{hiddenSymbols}</span>
            <span>{numbers}</span>
          </Text>
        </div>
      </div>
      <div className="vault-item-actions">
        {isTrash ? <TrashItemActions item={item} /> : <ItemMenu item={item} />}
      </div>
    </>
  );
};

export default memo(CreditCard);
