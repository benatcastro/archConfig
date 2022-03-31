import { FC, ReactNode, useContext } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Link, SVG } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from '@extension/common/constants';
import allItemsIcon from '@icons/24/all-items.svg';
import passwordsIcon from '@icons/24/passwords.svg';
import secureNotesIcon from '@icons/24/secure-notes.svg';
import creditCardIcon from '@icons/24/cc.svg';
import personalInfoIcon from '@icons/24/personal-info.svg';
import sharedItemsIcon from '@icons/24/shared-items.svg';
import trashIcon from '@icons/24/trash.svg';
import { PendingSharesContext } from '@extension/app/context';
import { VaultType } from '@common/constants';

interface ISidebarItem {
  icon: ReactNode;
  link?: string;
  onClick?: () => void;
  text: ReactNode;
  isActive: NavLinkProps['isActive'];
  showPending?: boolean;
}

const sidebarItems: Array<ISidebarItem> = [
  {
    icon: <SVG className="mr-3" src={allItemsIcon} noLazy />,
    link: ROUTES.VAULT,
    text: <FormattedMessage id="allItems" />,
    isActive: (_, location) => location.pathname.startsWith(ROUTES.VAULT) &&
      !location.search.includes('type=') &&
      !location.search.includes('folder='),
  },
  {
    icon: <SVG className="mr-3" src={passwordsIcon} noLazy />,
    link: ROUTES.VAULT_TYPE(VaultType.Password),
    text: <FormattedMessage id="passwords" />,
    isActive: (_, location) => (
      location.pathname.startsWith(ROUTES.VAULT) &&
      location.search.includes(`type=${VaultType.Password}`)
    ),
  },
  {
    icon: <SVG className="mr-3" src={secureNotesIcon} noLazy />,
    link: ROUTES.VAULT_TYPE(VaultType.Note),
    text: <FormattedMessage id="secureNotes" />,
    isActive: (_, location) => (
      location.pathname.startsWith(ROUTES.VAULT) &&
      location.search.includes(`type=${VaultType.Note}`)
    ),
  },
  {
    icon: <SVG className="mr-3" src={creditCardIcon} noLazy />,
    link: ROUTES.VAULT_TYPE(VaultType.CreditCard),
    text: <FormattedMessage id="creditCards" />,
    isActive: (_, location) => (
      location.pathname.startsWith(ROUTES.VAULT) &&
      location.search.includes(`type=${VaultType.CreditCard}`)
    ),
  },
  {
    icon: <SVG className="mr-3" src={personalInfoIcon} noLazy />,
    link: ROUTES.VAULT_TYPE(VaultType.PersonalInfo),
    text: <FormattedMessage id="personalInfo" />,
    isActive: (_, location) => (
      location.pathname.startsWith(ROUTES.VAULT) &&
      location.search.includes(`type=${VaultType.PersonalInfo}`)
    ),
  },
  {
    icon: <SVG className="mr-3" src={sharedItemsIcon} noLazy />,
    link: ROUTES.VAULT_TYPE(VaultType.Shared),
    text: <FormattedMessage id="sharedItems" />,
    showPending: true,
    isActive: (_, location) => (
      location.pathname.startsWith(ROUTES.VAULT) &&
      location.search.includes(`type=${VaultType.Shared}`)
    ),
  },
  {
    icon: <SVG className="mr-3" src={trashIcon} noLazy />,
    link: ROUTES.TRASH,
    text: <FormattedMessage id="trash" />,
    isActive: (_, location) => location.pathname.startsWith(ROUTES.TRASH),
  },
];

interface IItemLinksProps {
  onMenuClose: () => void;
}

export const ItemLinks: FC<IItemLinksProps> = ({ onMenuClose }) => {
  const allShares = useContext(PendingSharesContext);
  return (
    <>
      <div className="sidebar__group-label px-5 text-grey-dark">
        <FormattedMessage id="categories" />
      </div>
      {sidebarItems.map(({
        icon, link, isActive, text, onClick, showPending,
      }, index) => (
        <Link
          key={link || index}
          onClick={() => {
            onClick?.();
            onMenuClose();
          }}
          component={link ? NavLink : 'a'}
          className="pl-6 pr-5"
          colorClassName="sidebar-category"
          {...(link ? {
            to: link,
            activeClassName: 'sidebar-category--active',
            isActive,
          } : {})}
        >
          <span className="truncate flex items-center">
            {icon}
            {text}
          </span>
          {showPending && allShares && allShares.length > 0 && (
            <span className="badge bg-red ml-2 text-white">{allShares.length}</span>
          )}
        </Link>
      ))}
    </>
  );
};
