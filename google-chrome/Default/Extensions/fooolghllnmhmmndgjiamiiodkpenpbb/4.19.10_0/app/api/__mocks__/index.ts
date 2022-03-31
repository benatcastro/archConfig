import { TSendMessage } from '@common/contracts/contracts';
import ExtensionAPI from '~/api/ExtensionAPI';
import ItemAPI from '~/api/ItemAPI';
import OrganizationAPI from '~/api/OrganizationAPI';
import ShareAPI from '~/api/ShareAPI';
import UserAPI from '~/api/UserAPI';
import AccountAPI from '~/api/AccountAPI';
import ActionAPI from '~/api/ActionAPI';
import AppAPI from '~/api/AppAPI';
import PasswordAPI from '~/api/PasswordAPI';

export const sendMessage = jest.fn(() => new Promise(resolve => resolve(undefined))) as TSendMessage;
export const createListener = jest.fn(() => jest.fn());
export const logError = jest.fn();

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
