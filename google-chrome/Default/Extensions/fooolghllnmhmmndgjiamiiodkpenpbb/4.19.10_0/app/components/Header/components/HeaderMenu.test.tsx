import { getIsFeatureEnabled } from '@extension/app/utils/getIsFeatureEnabled';
import { render } from '@testing-library/react';
import { wrapWithProviders } from '@tests/extension/utils';
import HeaderMenu from './HeaderMenu';

jest.mock('@extension/app/utils/getIsFeatureEnabled');
jest.mock('~/api/ExtensionAPI', () => () => ({ getUserEmail: () => 'email@email.com' }));

const setup = () => render(wrapWithProviders(<HeaderMenu onMenuOpen={jest.fn()} />));

describe('HeaderMenu', () => {
  it('should render lock icon if account switch is disabled', async () => {
    (getIsFeatureEnabled as jest.Mock).mockResolvedValue(false);
    const { findByTestId } = setup();

    expect(await findByTestId('header-menu-lock')).toBeVisible();
  });

  it('should render profile icon if account switch is enabled', async () => {
    (getIsFeatureEnabled as jest.Mock).mockResolvedValue(true);
    const { findByTestId } = setup();

    expect(await findByTestId('header-menu-profile-icon')).toBeVisible();
  });
});
