import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { ListenerType } from '@extension/common/constants';
import { wrapWithProviders } from '@extension-tests/utils';
import { createListener, sendMessage } from '@extension/app/api';
import { Action } from '@common/constants/action';
import OfflineModeIndicator from './OfflineModeIndicator';

interface INotificationData extends Record<string, any> {
  id: number;
  type: string;
}

interface IListener {
  name: string;
  handler: (data: INotificationData) => void;
  type: string;
}

jest.mock('@extension/browser/browserApi');
jest.mock('@extension/browser/storageApi', () => ({
  get: jest.fn().mockResolvedValue({}),
}));

let listeners: Array<IListener> = [];

const setup = () => render(wrapWithProviders(<OfflineModeIndicator />));

const triggerNotification = (data: INotificationData) => listeners.forEach(({ handler }) => handler(data));

const mockOnlineStatus = (value: boolean | undefined) => {
  triggerNotification({
    id: 1,
    type: ListenerType.StorageChange,
    onlineStatus: {
      newValue: value,
    },
  });
};

(createListener as jest.Mock).mockImplementation((name, handler, type) => {
  listeners.push({ name, handler, type });
  return jest.fn();
});

describe('<OfflineModeIndicator />', () => {
  beforeEach(() => {
    listeners = [];
  });

  describe('when isOnline is not defined', () => {
    it('should not display indicator', async () => {
      const { queryByTestId } = setup();

      await waitFor(() => {
        expect(queryByTestId('offline-indicator')).toBeNull();
      });
    });
  });

  describe('when in offline mode', () => {
    it('should show offline indicator, text, icon & Refresh link', async () => {
      const { findByTestId, findByText } = setup();

      act(() => mockOnlineStatus(false));
      expect(await findByTestId('offline-indicator')).toBeVisible();
      expect(await findByTestId('offline-icon')).toBeVisible();
      expect(await findByText("You're offline.")).toBeVisible();
      expect(await findByText('Refresh')).toBeVisible();
    });

    it('should send message with Action.OnlineStatusCheck on refresh button click', async () => {
      const { findByTestId } = setup();

      act(() => mockOnlineStatus(false));
      fireEvent.click(await findByTestId('refresh-button'));

      expect(sendMessage).toBeCalledWith(Action.OnlineStatusCheck);
    });
  });

  describe('when in online mode', () => {
    it('should show online indicator, text & icon', async () => {
      const { getByTestId, findByText } = setup();

      act(() => mockOnlineStatus(true));

      expect(getByTestId('offline-indicator')).toBeVisible();
      expect(getByTestId('online-icon')).toBeVisible();
      expect(await findByText('You\'re back online')).toBeVisible();
    });
  });

  it('should hide indicator after 3 seconds', async () => {
    jest.useFakeTimers();

    const { findByTestId, queryByTestId } = setup();

    act(() => mockOnlineStatus(true));

    expect(await findByTestId('offline-indicator')).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(queryByTestId('offline-indicator')).toBeNull();
  });
});
