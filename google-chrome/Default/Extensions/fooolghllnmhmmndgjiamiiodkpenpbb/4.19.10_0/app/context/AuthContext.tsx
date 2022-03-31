import useQuery from '@common/hooks/useQuery/useQuery';
import { isUserEmailChangeMessage } from '@common/utils/notificationTypeGuards';
import { createContext, useState, useEffect, useContext, FC } from 'react';
import { ListenerType, Storage } from '@extension/common/constants';
import { ISubscriptionData, parseSubscriptionData } from '@common/utils/parseSubscriptionData/parseSubscriptionData';
import StorageApi from '@extension/browser/storageApi';
import { createListener, api } from '@extension/app/api';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import { INotification, ISubscriptionDataBEModel } from '@common/interfaces';
import { noOp } from '@common/constants/function';
import { DAY } from '@common/constants/time';
import { logError } from '@extension/common/utils';

interface IAuthProvider {
  initialState: {
    email?: string;
    authState: AuthState;
    tags?: Array<string>;
    appVersion?: string;
    userServices?: ISubscriptionDataBEModel;
  };
}

interface IAuthContext {
  authState: AuthState;
  subscriptionData: ISubscriptionData;
  email: string | undefined;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC<IAuthProvider> = ({ initialState, children }) => {
  const [state, setState] = useState(initialState.authState);
  const [email, setEmail] = useState<string>();
  const { data: initialEmail } = useQuery(api.extension.getUserEmail);

  const [subscriptionData, setSubscriptionData] = useState(
    parseSubscriptionData(initialState[Storage.UserServices]),
  );

  useEffect(() => {
    setEmail(prev => initialEmail ?? prev);
  }, [initialEmail]);

  useEffect(() => {
    // TODO instead of storage listen to actual services changed event here
    if (!subscriptionData.expirationDate) {
      return noOp;
    }

    const diff = subscriptionData.expirationDate - Date.now();
    if (diff > 14 * DAY) {
      return noOp; // ignore services that expire in more than 14 days
    }

    const timer = setTimeout(async () => {
      const services = await api.user.getServices();
      await StorageApi.set({ [Storage.UserServices]: services });
    }, diff);

    return () => clearTimeout(timer);
  }, [subscriptionData]);

  useEffect(() => {
    const handleStorageChange = async (changes: Record<string, any>) => {
      if (changes.authState) {
        setState(changes.authState.newValue);
        if (changes.authState.newValue === AuthState.Authenticated) {
          api.user.getServices().then(services => (
            StorageApi.set({ [Storage.UserServices]: services }).catch(error =>
              logError('StorageApi:SetUserServices', error.message),
            )),
          ).catch(noOp);
        }

        if (changes.authState.newValue !== AuthState.Authenticated &&
          changes.authState.oldValue === AuthState.Authenticated) {
          // TODO: find solution how to close extension window in safari, cause "window.close()" doesn't work, maybe method in native safari app needed
          window.close();
        }
      }
      if (changes[Storage.UserServices]) {
        setSubscriptionData(parseSubscriptionData(changes[Storage.UserServices].newValue));
      }
    };
    return createListener('AuthContext', handleStorageChange, ListenerType.StorageChange);
  }, []);

  useEffect(() => {
    const handleEmailChange = async (msg: INotification) => {
      if (isUserEmailChangeMessage(msg)) {
        setEmail(msg.email);
      }
    };
    return createListener('AuthContext:emailChange', handleEmailChange, ListenerType.RuntimeMessage);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        subscriptionData,
        email,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
