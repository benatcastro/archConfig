import { useContext, ComponentType, FC, useEffect, useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '@extension/common/constants';
import { isSafari } from '@extension/browser/safariApp';
import { RouteProps } from 'react-router';
import { AuthContext } from '@extension/app/context';
import LayoutPrivate from '@extension/app/layouts/LayoutPrivate';
import { api } from '@extension/app/api';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import { ExtensionContext } from '@extension/app/context/ExtensionContext';
import { PasswordPolicyContextProvider } from '../context/PasswordPolicyContext';
import { setLastPage } from './lastPage';

interface IPrivateRouteProps extends RouteProps {
  component: ComponentType<RouteProps>;
  hideHeader?: boolean;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  hideHeader,
  ...rest
}) => {
  const { authState } = useContext(AuthContext);
  const { isPopup } = useContext(ExtensionContext);
  const isUnauthenticated = useMemo(() => authState !== AuthState.Authenticated, [authState]);
  const isPopupOrSafari = useMemo(() => isPopup || isSafari, [isPopup]);

  useEffect(() => {
    if (isUnauthenticated) {
      setLastPage(window.location.hash.substring(1));
    }
  }, [isUnauthenticated]);

  useEffect(() => {
    if (!isPopupOrSafari) {
      api.extension.openDesktopApp();
      api.extension.closeTab();
    }
  }, [isPopupOrSafari]);

  if (isUnauthenticated) {
    return <Redirect to={ROUTES.VALIDATE_MASTER} />;
  }

  if (!isPopupOrSafari) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <PasswordPolicyContextProvider>
          <LayoutPrivate hideHeader={hideHeader}>
            <Component {...props} />
          </LayoutPrivate>
        </PasswordPolicyContextProvider>
      )}
    />
  );
};

export default PrivateRoute;
