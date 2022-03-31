import { useEffect, useState } from 'react';
import { isSafari } from '@extension/browser/safariApp';
import { ListenerType, SafariCommands } from '@extension/common/constants';
import { createListener } from '@extension/app/api';
import { noOp } from '@common/constants/function';
import { IMessage } from '@common/interfaces';

export default function useIsSafariPopup() {
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    if (isSafari) {
      const handleMessage = (msg: IMessage) => {
        if (msg?.command === SafariCommands.IsPopUpOpen) {
          setIsPopup(msg.data);
        }
      };
      return createListener('isPopUp', handleMessage, ListenerType.RuntimeMessage);
    }
    return noOp;
  }, []);

  return isPopup;
}
