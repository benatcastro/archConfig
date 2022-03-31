import { ItemUseReason } from '@common/constants';
import { Action } from '@common/constants/action';
import { IPasswordItem, INoteItem } from '@common/contracts/contracts';
import { IItem } from '@common/interfaces';
import { showAlert } from '@common/utils/alerts';
import { isCreditCard } from '@common/utils/itemTypeGuards';
import { ExtensionTranslations } from '@extension/app/utils/ExtensionTranslations';
import StorageApi from '@extension/browser/storageApi';
import { Storage } from '@extension/common/constants';
import { api, sendMessage } from './index';

const showError = async (error: Error, errorMessageId: string) => {
  const result = await StorageApi.get({ [Storage.OnlineStatus]: null });
  const { formatMessage } = ExtensionTranslations.getIntl();

  if (result[Storage.OnlineStatus]) {
    showAlert(formatMessage({ id: errorMessageId }));
  } else {
    showAlert(error.message);
  }
};

export const getItem = (uuid: string) => {
  const { formatMessage } = ExtensionTranslations.getIntl();
  return api.item.fetchItem(uuid, ItemUseReason.View).catch(() => showAlert(formatMessage({ id: 'errorWhileAccessingItem' })));
};

export const getSecret = async (uuid: string): Promise<any> => {
  const item = await getItem(uuid);

  if (!item) {
    return null;
  }

  if (isCreditCard(item)) {
    return { card_number: item.card_number, cvc: item.cvc, pin: item.pin };
  }

  return (item as IPasswordItem | INoteItem).secret;
};

export const duplicatePersonalInfo = (item: IItem) =>
  sendMessage(Action.DuplicatePersonalInfo, { item }).catch(error => showError(error, 'duplicatingPersonalInfoError'));

export const trashItem = (uuid: string) =>
  api.item.trash([{ uuid }]).catch(error => showError(error, 'deletingItemsError'));

export const restoreItem = (uuid: string) =>
  api.item.restore([{ uuid }]).catch(error => showError(error, 'errorOnRestoring'));

export const trashSharedItem = async (uuid: string) => {
  try {
    await api.share.removeShares([{ uuid }]);
    await api.item.trash([{ uuid }]);
  } catch (error) {
    showError(error, 'deletingItemsError');
  }
};

export const declineShare = (uuid: string) =>
  api.share.removeShares([{ uuid }]).catch(error => showError(error, 'errorOnDeclining'));

export const deleteItem = (uuid: string) =>
  api.item.delete([{ uuid }]).catch(error => showError(error, 'deletingItemsError'));
