import { fireEvent, render, waitFor } from '@testing-library/react';
import { DESKTOP_ROUTES, Storage, AppState } from '@extension/common/constants';
import { wrapWithProviders } from '@extension-tests/utils';
import { sendMessage } from '@extension/app/api';
import { Action } from '@common/constants/action';
import { AccessLevel, IItem } from '@common/interfaces';
import StorageApi from '@extension/browser/storageApi';
import { EditMenuItem } from './EditMenuItem';

jest.mock('@extension/browser/browserApi');
jest.mock('@extension/browser/storageApi');

describe('EditMenuItem', () => {
  beforeEach(() => {
    (StorageApi.get as jest.Mock).mockResolvedValue({ [Storage.AppState]: AppState.Ready });
  });

  it('should not be able send edit message when item access is limited', async () => {
    const { queryByText } = render(wrapWithProviders(<EditMenuItem item={{ acl: AccessLevel.ReadOnly } as IItem} />));

    await waitFor(() => {
      expect(queryByText('Edit')).not.toBeInTheDocument();
    });
  });

  it.each([
    AccessLevel.Owner,
    AccessLevel.User,
    null,
    undefined,
  ])('should send edit message when item access level is %s', async accessLevel => {
    (sendMessage as jest.Mock).mockResolvedValue(undefined);
    const { findByText } = render(wrapWithProviders(<EditMenuItem item={{ acl: accessLevel, uuid: 'testUuid' } as IItem} />));

    fireEvent.click(await findByText('Edit'));

    await waitFor(() => {
      expect(sendMessage).toBeCalledWith(Action.DesktopOpen, { route: DESKTOP_ROUTES.EDIT_ITEM, args: ['testUuid'] });
    });
  });
});
