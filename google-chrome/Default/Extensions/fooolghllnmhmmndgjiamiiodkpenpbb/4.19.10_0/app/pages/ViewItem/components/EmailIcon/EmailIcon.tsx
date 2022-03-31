import { memo, FC } from 'react';
import cx from 'classnames';
import './EmailIcon.scss';
import avatarIcon from '@icons/24/avatar.svg';
import avatarPlusIcon from '@icons/24/avatar-plus.svg';
import { SVG } from '@nord/ui';

export interface IEmailIconProps {
  email?: string;
  identifier?: number;
  className?: string;
}

const EmailIcon: FC<IEmailIconProps> = ({ email = '', className, identifier = 0, ...rest }) => {
  const avatar = email ? (
    <SVG src={avatarIcon} className={cx('item-image-24px block', `email-icon__avatar-${identifier}`)} noLazy />
  ) : (
    <SVG src={avatarPlusIcon} className="item-image-24px text-white block email-icon__avatar-plus" noLazy />
  );

  return (
    <span className={cx('relative flex align-center rounded-full mr-2', className)} {...rest}>
      {avatar}
      <span className="absolute inset-0 capitalize text-center select-none flex items-center justify-center text-white email-icon__text text-nano">
        {email.substring(0, 2)}
      </span>
    </span>
  );
};

export default memo(EmailIcon);
