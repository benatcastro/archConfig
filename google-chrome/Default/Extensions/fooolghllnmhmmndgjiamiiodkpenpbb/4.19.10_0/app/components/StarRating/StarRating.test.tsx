import { wrapWithIntl } from '@tests/extension/utils/wrapWithIntl';
import MockDate from 'mockdate';
import StarRating, {
  MAX_RATING,
  GOOD_RATING,
  MIN_VAULT_ITEMS, MIN_REGISTRATION_DAYS_DIFF,
} from '@extension/app/components/StarRating/StarRating';
import { fireEvent, waitFor } from '@testing-library/react';
import { openInNewTab, getBrowser } from '@extension/common/utils';
import { LINKS, Storage } from '@extension/common/constants';
import AuthContext from '@extension/app/context/AuthContext';
import { ISubscriptionData } from '@common/utils/parseSubscriptionData/parseSubscriptionData';
import { AuthState } from '@common/store/reducers/authReducer/authConstants';
import StorageApi from '@extension/browser/storageApi';
import { Browser } from '@common/constants';
import { renderWithInitEffects } from '@tests/utils/renderWithInitEffects';

const starIconTestId = 'star-icon';
const clearIconTestId = 'clear-icon';
const beforeMonthDate = '2021-09-14';
const yesterdayDate = '2021-10-13';
const userUuid = 'random-123';
const enjoyingNordPass = 'Enjoying NordPass?';
const rateOnWebStore = 'Rate on Web Store';
const storageKey = `${Storage.IsExtensionRatingShown}-${userUuid}` as Storage;
const storageSet = jest.fn();
const getUserUuidMock = jest.fn();

interface IMockProps {
  vaultItemsLength?: number;
  registrationDate?: string;
  storageData?: boolean;
  browser?: Browser;
  userUuid?: string;
}

const mockProps = (props?: IMockProps) => ({
  vaultItemsLength: MIN_VAULT_ITEMS,
  registrationDate: beforeMonthDate,
  storageData: false,
  browser: Browser.Chrome,
  userUuid,
  ...props,
});

const setup = (props = mockProps()) => {
  (StorageApi.set as jest.Mock).mockImplementation(storageSet);
  (StorageApi.get as jest.Mock).mockResolvedValue({
    [storageKey]: props.storageData,
  });
  (getBrowser as jest.Mock).mockReturnValue(props.browser);
  getUserUuidMock.mockReturnValue(props.userUuid);

  return renderWithInitEffects(wrapWithIntl(
    <AuthContext.Provider
      value={{
        authState: AuthState.Authenticated,
        subscriptionData: { registrationDate: props.registrationDate } as ISubscriptionData,
        email: 'test@test.com',
      }}
    >
      <StarRating vaultItemsLength={props.vaultItemsLength} />
    </AuthContext.Provider>,
  ));
};

jest.mock('@extension/browser/storageApi');
jest.mock('@extension/common/utils');
jest.mock('~/api/ExtensionAPI', () => () => ({ getUserUuid: () => getUserUuidMock }));

MockDate.set(new Date('2021-10-14'));

describe('StarRating', () => {
  beforeEach(jest.clearAllMocks);

  it('should render main window', async () => {
    const { findByText, findAllByTestId, queryByTestId } = await setup();

    expect(await findByText(enjoyingNordPass)).toBeVisible();
    expect(await findByText('Click on a star to rate your experience')).toBeVisible();
    expect(await findAllByTestId(starIconTestId)).toHaveLength(MAX_RATING);
    expect(queryByTestId(clearIconTestId)).toBeNull();
  });

  it('should show thank you message on bad rating select', async () => {
    const { findByText, findByTestId, findAllByTestId } = await setup();
    fireEvent.click((await findAllByTestId(starIconTestId))[GOOD_RATING - 1]);

    expect(await findByTestId(clearIconTestId)).toBeVisible();
    expect(await findByText('Thank you for your feedback!')).toBeVisible();
  });

  it('should suggest rating on chrome store on good rating select', async () => {
    const { findByText, findAllByTestId } = await setup();

    // star order is reversed, so star[0] = Best Rating, star[1] = Good Rating
    fireEvent.click((await findAllByTestId(starIconTestId))[MAX_RATING - GOOD_RATING]);

    expect(await findByText('Would you like to rate NordPass on Chrome Web Store?')).toBeVisible();
    expect(await findByText(rateOnWebStore)).toBeVisible();
  });

  it('should open chrome store on button click', async () => {
    const { findByText, findAllByTestId } = await setup();

    // star order is reversed, so star[0] = Best Rating, star[1] = Good Rating
    fireEvent.click((await findAllByTestId(starIconTestId))[MAX_RATING - GOOD_RATING]);
    fireEvent.click(await findByText(rateOnWebStore));

    expect(openInNewTab).toHaveBeenCalledWith(LINKS.CHROME_STORE);
  });

  it.each([
    ['user uuid is null', { userUuid: null }],
    [`registration diff till now is higher than ${MIN_REGISTRATION_DAYS_DIFF}`, { registrationDate: yesterdayDate }],
    [`has vault items less than ${MIN_VAULT_ITEMS}`, { vaultItemsLength: MIN_VAULT_ITEMS - 1 }],
    ['browser is not chrome', { browser: Browser.Safari }],
  ])('should not be visible, when %s', async (_description: string, props: IMockProps) => {
    const { queryByText } = await setup(mockProps(props));
    expect(queryByText(enjoyingNordPass)).toBeNull();
  });

  it('should call StorageApi.set when it was shown', async () => {
    await setup(mockProps());

    await waitFor(() => {
      expect(StorageApi.set).toHaveBeenCalledWith({ [storageKey]: true });
    });
  });
});
