import { fireEvent, render, waitFor } from '@testing-library/react';
import { DESKTOP_ROUTES, ROUTES } from '@extension/common/constants/routes';
import { IntlProvider } from 'react-intl';
import Tools from '@extension/app/pages/Tools/Tools';
import history from '@extension/app/utils/history';
import { sendMessage } from '@extension/app/api';
import AuthContext from '@extension/app/context/AuthContext';
import defaultLocale from '@extension/assets/lang/compiled/en.json';
import { Action } from '@common/constants/action';
import { RemoteURL } from '@common/constants/remoteURL';
import { openInNewTab } from '@extension/common/utils';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import StorageApi from '@extension/browser/storageApi';
import { Storage, AppState } from '@extension/common/constants';

jest.mock('@extension/browser/browserApi');
jest.mock('@extension/app/utils/history');
jest.mock('@common/services/getOs', () => ({ getOs: () => 'Mac' }));
jest.mock('@extension/common/utils');
jest.mock('@extension/browser/storageApi');

const setup = () => {
  (StorageApi.get as jest.Mock).mockResolvedValue({ [Storage.AppState]: AppState.Ready });

  return render(
    <AuthContext.Provider value={{
      subscriptionData: {
        isPremium: true,
        isBusiness: true,
        expirationDate: null,
        isTrial: null,
        isTrialAvailable: null,
        planName: null,
        registrationDate: null,
      },
      authState: AuthState.Authenticated,
      email: 'test@test.com',
    }}
    >
      <IntlProvider locale="en" defaultLocale="en" messages={defaultLocale}>
        <Tools />
      </IntlProvider>
    </AuthContext.Provider>,
  );
};

describe('<Tools />', () => {
  describe('when user is logged in', () => {
    it('should render 3 tools and 2 product links', async () => {
      const { findByText } = setup();

      expect(await findByText('Password Generator')).toBeVisible();
      expect(await findByText('Password Health')).toBeVisible();
      expect(await findByText('Data Breach Scanner')).toBeVisible();

      expect(await findByText('Nord VPN')).toBeVisible();
      expect(await findByText('Nord Locker')).toBeVisible();
    });
  });

  it('should redirect to password generator', async () => {
    const { findByText } = setup();

    fireEvent.click(await findByText('Password Generator'));

    expect(history.push).toHaveBeenCalledWith(ROUTES.GENERATE_PASSWORD);
  });

  it('should open password health in desktop', async () => {
    const { findByText } = setup();

    fireEvent.click(await findByText('Password Health'));
    await waitFor(() => {
      expect(sendMessage).toBeCalledWith(Action.DesktopOpen, { route: DESKTOP_ROUTES.PASSWORD_HEALTH });
    });
  });

  it('should open breach scanner in desktop', async () => {
    const { findByText } = setup();

    fireEvent.click(await findByText('Data Breach Scanner'));

    await waitFor(() => {
      expect(sendMessage).toBeCalledWith(Action.DesktopOpen, { route: DESKTOP_ROUTES.DATA_BREACH });
    });
  });

  it('should open new tab with Nord VPN link', async () => {
    const { findByText } = setup();

    fireEvent.click(await findByText('Nord VPN'));

    expect(openInNewTab).toBeCalledWith(RemoteURL.NordVPN);
  });

  it('should open new tab with Nord Locker link', async () => {
    const { findByText } = setup();

    fireEvent.click(await findByText('Nord Locker'));

    expect(openInNewTab).toBeCalledWith(RemoteURL.NordLocker);
  });
});
