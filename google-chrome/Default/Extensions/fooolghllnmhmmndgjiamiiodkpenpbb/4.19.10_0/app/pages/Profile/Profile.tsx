import { FC } from 'react';
import cx from 'classnames';
import { Button } from '@nord/ui';
import { FormattedMessage } from 'react-intl';

import { getPlanName } from '@common/utils/getPlanName/getPlanName';
import { PageHeader } from '@extension/app/pages/components/PageHeader/PageHeader';
import AccountSwitch from '@extension/app/pages/Profile/components/AccountSwitch/AccountSwitch';
import ProfileIcon from '@extension/app/components/ProfileIcon/ProfileIcon';
import { useAuthContext } from '@extension/app/context/AuthContext';
import { lock, logout, lockApp } from '@extension/app/api/authApi';
import { api } from '@extension/app/api';
import { useOrganizationContext } from '@extension/app/context/OrganizationContext';

import useQuery from '@common/hooks/useQuery/useQuery';
import { FeatureFlag } from '@common/constants/featureFlag';
import { getIsFeatureEnabled } from '@extension/app/utils/getIsFeatureEnabled';
import BrowserApi from '@extension/browser/browserApi';

import { ExtensionAction } from '@common/constants/action';
import ErrorBlock from '@common/components/ErrorBlock/ErrorBlock';
import styles from './Profile.module.scss';

const Profile: FC = () => {
  const { subscriptionData } = useAuthContext();
  const { organizationData } = useOrganizationContext();
  const { data: email } = useQuery(api.extension.getUserEmail);
  const { data: userAccounts, errorMessage, isLoading } = useQuery(api.account.getAccountList);

  const handleLock = async () => {
    const isSwitchAccountEnabled = await getIsFeatureEnabled(FeatureFlag.SwitchAccount);
    if (isSwitchAccountEnabled) {
      lockApp();
    } else {
      lock();
    }
  };

  const handleLogout = async () => {
    const isSwitchAccountEnabled = await getIsFeatureEnabled(FeatureFlag.SwitchAccount);
    if (isSwitchAccountEnabled) {
      BrowserApi.sendMessage({ type: ExtensionAction.ExtensionLogoutAll });
    } else {
      logout();
    }
  };

  return (
    <>
      <PageHeader />
      <div className="flex flex-col">
        <div className="flex flex-col items-center mx-4">
          <ProfileIcon
            size="64"
            email={email}
            className="mb-3"
          />
          <span className="color-primary mb-1">{email}</span>
          <span className="color-grey-dark text-micro mb-4">
            {getPlanName({
              isPremium: subscriptionData?.isPremium,
              organizationTier: organizationData?.organization?.tier,
            })}
          </span>
          <Button
            size="small"
            variant="outlined"
            className="rounded-full mb-3 w-full"
            onClick={handleLock}
          >
            <FormattedMessage id="lockApp" />
          </Button>
          <Button
            size="small"
            variant="outlined"
            className={cx(styles['profile__logout-button'], 'rounded-full mb-6 w-full color-red capitalize')}
            onClick={handleLogout}
          >
            {!isLoading && userAccounts?.length > 1 ?
              <FormattedMessage id="logOutAll" /> :
              <FormattedMessage id="logOut" />
            }
          </Button>
        </div>

        <div className="h-px bg-primary-accent-18 mb-4" />

        {!errorMessage && !isLoading && (
          <AccountSwitch accounts={userAccounts} />
        )}
        <ErrorBlock error={errorMessage} />
      </div>
    </>
  );
};

export default Profile;
