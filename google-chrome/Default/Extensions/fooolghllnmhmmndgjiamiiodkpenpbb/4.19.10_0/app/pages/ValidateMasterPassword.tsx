import { useContext, useLayoutEffect, useState } from 'react';
import { Button, Link, Loader, Text } from '@nord/ui';
import { FormattedMessage, useIntl } from 'react-intl';
import { DESKTOP_ROUTES } from '@extension/common/constants';
import { logout } from '@extension/app/api/authApi';
import { Mutation } from '@extension/app/components';
import { api } from '@extension/app/api';
import { AuthContext } from '@extension/app/context';
import { Action } from '@common/constants/action';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import { ExtensionContext } from '@extension/app/context/ExtensionContext';
import PasswordInput from '@common/components/PasswordInput/PasswordInput';

const ValidateMasterPassword = () => {
  const { formatMessage } = useIntl();
  const { isPopup } = useContext(ExtensionContext);
  const { authState, email } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useLayoutEffect(() =>
    () => {
      const passwordElement = document.getElementById('password');
      if (passwordElement) {
        (passwordElement as HTMLInputElement).value = '';
      }
    }, []);

  if (!email && authState !== AuthState.MasterValidate) {
    api.extension.openDesktopApp();
    return null;
  }

  const onLogoutClick = () => {
    logout();
    if (isPopup) {
      window.close();
    } else {
      api.extension.closeTab();
    }
  };

  const onClickForgot = () => {
    api.extension.openDesktopApp({ route: DESKTOP_ROUTES.MASTER_RECOVERY });

    if (isPopup) {
      window.close();
    } else {
      api.extension.closeTab();
    }
  };

  return (
    <Mutation action={Action.MasterValidate}>
      {(validate, { isLoading, error }) => (
        <form className="flex flex-col h-full" autoComplete="off">
          <Text variant="h3" className="color-primary font-bold mb-4">
            <FormattedMessage id="enterMasterPassword" />
          </Text>

          <Text variant="body2" className="mb-5 flex justify-center">
            <span className="color-primary truncate">{email}</span>
            <span className="mx-1 color-primary">·</span>
            <Link
              className="whitespace-no-wrap"
              colorClassName="text-teal hover:text-grey-dark"
              onClick={onLogoutClick}
            >
              <FormattedMessage id="logOut" />
            </Link>
          </Text>

          <PasswordInput
            id="password"
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            label={formatMessage({ id: 'masterPassword' })}
            autoFocus
            disabled={isLoading}
            error={error}
          />

          <Button
            type="submit"
            className="w-full text-base rounded-full mt-2"
            color="teal"
            onClick={async () => {
              const inputValue = (document.getElementById('password') as HTMLInputElement).value;
              await validate({ email, password: inputValue });
            }}
            disabled={isLoading}
          >
            <FormattedMessage id="unlockNordPass" />
            {isLoading && <Loader size="small" className="ml-2" />}
          </Button>

          <Text variant="body2" className="mt-auto">
            <Link onClick={onClickForgot} colorClassName="text-teal hover:text-grey-dark">
              <FormattedMessage id="forgotMasterPasswordQuestion" />
            </Link>
          </Text>
        </form>
      )}
    </Mutation>
  );
};

export default ValidateMasterPassword;
