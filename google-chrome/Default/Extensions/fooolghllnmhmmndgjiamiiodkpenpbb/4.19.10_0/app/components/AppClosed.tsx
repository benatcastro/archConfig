import { Button, Link } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { isSafari } from '@extension/browser/safariApp';
import { api } from '@extension/app/api';
import LogoIconByTheme from './LogoIconByTheme';

const AppClosed = () => {
  const onDownloadAppClick = () => {
    api.extension.openInstallPage();
  };

  const onOpenNordpassClick = () => {
    api.extension.openApp('vault');
    window.close();
  };

  return (
    <div className="flex flex-col justify-center items-center text-grey-darkest leading-normal text-small font-medium h-screen bg-primary">
      <div className="is-popup flex flex-col h-screen text-center text-grey-darkest leading-normal text-small font-medium page-slide-in overflow-y-auto relative rounded-1 shadow-3">
        <div className="mt-20">
          <LogoIconByTheme />
        </div>

        <div className="flex-1 flex flex-col px-8 pb-6 pt-19 w-full max-w-500 mx-auto">
          <span className="color-primary mb-6">
            <FormattedMessage id="openNordPassToStart" />
          </span>

          <Button
            className="w-full font-bold text-base text-center rounded-full"
            color="teal"
            onClick={() => onOpenNordpassClick()}
          >
            <FormattedMessage id="openNordPass" />
          </Button>

          {!isSafari && (
            <span className="mt-auto color-primary">
              <FormattedMessage id="dontHaveAppQuestion" />
              <Link className="text-teal ml-1" onClick={onDownloadAppClick}>
                <FormattedMessage id="download" />
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppClosed;
