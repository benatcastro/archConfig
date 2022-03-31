import { render, waitFor } from '@testing-library/react';
import SharedWith, { ISharedUser } from '@extension/app/pages/ViewItem/components/SharedWith/SharedWith';
import { wrapWithProviders } from '@extension-tests/utils';

const setup = (users: Array<ISharedUser>) => render(wrapWithProviders(<SharedWith sharedUsers={users} uuid="123" />));

describe('SharedWith component', () => {
  it('should render nothing when users not provided', async () => {
    const users: Array<ISharedUser> = [];
    const { container } = setup(users);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it('should show user icons with first email letters', async () => {
    const user1 = { email: 'first@test.test', owner: false };
    const user2 = { email: 'second@test.test', owner: false };
    const { getByText } = setup([user1, user2] as Array<ISharedUser>);

    await waitFor(() => {
      expect(getByText('fi')).toBeTruthy();
      expect(getByText('se')).toBeTruthy();
    });
  });
});
