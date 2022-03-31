import { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '@extension/common/constants';
import PrivateRoute from '@extension/app/Routes/PrivateRoute';
import PublicRoute from '@extension/app/Routes/PublicRoute';
import ValidateMasterPassword from '@extension/app/pages/ValidateMasterPassword';
import Vault from '@extension/app/pages/Vault';
import PasswordGenerator from '@extension/app/pages/PasswordGenerator/PasswordGenerator';
import Tools from '@extension/app/pages/Tools/Tools';
import Trash from '@extension/app/pages/Trash/Trash';
import Profile from '@extension/app/pages/Profile/Profile';

const Routes: FC = () => (
  <Switch>
    <PublicRoute exact path={ROUTES.VALIDATE_MASTER} component={ValidateMasterPassword} />
    <PrivateRoute path={ROUTES.VAULT} component={Vault} />
    <PrivateRoute path={ROUTES.GENERATE_PASSWORD} component={PasswordGenerator} hideHeader />
    <PrivateRoute path={ROUTES.TOOLS} component={Tools} hideHeader />
    <PrivateRoute path={ROUTES.TRASH} component={Trash} />
    <PrivateRoute path={ROUTES.PROFILE} component={Profile} hideHeader />

    <Redirect to={ROUTES.VALIDATE_MASTER} />
  </Switch>
);

export default Routes;
