import { FC, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { getSecret } from '@extension/app/api/VaultApi';
import { isLimitedAccess } from '@extension/app/utils/itemAccessUtils/itemAccessUtils';
import { ICreditCardItem } from '@common/contracts/contracts';
import MenuItem from '@common/components/Menu/MenuItem';
import { copyWithFeedback } from '@extension/app/components/VaultList/VaultListUtils';
import useDebouncedCopyActionLogger from '@common/hooks/useDebouncedCopyActionLogger/useDebouncedCopyActionLogger';
import { api } from '@extension/app/api';
import { CommonContextMenu } from './CommonContextMenu';

interface ICreditCardContextMenu {
  item: ICreditCardItem;
}

const CreditCardContextMenu: FC<ICreditCardContextMenu> = ({ item }) => {
  const isAccessLimited = isLimitedAccess(item.acl);

  const logCopyAction = useDebouncedCopyActionLogger(api.action, item.uuid, true);

  const copyCardNumber = async () => {
    logCopyAction();
    const secret = await getSecret(item.uuid);
    copyWithFeedback(secret.card_number, <FormattedMessage id="creditCard" />);
  };

  const copyCVC = async () => {
    logCopyAction();
    const secret = await getSecret(item.uuid);
    copyWithFeedback(secret.cvc, <FormattedMessage id="cvvLabel" />);
  };

  const copyCardHolderName = async () => {
    logCopyAction();
    copyWithFeedback(item.cardholder_name, <FormattedMessage id="cardholderName" />);
  };

  return (
    <>
      {item.cardholder_name && (
        <MenuItem onClick={copyCardHolderName}>
          <FormattedMessage id="copyCardholderName" />
        </MenuItem>
      )}
      {item.card_number && (
        <MenuItem onClick={copyCardNumber}>
          <FormattedMessage id="copyCardNumber" />
        </MenuItem>
      )}
      {item.cvc === '1' && !isAccessLimited && (
        <MenuItem onClick={copyCVC}>
          <FormattedMessage id="copyCvvCvc" />
        </MenuItem>
      )}
      {(item.cardholder_name || item.card_number || item.cvc === '1') && (
        <div className="border-t border-primary-accent-1 my-2" />
      )}
      <CommonContextMenu
        item={item}
        isShareHidden={isLimitedAccess(item.acl)}
      />
    </>
  );
};

export default memo(CreditCardContextMenu);
