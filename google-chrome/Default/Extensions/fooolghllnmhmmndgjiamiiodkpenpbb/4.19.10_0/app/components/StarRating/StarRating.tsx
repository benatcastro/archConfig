import { FC, useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@nord/ui';
import cx from 'classnames';
import { getBrowser, openInNewTab } from '@extension/common/utils';
import { LINKS, Storage } from '@extension/common/constants';
import * as Clear2Icon from '@icons/16/clear2.svg';
import Icon from '@common/components/Icon';
import StorageApi from '@extension/browser/storageApi';
import { useAuthContext } from '@extension/app/context/AuthContext';
import { getTimeDiff, parseDate } from '@common/utils/date';
import { Browser } from '@common/constants';
import useQuery from '@common/hooks/useQuery/useQuery';
import { api } from '@extension/app/api';
import styles from './StarRating.module.scss';

export const GOOD_RATING = 4;
export const MAX_RATING = 5;
export const MIN_REGISTRATION_DAYS_DIFF = 3;
export const MIN_VAULT_ITEMS = 5;

const getRegistrationDiff = (registrationDate?: string) => {
  if (!registrationDate) {
    return -1;
  }
  return getTimeDiff(parseDate(registrationDate), new Date()).days;
};

interface IStarRating {
  vaultItemsLength: number;
}

const StarRating: FC<IStarRating> = ({ vaultItemsLength }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>();
  const { data: userUuid } = useQuery(api.extension.getUserUuid);
  const { subscriptionData } = useAuthContext();
  const registrationDiff = useMemo(() => getRegistrationDiff(subscriptionData.registrationDate), [subscriptionData]);
  const isShownStorageKey = `${Storage.IsExtensionRatingShown}-${userUuid}` as unknown as Storage;

  useEffect(() => {
    (async () => {
      if (
        userUuid &&
        registrationDiff >= MIN_REGISTRATION_DAYS_DIFF &&
        vaultItemsLength >= MIN_VAULT_ITEMS &&
        getBrowser() === Browser.Chrome
      ) {
        const { [isShownStorageKey]: isShown } = await StorageApi.get({ [isShownStorageKey]: false });
        setIsVisible(!isShown);

        if (!isShown) {
          await StorageApi.set({ [isShownStorageKey]: true });
        }
      }
    })();
  }, [isShownStorageKey, registrationDiff, subscriptionData?.registrationDate, userUuid, vaultItemsLength]);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {selectedRating && (
        <div className="relative">
          <div
            role="presentation"
            className="absolute right-0 top-0 mr-7 mt-3 cursor-pointer"
            onClick={() => setIsVisible(false)}
            data-testid="clear-icon"
          >
            <Icon
              src={Clear2Icon}
              width={16}
              height={16}
              className={styles['clear-icon']}
            />
          </div>
        </div>
      )}

      <div
        className="p-4 bg-primary-accent-18 text-center m-4 mt-0 rounded-2 flex justify-center align-center flex-col"
      >

        {!selectedRating && (
          <>
            <div className="color-primary-accent-3 font-bolder">
              <FormattedMessage id="enjoyingNordPass" />
            </div>
            <div className="color-primary-accent-1 font-medium text-micro">
              <FormattedMessage id="clickOnStartToRateYourExperience" />
            </div>

            <div className="flex flex-row-reverse justify-center mt-2">
              {Array.from({ length: MAX_RATING }, (_, i) => i + 1).reverse().map(rating => (
                <div
                  role="presentation"
                  key={rating}
                  data-testid="star-icon"
                  className={cx('cursor-pointer', styles['star-icon'])}
                  onClick={() => setSelectedRating(rating)}
                />
              ))}
            </div>
          </>
        )}

        {selectedRating && selectedRating < GOOD_RATING && (
          <div className="color-primary-accent-3 font-bolder py-4">
            <FormattedMessage id="thankYouForYourFeedback" />
          </div>
        )}

        {selectedRating >= GOOD_RATING && (
          <>
            <div className="color-primary-accent-3 font-bolder px-6">
              <FormattedMessage id="wouldYouLikeToRateNordPassOnBrowserStore" values={{ browser: 'Chrome' }} />
            </div>

            <Button className="rounded-full mt-3" onClick={() => openInNewTab(LINKS.CHROME_STORE)}>
              <FormattedMessage id="rateOnWebStore" />
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default StarRating;
