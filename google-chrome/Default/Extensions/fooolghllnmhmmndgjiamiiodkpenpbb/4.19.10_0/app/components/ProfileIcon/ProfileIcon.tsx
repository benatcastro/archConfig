import { FC, useMemo } from 'react';
import cx from 'classnames';
import Icon from '@common/components/Icon';
import { getIconColor } from '@common/utils/getIconColor';
import * as profileIcon24 from '@icons/24/profile.svg';
import * as profileIcon32 from '@icons/32/profile.svg';
import * as profileIcon64 from '@icons/64/profile.svg';

import styles from './ProfileIcon.module.scss';

export interface IProfileIconProps {
  size: '24' | '32' | '64';
  email: string;
  className?: string;
}

const ProfileIcon: FC<IProfileIconProps> = ({ email, size, className }) => {
  const iconColor = getIconColor(email);
  const profileIconUrl = useMemo(() => {
    switch (size) {
      case '24':
        return profileIcon24;
      case '32':
        return profileIcon32;
      case '64':
        return profileIcon64;
      default:
        return profileIcon24;
    }
  }, [size]);

  return (
    <div
      className={cx(
        styles['email-icon'],
        'relative flex align-center rounded-full',
        `item-image-${size}px`,
        className,
      )}
    >
      <Icon
        src={profileIconUrl}
        style={{ fill: iconColor }}
        className={cx(
          styles['email-icon__svg'],
          'block',
        )}
        height={+size}
        width={+size}
      />
      <span className={cx(
        styles['email-icon__text'],
        'absolute inset-0 capitalize text-center select-none flex items-center justify-center text-white')}
      >
        {email?.substring(0, 2)}
      </span>
    </div>
  );
};

export default ProfileIcon;
