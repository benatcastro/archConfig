import { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { ShareStatus, SortingType } from '@common/constants';
import { showToast, ToastEventType } from '@common/components/ToastNotification/ToastNotificationUtils';
import { IItem } from '@common/interfaces';
import BrowserApi from '@extension/browser/browserApi';

export const isItemWithHeader = (items: Array<IItem>, index: number, sortingType: SortingType) => {
  const item = items[index];
  const previousItem = items[index - 1];

  const isPreviousItemPending = previousItem?.share_status === ShareStatus.Pending;
  const isItemPending = item?.share_status === ShareStatus.Pending;

  const firstPreviousItemChar = previousItem?.title?.charAt(0).toLowerCase();
  const firstItemChar = item?.title?.charAt(0).toLowerCase();
  const areBothFirstCharsSame = firstPreviousItemChar === firstItemChar;

  return (
    sortingType === SortingType.Alpha &&
    (
      !index ||
      (!isItemPending && isPreviousItemPending) ||
      (!isItemPending && !areBothFirstCharsSame)
    )
  );
};

export const getItemHeight = (items: Array<IItem>, index: number, sortingType: SortingType) => {
  const defaultHeight = 56;
  const headerHeight = 34;
  return isItemWithHeader(items, index, sortingType) ? defaultHeight + headerHeight : defaultHeight;
};

export const showFeedback = (bodyText: ReactNode) => {
  showToast(ToastEventType.ActionFeedback, { bodyText, hasActions: false });
};

export const actionWithFeedback = (action: () => void, bodyText: ReactNode) => {
  action();
  showFeedback(bodyText);
};

export const copyWithFeedback = (value: string, item: ReactNode) => actionWithFeedback(
  () => BrowserApi.clipboardWrite(value),
  <FormattedMessage id="itemCopied" values={{ item }} />,
);
