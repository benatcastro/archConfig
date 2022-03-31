import { FC, memo, useState } from 'react';
import cx from 'classnames';
import { Link, SVG } from '@nord/ui';
import arrowLeftIcon from '@icons/24/arrow-left.svg';
import { ForceCrashButton } from '@common/components/ForceCrashButton/ForceCrashButton';
import { FeatureFlag } from '@common/constants/featureFlag';
import { getIsFeatureEnabled } from '@extension/app/utils/getIsFeatureEnabled';
import { ItemLinks } from './components/ItemLinks';
import { FolderLinks } from './components/FolderLinks/FolderLinks';

import './Sidebar.scss';

interface ISidebarProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({ isMenuOpen, onMenuClose }) => {
  const [isCrashButtonEnabled, setIsCrashButtonEnabled] = useState(false);

  (async () => {
    const result = await getIsFeatureEnabled(FeatureFlag.ForceCrashButton);
    setIsCrashButtonEnabled(result);
  })();

  return (
    <aside
      className={cx(
        'sidebar bg-grey-darkest text-white',
        isMenuOpen && 'sidebar--open',
      )}
    >
      <Link
        onClick={onMenuClose}
        className="sidebar-category px-4 mt-4 mb-1 flex-shrink-0"
      >
        <SVG src={arrowLeftIcon} noLazy />
        {isCrashButtonEnabled && <ForceCrashButton />}
      </Link>

      <div className="overflow-y-auto">
        <ItemLinks onMenuClose={onMenuClose} />
        <FolderLinks onMenuClose={onMenuClose} />
      </div>
    </aside>
  );
};

export default memo(Sidebar);
