import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';

import Icon from '@common/components/Icon';
import AccountButton from '@extension/app/pages/Profile/components/AccountSwitch/AccountButton';
import { IAccount } from '@common/interfaces/account';
import { MAX_ACCOUNTS_ALLOWED } from '@common/constants';
import { api } from '@extension/app/api';
import { DESKTOP_ROUTES } from '@extension/common/constants';
import { useAppTheme } from '@extension/app/hooks/useAppTheme';
import * as addAccountDark from '@icons/32/add-account-dark.svg';
import * as addAccountLight from '@icons/32/add-account-light.svg';

import styles from './AccountSwitch.module.scss';

interface IAccountSwitchProps {
  accounts: Array<IAccount>;
}

const AccountSwitch: FC<IAccountSwitchProps> = ({ accounts }) => {
  const { isDarkTheme } = useAppTheme();
  const handleAddNewAccount = () => {
    api.extension.openDesktopApp({ route: DESKTOP_ROUTES.ADD_ACCOUNT });
  };

  return (
    <div className="mb-4">
      <span className="select-none color-grey-dark text-micro ml-4 mb-1"><FormattedMessage id="switchAccount" /></span>
      <div className="overflow-y-auto">
        {accounts.map(account => (
          <AccountButton
            key={account.uuid}
            {...account}
          />
        ))}
        {accounts.length < MAX_ACCOUNTS_ALLOWED && (
          <button
            type="button"
            className={cx(styles['account-switch__add-button'], 'hover:bg-primary-accent-18 color-primary')}
            onClick={handleAddNewAccount}
          >
            <Icon
              src={isDarkTheme ? addAccountDark : addAccountLight}
              className={isDarkTheme ? styles['account-switch__svg--dark'] : styles['account-switch__svg--light']}
              width={32}
              height={32}
            />
            <span className="text-micro ml-4"><FormattedMessage id="addAnotherAccount" /></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountSwitch;
