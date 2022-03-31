import { useContext, memo, FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Storage, DESKTOP_ROUTES } from '@extension/common/constants';
import StorageApi from '@extension/browser/storageApi';
import * as plusIcon from '@icons/24/plus.svg';
import { Button } from '@nord/ui';
import * as passwordsIcon from '@icons/24/passwords.svg';
import * as secureNotesIcon from '@icons/24/secure-notes.svg';
import * as creditCardIcon from '@icons/24/cc.svg';
import * as personalInfoIcon from '@icons/24/personal-info.svg';
import { ExtensionContext } from '@extension/app/context/ExtensionContext';
import Icon from '@common/components/Icon';
import { api } from '@extension/app/api';
import Menu from '@common/components/Menu/Menu';
import MenuItem from '@common/components/Menu/MenuItem';
import { ItemType } from '@common/constants';
import { useMenuState } from '@common/components/Menu/useMenuState';

import './AddMenu.scss';

const setWebsiteUrl = (url: string) => StorageApi.set({ [Storage.WebsiteUrl]: url });

const menuItems = [
  {
    type: ItemType.Password,
    title: <FormattedMessage id="password" />,
    icon: passwordsIcon,
  },
  {
    type: ItemType.Note,
    title: <FormattedMessage id="secureNote" />,
    icon: secureNotesIcon,
  },
  {
    type: ItemType.CreditCard,
    title: <FormattedMessage id="creditCard" />,
    icon: creditCardIcon,
  },
  {
    type: ItemType.PersonalInfo,
    title: <FormattedMessage id="personalInfo" />,
    icon: personalInfoIcon,
  },
];

interface IAddMenuProps {
  isButtonWithText?: boolean;
}

export const AddMenu: FC<IAddMenuProps> = memo(({ isButtonWithText }) => {
  const { websiteUrl } = useContext(ExtensionContext);
  const { isOpen, close, toggleOpen } = useMenuState();

  return (
    <Menu
      isOpen={isOpen}
      onClose={close}
      button={
        isButtonWithText ? (
          <Button
            size="small"
            variant="outlined"
            className="block rounded-full -letter-spacing-014px w-full"
            onClick={toggleOpen}
          >
            <FormattedMessage id="addItem" />
          </Button>
        ) : (
          <button
            type="button"
            className="add-item-button bg-primary-accent-17"
            onClick={toggleOpen}
          >
            <Icon
              src={plusIcon}
              className="color-primary-accent-12"
              width={24}
              height={24}
            />
          </button>
        )
      }
    >
      {menuItems.map(({ type, title, icon }) => (
        <MenuItem
          key={type}
          onClick={() => {
            setWebsiteUrl(websiteUrl);
            api.extension.openDesktopApp({
              route: DESKTOP_ROUTES.ADD_ITEM,
              args: [type],
              url: websiteUrl,
            });
          }}
        >
          <span className="flex flex-1 items-center">
            <Icon
              src={icon}
              className="mr-3 icon-primary"
              width={24}
              height={24}
            />
            {title}
          </span>
        </MenuItem>
      ))}
    </Menu>
  );
});
