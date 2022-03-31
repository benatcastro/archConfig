import { FC } from 'react';
import cx from 'classnames';
import { Button } from '@nord/ui';
import { FormattedMessage } from 'react-intl';

import { IAccount } from '@common/interfaces/account';
import ProfileIcon from '@extension/app/components/ProfileIcon/ProfileIcon';
import { api } from '@extension/app/api';
import history from '@extension/app/utils/history';
import BrowserApi from '@extension/browser/browserApi';
import Menu from '@common/components/Menu/Menu';
import MenuItem from '@common/components/Menu/MenuItem';
import { useMenuState } from '@common/components/Menu/useMenuState';
import { ROUTES } from '@common/constants';
import Icon from '@common/components/Icon';

import * as moreIcon from '@icons/24/more.svg';

import { noOp } from '@common/constants/function';
import useQuery from '@common/hooks/useQuery/useQuery';
import { getLoginStateLabel } from '@common/utils/getLoginStateLabel';
import { ExtensionAction } from '@common/constants/action';
import styles from './AccountButton.module.scss';

const AccountButton: FC<IAccount> = ({ email, uuid, state }) => {
  const { data: emailCurrent } = useQuery(api.extension.getUserEmail);
  const { isOpen, close, toggleOpen } = useMenuState();
  const isActiveUser = email === emailCurrent;

  const handleAccountClick = async () => {
    if (isActiveUser) {
      return;
    }
    await BrowserApi.sendMessage({ type: ExtensionAction.ExtensionSwitchAccount, uuid }).catch(noOp);
    history.push(ROUTES.VAULT);
  };
  const handleLogoutButtonClick = () => {
    api.account.accountLogout(uuid).catch(noOp);
  };
  const handleRemoveButtonClick = () => {
    api.account.accountLock(uuid).catch(noOp);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className={cx(styles['account-button'], isActiveUser && 'cursor-default', 'hover:bg-primary-accent-18 color-primary')}
      onClick={handleAccountClick}
    >
      <ProfileIcon size="32" email={email} />
      <div className={styles['account-button__text-container']}>
        <span className="text-micro truncate max-w-full">{email}</span>
        <p className="text-grey-dark text-left text-nano truncate max-w-full">{getLoginStateLabel(state)}</p>
      </div>
      {!isActiveUser && (
        <Menu
          isOpen={isOpen}
          onClose={close}
          className={styles['account-button__menu']}
          button={
            <Button
              data-testid="account-menu-button"
              className="inline-flex square p-0 rounded-full justify-center items-center bg-primary border-primary-accent-4 hover:border-primary-accent-4"
              size="small"
              variant="outlined"
              onClick={toggleOpen}
            >
              <Icon
                src={moreIcon}
                className="color-primary-accent-6"
                width={24}
                height={24}
              />
            </Button>
          }
        >
          <MenuItem colorClassName="w-full color-red h-28px pl-3 text-left text-micro hover:bg-primary-accent-16" onClick={handleRemoveButtonClick}>
            <FormattedMessage id="remove" />
          </MenuItem>
          <MenuItem colorClassName="w-full color-red h-28px pl-3 text-left text-micro hover:bg-primary-accent-16" onClick={handleLogoutButtonClick}>
            <FormattedMessage id="logOut" />
          </MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default AccountButton;
