import { FC } from 'react';
import { Image } from '@nord/ui';
import { isCreditCard, isNote, isPassword, isPersonalInfo } from '@common/utils/itemTypeGuards';
import { IItem } from '@common/interfaces';
import { ItemType } from '@common/constants';
import CreditCardIcon from '@common/components/CreditCardIcon/CreditCardIcon';
import PasswordIcon from '@common/components/PasswordIcon/PasswordIcon';
import { logError } from '@extension/common/utils';

export const ItemIcons: FC<Record<'item', IItem>> = ({ item }) => {
  if (isPassword(item)) {
    return (
      <PasswordIcon
        logError={logError}
        title={item.title}
        url={item.url}
        className="rounded-image-8px item-image-32px"
        uuid={item.uuid}
      />
    );
  }

  if (isNote(item)) {
    return <Image className="item-image-32px" src="icons/32/secure-note.svg" />;
  }

  if (isCreditCard(item)) {
    return <CreditCardIcon className="rounded-image-8px item-image-32px" type={item.card_type} />;
  }

  if (isPersonalInfo(item)) {
    return <Image className="item-image-32px" src="icons/32/personal-info.svg" />;
  }

  if (item.type === ItemType.Unknown) {
    return <PasswordIcon logError={logError} title="" className="item-image-32px" />;
  }

  return null;
};
