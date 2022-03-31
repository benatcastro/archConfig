import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface IVaultLink extends Omit<NavLinkProps, 'to'> {
  to?: string;
  path?: string;
  search?: string;
}

const VaultLink: FC<IVaultLink> = ({
  to,
  path,
  search = null,
  children,
  ...rest
}) => (
  <NavLink
    {...rest}
    to={location => ({
      pathname: to || path,
      search: search || location.search,
    })}
  >
    {children}
  </NavLink>
);

export default VaultLink;
