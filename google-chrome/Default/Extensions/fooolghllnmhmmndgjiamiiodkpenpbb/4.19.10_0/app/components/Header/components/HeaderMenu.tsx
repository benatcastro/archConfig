import { FC, useContext, useEffect, useState } from 'react';
import { Link, SVG } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import { DESKTOP_ROUTES, ROUTES } from '@extension/common/constants';
import { api } from '@extension/app/api';
import { VaultContext } from '@extension/app/context';
import Tooltip from '@common/components/Tooltip/Tooltip';
import useSearchParam from '@extension/app/hooks/useSearchParam';
import ProfileIcon from '@extension/app/components/ProfileIcon/ProfileIcon';
import history from '@extension/app/utils/history';
import { TFolderItem } from '@common/contracts/contracts';
import { VaultType } from '@common/constants';
import { UserAction } from '@common/constants/userAction';
import { FeatureFlag } from '@common/constants/featureFlag';
import { OpenDirection } from '@common/components/Tooltip/constants/openDirection';
import { HeaderText } from '@extension/app/components/Header/components/HeaderText/HeaderText';
import { getIsFeatureEnabled } from '@extension/app/utils/getIsFeatureEnabled';

import menuIcon from '@icons/24/menu.svg';
import settingsIcon from '@icons/24/settings-ext.svg';
import toolsIcon from '@icons/24/tools.svg';
import lockIcon from '@icons/24/lock-ext.svg';
import useQuery from '@common/hooks/useQuery/useQuery';

interface IHeaderMenuProps {
  onMenuOpen: () => void;
}

const HeaderMenu: FC<IHeaderMenuProps> = ({ onMenuOpen }) => {
  const [isSwitchAccountEnabled, setIsSwitchAccountEnabled] = useState(false);
  const { data: email } = useQuery(api.extension.getUserEmail);
  const vaultType = useSearchParam('type');
  const isTrash = !!useRouteMatch(ROUTES.TRASH);
  const folderId = useSearchParam('folder');
  const { vaultFolders } = useContext(VaultContext);
  const folderTitle = vaultFolders.find((folder: TFolderItem) => folder.uuid === folderId)?.title;

  const onClickSettings = () => {
    api.extension.openDesktopApp({ route: DESKTOP_ROUTES.SETTINGS });
    window.close();
  };

  const onClickTools = () => {
    history.push(ROUTES.TOOLS);
  };

  const handleProfileIconClick = () => {
    api.action.save(UserAction.AccountExtension);
    history.push(ROUTES.PROFILE);
  };

  useEffect(() => {
    getIsFeatureEnabled(FeatureFlag.SwitchAccount).then(setIsSwitchAccountEnabled);
  }, []);

  return (
    <div className="header__menu w-full flex items-center">
      <Link
        onClick={onMenuOpen}
        className="inline-flex menu-button"
        colorClassName="color-primary-accent-1 hover:color-primary-accent-13"
      >
        <SVG src={menuIcon} noLazy />
      </Link>
      <h3 className="color-primary text-lead font-bolder truncate">
        <HeaderText vaultType={isTrash ? VaultType.Trash : vaultType} folderTitle={folderTitle} />
      </h3>
      <div className="flex ml-auto">
        <Tooltip id="settings" showOnHover>
          <FormattedMessage id="settings" />
        </Tooltip>
        <Link
          onClick={onClickSettings}
          className="inline-flex mr-2"
          colorClassName="color-primary-accent-1 hover:color-primary-accent-13"
          data-tip-settings
        >
          <SVG src={settingsIcon} noLazy />
        </Link>
        <Tooltip id="tools" showOnHover>
          <FormattedMessage id="tools" />
        </Tooltip>
        <Link
          onClick={onClickTools}
          className="inline-flex"
          colorClassName="color-primary-accent-1 hover:color-primary-accent-13"
          data-tip-tools
        >
          <SVG src={toolsIcon} noLazy />
        </Link>
        {isSwitchAccountEnabled ? (
          <>
            <Tooltip id="profile" showOnHover direction={OpenDirection.BottomRight}>
              {email}
            </Tooltip>
            <button
              data-testid="header-menu-profile-icon"
              type="button"
              onClick={handleProfileIconClick}
              className="relative inline-flex ml-2 justify-center"
              data-tip-profile
            >
              <ProfileIcon size="24" email={email} />
            </button>
          </>
        ) : (
          <>
            <Tooltip id="lock" showOnHover>
              <FormattedMessage id="lock" />
            </Tooltip>

            <Link
              data-testid="header-menu-lock"
              onClick={api.user.lock}
              className="inline-flex ml-2"
              colorClassName="color-primary-accent-1 hover:color-primary-accent-13"
              data-tip-lock
            >
              <SVG src={lockIcon} noLazy />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
