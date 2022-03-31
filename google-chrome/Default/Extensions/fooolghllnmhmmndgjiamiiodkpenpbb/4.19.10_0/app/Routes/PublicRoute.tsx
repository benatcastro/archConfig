import { memo, useContext, FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { ROUTES } from '@extension/common/constants';
import { AuthContext } from '@extension/app/context';
import LayoutPublic from '@extension/app/layouts/LayoutPublic';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import { getLastPage, setLastPage } from './lastPage';

interface IMemoPublicRoute extends RouteProps {
  authState: AuthState;
}

const MemoPublicRoute: FC<IMemoPublicRoute> = memo(({ children, authState, path }) => {
  if (authState === AuthState.Authenticated) {
    const page = getLastPage() || ROUTES.VAULT;
    setLastPage(null);
    return <Redirect to={page} />;
  }

  if (authState === AuthState.MasterValidate && path !== ROUTES.VALIDATE_MASTER) {
    return <Redirect to={ROUTES.VALIDATE_MASTER} />;
  }

  return <LayoutPublic>{children}</LayoutPublic>;
});

const PublicRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ match, ...props }) => (
        <MemoPublicRoute path={match.path} authState={authState}>
          <Component match={match} {...props} />
        </MemoPublicRoute>
      )}
    />
  );
};

export default PublicRoute;
