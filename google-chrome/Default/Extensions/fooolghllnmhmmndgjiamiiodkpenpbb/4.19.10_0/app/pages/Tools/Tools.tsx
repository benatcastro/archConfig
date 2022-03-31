import { FC, useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DESKTOP_ROUTES, ROUTES } from '@extension/common/constants/routes';
import { getOs } from '@common/services/getOs';
import ToolsItem from '@extension/app/pages/Tools/components/ToolsItem/ToolsItem';
import AuthContext from '@extension/app/context/AuthContext';
import { api } from '@extension/app/api';
import history from '@extension/app/utils/history';
import { PageHeader } from '@extension/app/pages/components/PageHeader/PageHeader';
import { RemoteURL } from '@common/constants/remoteURL';
import { openInNewTab } from '@extension/common/utils';

const Tools: FC = () => {
  const { formatMessage } = useIntl();
  const { subscriptionData } = useContext(AuthContext);
  const hasPremiumPrivileges = !!(subscriptionData?.isPremium || subscriptionData?.isBusiness);
  const platform = getOs()?.toLowerCase();

  return (
    <>
      <PageHeader title={<FormattedMessage id="tools" />} />

      <div className="flex-1 p-4 pt-2 bg-primary">
        <ToolsItem
          title={formatMessage({ id: 'passwordGenerator' })}
          description={formatMessage({ id: 'passwordGeneratorDescription' })}
          iconPath="icons/34/password-generator.svg"
          onClick={() => history.push(ROUTES.GENERATE_PASSWORD)}
        />

        <ToolsItem
          title={formatMessage({ id: 'passwordHealth' })}
          description={formatMessage({ id: 'passwordHealthDescription' })}
          iconPath="icons/34/password-health.svg"
          isPremiumShown={!hasPremiumPrivileges}
          onClick={() => {
            api.extension.openDesktopApp({
              route: DESKTOP_ROUTES.PASSWORD_HEALTH,
            });
          }}
        />

        <ToolsItem
          title={formatMessage({ id: 'breachScanner' })}
          description={formatMessage({ id: 'breachScannerDescription' })}
          iconPath="icons/34/breach-scanner.svg"
          isPremiumShown={!hasPremiumPrivileges}
          onClick={() => {
            api.extension.openDesktopApp({
              route: DESKTOP_ROUTES.DATA_BREACH,
            });
          }}
        />
        <div className="font-bold my-4 color-primary"><FormattedMessage id="tryOtherNordApps" /></div>

        <ToolsItem
          title="Nord VPN"
          description={formatMessage({ id: 'nordVpnDescription' })}
          iconPath="icons/32/nord-vpn.svg"
          onClick={() => {
            if (platform) {
              openInNewTab(RemoteURL.NordVPN);
            }
          }}
        />

        <ToolsItem
          title="Nord Locker"
          description={formatMessage({ id: 'nordLockerDescription' })}
          iconPath="icons/32/nord-locker.svg"
          onClick={() => {
            if (platform) {
              openInNewTab(RemoteURL.NordLocker);
            }
          }}
        />
      </div>
    </>
  );
};
export default Tools;
