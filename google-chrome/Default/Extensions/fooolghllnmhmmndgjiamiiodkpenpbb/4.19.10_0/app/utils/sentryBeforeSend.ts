import { Event } from '@sentry/browser';
import { sendMessage } from '@extension/app/api';
import { Action } from '@common/constants/action';

export const sentryBeforeSend = async (event: Event): Promise<Event> => {
  try {
    const result = await sendMessage(Action.CrashReportingEnabled);
    if (result?.enabled) {
      return event;
    }
  } catch (err) {
    return null;
  }

  return null;
};
