import { useContext, FC } from 'react';
import { Link, SVG } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { DESKTOP_ROUTES } from '@extension/common/constants';
import addFolderIcon from '@icons/24/add-folder.svg';
import Tooltip from '@common/components/Tooltip/Tooltip';
import { VaultContext } from '@extension/app/context';
import { VaultLink } from '@extension/app/components';
import { api } from '@extension/app/api';
import { IItem } from '@common/interfaces';
import { TFolderItem } from '@common/contracts/contracts';
import { ItemType } from '@common/constants';
import { FolderLink } from './components/FolderLink';

// TODO: remove this when vaultcontext is converted to TS
interface IVaultContext {
  vaultItems: Array<IItem>;
  vaultFolders: Array<TFolderItem>;
  error: string;
  isLoading: boolean;
}

interface IFolderLinksProps {
  onMenuClose: () => void;
}

export const FolderLinks: FC<IFolderLinksProps> = ({ onMenuClose }) => {
  const { vaultFolders, isLoading } = useContext<IVaultContext>(VaultContext);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className="sidebar__group-label px-5 mt-3 text-grey-dark">
        <FormattedMessage id="folders" />
        {vaultFolders.length > 0 && (
          <>
            <Tooltip id="add-folder" showOnHover>
              <FormattedMessage id="addNewFolderTooltip" />
            </Tooltip>
            <Link
              className="sidebar-folder block"
              component={VaultLink}
              data-tip-add-folder
              onClick={() => api.extension.openDesktopApp({
                route: DESKTOP_ROUTES.ADD_ITEM,
                args: [ItemType.Folder],
              })}
            >
              <SVG className="icon-hover-white" src={addFolderIcon} />
            </Link>
          </>
        )}
      </div>
      {vaultFolders.length ? (
        vaultFolders.map(folder => (
          <FolderLink
            key={folder.uuid}
            folder={folder}
            onMenuClose={onMenuClose}
          />
        ))
      ) : (
        <Link
          className="pl-6 pr-5"
          colorClassName="sidebar-category"
          component={VaultLink}
          data-testid="add_to_folder"
          onClick={() => api.extension.openDesktopApp({
            route: DESKTOP_ROUTES.ADD_ITEM,
            args: [ItemType.Folder],
          })}
        >
          <span className="truncate flex items-center">
            <SVG className="mr-3" src={addFolderIcon} />
            <FormattedMessage id="addNewFolder" />
          </span>
        </Link>
      )}
    </>
  );
};
