import { FormattedMessage } from 'react-intl';
import { ReactNode } from 'react';
import { IAction } from '@extension/app/pages/ViewItem/components/ViewField/ViewField';
import { ActionType } from '@extension/app/pages/ViewItem/constants/constants/ActionType';
import { ItemAccessAction, UserAction } from '@common/constants/userAction';
import { api } from '@extension/app/api';
import debounce from '@common/utils/debounce';
import { Platform } from '@common/constants';
import { noOp } from '@common/constants/function';
import { copyWithFeedback } from '@extension/app/components/VaultList/VaultListUtils';
import { openInNewTab } from '@extension/common/utils';

interface ICreateCopyActionParams {
  actionId: string;
  value?: string;
  itemUuid: string;
  actionText?: ReactNode;
  isLimitedAccess?: boolean;
  trackingAction?: {
    action: UserAction;
    firstSession: boolean;
  };
  itemText: ReactNode;
}

const logCopyAction = debounce((itemUuid: string) => api.action.saveItemAction(
  ItemAccessAction.ItemCopied,
  [itemUuid],
  Platform.Extension,
), 200);

const logItemViewSecretAction = (itemUuid: string) => api.action.saveItemAction(
  ItemAccessAction.ItemSecretViewed,
  [itemUuid],
  Platform.Extension,
);

export const createCopyAction = ({
  actionId,
  value,
  actionText,
  isLimitedAccess,
  trackingAction,
  itemUuid,
  itemText,
}: ICreateCopyActionParams): IAction => ({
  action: ActionType.Copy,
  actionText: isLimitedAccess ? <FormattedMessage id="limitedRightsToView" /> : actionText || <FormattedMessage id="copy" />,
  actionId,
  onClick: () => {
    copyWithFeedback(value || '', itemText);

    if (trackingAction) {
      api.action.save(trackingAction.action, { firstSession: trackingAction.firstSession }).catch(noOp);
    }

    logCopyAction(itemUuid);
  },
  disabled: isLimitedAccess,
});

interface ICreateLaunchActionParams {
  actionId: string;
  url: string;
}

export const createLaunchAction = ({
  actionId,
  url,
}: ICreateLaunchActionParams): IAction => ({
  action: ActionType.Launch,
  actionText: <FormattedMessage id="launchWebsite" />,
  actionId,
  onClick: () => openInNewTab(url.startsWith('http') ? url : `https://${url}`),
});

interface ICreateShowHideActionParams {
  actionId: string;
  value: string | boolean;
  onClick: () => void;
  isLimitedAccess?: boolean;
  itemUuid: string;
}

export const createShowHideAction = ({
  actionId,
  value,
  onClick,
  itemUuid,
  isLimitedAccess,
}: ICreateShowHideActionParams): IAction => {
  const fullAccessActionText = value ? <FormattedMessage id="hide" /> : <FormattedMessage id="show" />;
  const handleClick = () => {
    if (!value) {
      logItemViewSecretAction(itemUuid);
    }

    onClick();
  };

  return {
    action: value ? ActionType.Hide : ActionType.Show,
    actionText: isLimitedAccess ? <FormattedMessage id="limitedRightsToView" /> : fullAccessActionText,
    actionId,
    onClick: handleClick,
    disabled: isLimitedAccess,
  };
};
