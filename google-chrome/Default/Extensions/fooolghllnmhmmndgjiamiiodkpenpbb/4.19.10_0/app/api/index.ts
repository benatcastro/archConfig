import BrowserApi from '@extension/browser/browserApi';
import { IMessage } from '@common/interfaces';
import { ListenerType } from '@extension/common/constants';
import UserAPI from '~/api/UserAPI';
import AccountAPI from '~/api/AccountAPI';
import OrganizationAPI from '~/api/OrganizationAPI';
import ShareAPI from '~/api/ShareAPI';
import ItemAPI from '~/api/ItemAPI';
import ExtensionAPI from '~/api/ExtensionAPI';
import ActionAPI from '~/api/ActionAPI';
import AppAPI from '~/api/AppAPI';
import PasswordAPI from '~/api/PasswordAPI';

export const sendMessage = (type: IMessage['type'], data: any = {}) => BrowserApi.sendMessage({ type, ...data });

export const createListener = (name: string, handler: (message: IMessage) => void, type: ListenerType) => {
  BrowserApi.addListener(name, handler, type);
  return () => BrowserApi.removeListener(name, handler, type);
};

// TODO add error logging (currently none of API's use it);
const logError = (_error: string) => { /* To be implemented */ };

export const api = {
  user: new UserAPI(sendMessage, logError),
  account: new AccountAPI(sendMessage, logError),
  organization: new OrganizationAPI(sendMessage, logError),
  share: new ShareAPI(sendMessage, logError),
  item: new ItemAPI(sendMessage, logError),
  extension: new ExtensionAPI(sendMessage, logError),
  action: new ActionAPI(sendMessage, logError),
  app: new AppAPI(sendMessage, logError),
  password: new PasswordAPI(sendMessage, logError),
};
