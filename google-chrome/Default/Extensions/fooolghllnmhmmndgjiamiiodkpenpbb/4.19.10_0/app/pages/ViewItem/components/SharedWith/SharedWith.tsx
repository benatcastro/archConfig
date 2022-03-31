import { useMemo, FC, ReactChild } from 'react';
import { Link, SVG } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { DESKTOP_ROUTES } from '@extension/common/constants/routes';
import chevronRight from '@icons/24/chevron-right.svg';
import EmailIcon from '@extension/app/pages/ViewItem/components/EmailIcon/EmailIcon';
import { api } from '@extension/app/api';

import './SharedWith.scss';

const MAX_USER_ICONS_TO_SHOW = 4;

export interface ISharedUser {
  email: string;
  owner: boolean;
}

export interface ISharedWithProps {
  sharedUsers?: Array<ISharedUser>;
  uuid: string;
}

const SharedWith: FC<ISharedWithProps> = ({ sharedUsers, uuid }) => {
  const emailIcons = useMemo(() => {
    let icons: Array<ReactChild> = [];

    if (sharedUsers?.length > 0) {
      icons = sharedUsers
        .slice(0, MAX_USER_ICONS_TO_SHOW)
        .map(({ email }, index) => (
          <EmailIcon
            key={email}
            email={email}
            className="email-icon"
            identifier={index}
          />
        ));
    }

    if (sharedUsers?.length > MAX_USER_ICONS_TO_SHOW) {
      icons = [...icons, <EmailIcon className="email-icon" key={icons.length + 1} />];
    }

    return icons.reverse();
  }, [sharedUsers]);

  return sharedUsers?.length > 0 ? (
    <>
      <span className="text-micro text-grey-dark my-2 color-primary-accent-1">
        <FormattedMessage id="sharedWith" />
      </span>
      <Link
        className="shared-with flex flex-row-reverse text-nano mb-2"
        colorClassName="text-white"
        onClick={() => api.extension.openDesktopApp({
          route: DESKTOP_ROUTES.SHARE_ITEM,
          args: [uuid],
        })}
      >

        <span className="shared-with__icon border border-primary-accent-4 hover:border-primary-accent-4 rounded-full color-primary-accent-6 flex items-center justify-center item-image-24px transition-colors duration-250 ease-out">
          <SVG src={chevronRight} noLazy />
        </span>
        {emailIcons}
      </Link>
    </>
  ) : null;
};

export default SharedWith;
