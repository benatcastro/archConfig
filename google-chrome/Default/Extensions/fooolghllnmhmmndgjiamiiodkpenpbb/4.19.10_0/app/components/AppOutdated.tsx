import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '@nord/ui';

import './ErrorLogo.scss';

const AppOutdated: FC = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-primary">
    <div
      className="is-popup flex flex-col h-screen text-center text-grey-darkest leading-normal text-small font-medium overflow-y-auto relative"
    >
      <div className="mb-4 mt-20">
        <div className="error-logo__logo mx-auto" />
      </div>
      <div className="flex-1 p-8 w-full max-w-500 mx-auto flex flex-col">
        <Text variant="h3" className="color-primary font-bold mb-4">
          <FormattedMessage id="updateRequired" />
        </Text>
        <Text variant="body2" className="mb-12 color-primary">
          <FormattedMessage id="updateNordPassToStart" />
        </Text>
      </div>
    </div>
  </div>
);

export default AppOutdated;
