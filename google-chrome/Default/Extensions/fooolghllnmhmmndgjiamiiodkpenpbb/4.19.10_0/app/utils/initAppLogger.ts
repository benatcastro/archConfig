import { listenForErrors, logError } from '@extension/common/utils';

export const initAppLogger = () => listenForErrors(logError);
