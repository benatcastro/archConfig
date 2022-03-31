import { FC, useContext } from 'react';
import cx from 'classnames';
import { ExtensionContext } from '@extension/app/context/ExtensionContext';
import LogoIconByTheme from '@extension/app/components/LogoIconByTheme';

const LayoutPublic: FC = ({ children }) => {
  const { isPopup } = useContext(ExtensionContext);

  return (
    <div className="flex flex-col justify-center items-center text-grey-darkest leading-normal text-small font-medium h-screen bg-primary">
      <div
        className={cx(
          'is-popup flex flex-col h-screen text-center text-grey-darkest leading-normal text-small font-medium page-slide-in overflow-y-auto relative',
          !isPopup && 'rounded-1 shadow-3',
        )}
      >
        <div className="mb-4 mt-20">
          <LogoIconByTheme />
        </div>
        <div className="flex-1 p-8 w-full max-w-500 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default LayoutPublic;
