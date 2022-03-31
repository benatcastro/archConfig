import { IAccount } from '@common/interfaces/account';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { wrapWithProviders } from '@tests/extension/utils';
import StorageApi from '@extension/browser/storageApi';
import { AppTheme } from '@common/constants/appTheme';
import {
  Storage,
} from '@extension/common/constants';
import { Providers } from '@common/constants/providers';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import AccountSwitch from './AccountSwitch';

jest.mock('@extension/browser/storageApi');

type TAccountSwitchSetup = {
  accounts: Array<IAccount>;
}

const setup = ({
  accounts = [],
}: TAccountSwitchSetup) => render(wrapWithProviders(<AccountSwitch accounts={accounts} />));

describe('AccountSwitch', () => {
  beforeAll(() => {
    (StorageApi.get as jest.Mock).mockResolvedValue({
      [Storage.AppTheme]: AppTheme.Light,
    });
  });

  const userAccount: IAccount = { email: 'test@mock.com', provider: Providers.NordAccount, uuid: 'uuid1234', state: AuthState.Authenticated };

  it('should render "add account" button', async () => {
    const { findByText } = setup({ accounts: [] });
    expect(await findByText('Add another account')).toBeVisible();
  });

  it('should render account button', async () => {
    const { findByText } = setup({ accounts: [userAccount] });
    expect(await findByText('test@mock.com')).toBeVisible();
  });

  it('should display "remove" button  on account menu button click', async () => {
    const { findByTestId, findByText } = setup({ accounts: [userAccount] });
    const accountMenuButton = await findByTestId('account-menu-button');
    userEvent.click(accountMenuButton);
    expect(await findByText('Remove')).toBeVisible();
  });
});
