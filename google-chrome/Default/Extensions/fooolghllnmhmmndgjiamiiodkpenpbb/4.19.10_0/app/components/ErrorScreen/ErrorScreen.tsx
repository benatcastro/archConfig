import BrowserApi from '@extension/browser/browserApi';
import { FC, ReactNode } from 'react';
import { Button, Link, Text } from '@nord/ui';

import '@extension/app/components/ErrorLogo.scss';
import { sendMessage } from '@extension/app/api';
import { ExtensionAction } from '@common/constants/action';
import { EmailLinks } from '@common/constants/email';

interface IErrorScreen {
  title?: ReactNode;
  description?: ReactNode;
  button?: ReactNode;
}

const defaultDescription = (
  <>
    Please restart the app. If problem persists, please contact
    <Link
      colorClassName="text-teal hover:color-teal ml-1"
      onClick={() => sendMessage(ExtensionAction.OpenMailLink, { url: EmailLinks.Support })}
    >
      Support.
    </Link>
  </>
);

const ErrorScreen: FC<IErrorScreen> = ({ title, description, button }) => (
  <div className="flex flex-col justify-center items-center h-screen bg-primary">
    <div
      className="is-popup flex flex-col h-screen text-center text-grey-darkest leading-normal text-small font-medium overflow-y-auto relative"
    >
      <div className="mb-4 mt-20">
        <div className="error-logo__logo mx-auto" />
      </div>
      <div className="flex-1 p-8 w-full max-w-500 mx-auto flex flex-col">
        <Text variant="h3" className="color-primary font-bold mb-4">
          {title ?? 'Something went wrong'}
        </Text>
        <Text variant="body2" className="mb-12 color-primary">
          {description ?? defaultDescription}
        </Text>
        <Button
          className="w-full font-bold text-base rounded-full"
          color="teal"
          onClick={() => {
            window.location.assign('#');
            BrowserApi.reload();
          }}
        >
          {button ?? 'Restart App'}
        </Button>
      </div>
    </div>
  </div>
);

export default ErrorScreen;
