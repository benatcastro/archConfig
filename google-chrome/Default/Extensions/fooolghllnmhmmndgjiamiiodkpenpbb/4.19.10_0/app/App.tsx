import { noOp } from '@common/constants/function';
import { INotification } from '@common/interfaces';
import { isAccountSwitchingChangeMessage } from '@common/utils/notificationTypeGuards';
import { FC, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { FormattedMessage } from 'react-intl';
import { Router } from 'react-router-dom';

import { AppState, ListenerType, Storage } from '@extension/common/constants';
import { logError } from '@extension/common/utils';
import BrowserApi from '@extension/browser/browserApi';
import StorageApi from '@extension/browser/storageApi';
import { api, createListener } from '@extension/app/api';
import useIsSafariPopup from '@extension/app/hooks/useIsSafariPopup';
import { OrganizationContextProvider } from '@extension/app/context/OrganizationContext';
import { initAppLogger } from '@extension/app/utils/initAppLogger';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import AppClosed from '@extension/app/components/AppClosed';
import AppOutdated from '@extension/app/components/AppOutdated';
import InstallApp from '@extension/app/components/InstallApp';
import ApproveExtension from '@extension/app/components/ApproveExtension/ApproveExtension';
import FullscreenLoader from '@common/components/FullScreenLoader/FullscreenLoader';
import ToastContainer from '@common/components/ToastNotification/ToastContainer';
import { NO_WS_CONNECTION_ERROR_NAME } from '@common/constants';
import ContentError from '@common/utils/ContentError';
import useLoaderLogging from '@common/hooks/useLoaderLogging/useLoaderLogging';
import { ErrorBoundary, ErrorScreen, MacRefreshCounter } from './components';
import ExtensionProvider from './context/ExtensionContext';
import { AuthProvider } from './context/AuthContext';
import { TranslationsProvider } from './context/TranslationsProvider';
import Routes from './Routes/Routes';
import history from './utils/history';
import { useAppThemeChangeListener } from './hooks/useAppThemeChangeListener';

const INITIAL_STATE = {
  authState: AuthState.Unauthenticated,
};

let hasWsFailed = false;

const initApp = async () => {
  const isPopup = await BrowserApi.isPopupOpen();

  try {
    const state = await api.user.getAuthState().catch(async (error: ContentError) => {
      if (error.info?.name === NO_WS_CONNECTION_ERROR_NAME) {
        // on Safari extension, on reload (after 'Restart App' click or manual reload) extension looses ws connection
        hasWsFailed = true;
        await api.extension.openWS();
      }
    });

    if (state) {
      if (![AuthState.MasterValidate, AuthState.Authenticated].includes(state)) {
        // make sure desktop app is opened before closing extension popup
        await api.extension.openDesktopApp().catch(noOp);

        if (isPopup) {
          window.close();
        } else {
          await api.extension.closeTab().catch(noOp);
        }
      }

      await StorageApi.set({ authState: state });

      if (state === AuthState.Authenticated) {
        const userServices = await api.user.getServices();
        await StorageApi.set({ [Storage.UserServices]: userServices });
      }
    }
  } catch (error) {
    logError('App:', error);
    return null;
  }

  return StorageApi.get({
    authState: AuthState.Unauthenticated,
    email: '',
    appVersion: null,
    [Storage.UserServices]: { plan: null, services: null },
  });
};

let removeErrorListeners: () => void;

const Loader: FC<{ isLoading: boolean; isAppStateLoading: boolean; isAccountSwitching: boolean }> = ({
  isLoading,
  isAppStateLoading,
  isAccountSwitching,
}) => {
  useLoaderLogging(isLoading, logError, 'App:isLoading');
  useLoaderLogging(isAppStateLoading, logError, 'App:isAppStateLoading');
  useLoaderLogging(isAccountSwitching, logError, 'App:isAccountSwitching');

  return (
    <div className="h-screen bg-primary">
      <FullscreenLoader />
    </div>
  );
};

const App: FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [isAccountSwitching, setIsAccountSwitching] = useState(false);
  const [appState, setAppState] = useState(AppState.Loading);
  const [initialState, setInitialState] = useState(INITIAL_STATE);
  const [isPopup, setIsPopup] = useState(false);
  const isSafariPopup = useIsSafariPopup();

  const onAppStateReady = async () => {
    if (removeErrorListeners) {
      removeErrorListeners();
    }
    removeErrorListeners = initAppLogger();

    const state = await initApp();

    if (state) {
      setInitialState(state);
    }
  };

  useAppThemeChangeListener();

  useEffect(() => {
    (async () => {
      setIsPopup(await BrowserApi.isPopupOpen());

      const result = await StorageApi.get({ [Storage.AppState]: AppState.Loading });
      setAppState(result[Storage.AppState]);

      if (result[Storage.AppState] === AppState.Ready) {
        await onAppStateReady();
      }
      if (result[Storage.AppState] !== AppState.Loading && !hasWsFailed) {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (isSafariPopup || isPopup) {
      api.extension.openWS().catch(error => logError('openws:', error));
      api.extension.closeAutofill();
    }
  }, [isSafariPopup, isPopup]);

  useEffect(() => {
    const checkApp = async (changes: Record<string, any>) => {
      if (changes[Storage.AppState]) {
        if (changes[Storage.AppState].newValue === AppState.Ready) {
          setLoading(true);
          await onAppStateReady();
          setLoading(false);
        } else if (
          changes[Storage.AppState].newValue === AppState.Loading &&
          changes[Storage.AppState].oldValue !== AppState.Crashed
        ) {
          return; // ignore reloads when not crashed
        }
        if (changes[Storage.AppState].newValue !== AppState.Loading) setLoading(false);
        setAppState(changes[Storage.AppState].newValue);
      }
    };
    return createListener('checkApp', checkApp, ListenerType.StorageChange);
  }, []);

  useEffect(() => {
    const handleIsSwitchingAccount = async (msg: INotification) => {
      if (isAccountSwitchingChangeMessage(msg)) {
        setIsAccountSwitching(msg.isSwitching);
      }
    };
    return createListener('App:switchAccount', handleIsSwitchingAccount, ListenerType.RuntimeMessage);
  }, []);

  const toggleToastVisibility = (isVisible: boolean) => StorageApi.set({ [Storage.IsToastVisible]: isVisible });

  const isAppStateLoading = appState === AppState.Loading;
  if (isLoading || isAppStateLoading || isAccountSwitching) {
    return (
      <Router history={history}>
        <Loader isLoading={isLoading} isAppStateLoading={isAppStateLoading} isAccountSwitching={isAccountSwitching} />
      </Router>
    );
  }

  return (
    <TranslationsProvider>
      <MacRefreshCounter isPopup={isPopup} />
      <ExtensionProvider isPopup={isPopup || isSafariPopup}>
        {appState === AppState.Crashed ? (
          <ErrorScreen />
        ) : (
          <ErrorBoundary>
            {appState === AppState.NeedApprove && <ApproveExtension />}
            {appState === AppState.Ready && (
              <AuthProvider initialState={initialState}>
                <OrganizationContextProvider>
                  <Router history={history}>
                    <Routes />
                    <ToastContainer isExtension onToastVisibilityToggle={toggleToastVisibility} />
                  </Router>
                </OrganizationContextProvider>
              </AuthProvider>
            )}
            {appState === AppState.Closed && <AppClosed />}
            {appState === AppState.NotCompatible && <AppOutdated />}
            {appState === AppState.NotInstalled && <InstallApp />}
            {appState === AppState.FailedApprove && (
              <ErrorScreen
                title={<FormattedMessage id="authenticityErrorTitle" />}
                description={<FormattedMessage id="authenticityErrorDescription" />}
                button={<FormattedMessage id="authenticityErrorButton" />}
              />
            )}
          </ErrorBoundary>
        )}
      </ExtensionProvider>
    </TranslationsProvider>
  );
};

export default hot(App);
