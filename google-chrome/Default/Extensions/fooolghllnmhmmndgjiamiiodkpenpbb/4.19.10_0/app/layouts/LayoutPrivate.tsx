import { useContext, FC, useState } from 'react';
import cx from 'classnames';
import { useRouteMatch } from 'react-router-dom';
import { ROUTES } from '@extension/common/constants';
import { OrganizationBar } from '@extension/app/components';
import { AddMenu } from '@extension/app/components/AddMenu/AddMenu';
import { ExtensionContext } from '@extension/app/context/ExtensionContext';
import { PendingSharesProvider } from '@extension/app/context/PendingSharesContext/PendingSharesContext';
import { VaultProvider } from '@extension/app/context/VaultContext';
import OfflineModeIndicator from '@extension/app/components/OfflineModeIndicator/OfflineModeIndicator';
import Header from '@extension/app/components/Header/Header';
import { useIsScrolled } from '@extension/app/hooks/useIsScrolled';
import { Sidebar } from '@extension/app/components/Sidebar/Sidebar';
import AlertBar from '@common/components/AlertBar/AlertBar';
import { ItemActionModalsHandler } from '@extension/app/components/ItemActionModalsHandler';
import { VaultItemModalsProvider } from '@extension/app/context/VaultItemModalsContext/VaultItemModalsProvider';
import useToastVisibility from '@extension/app/hooks/useToastVisibility';

interface ILayoutPrivate {
  hideHeader?: boolean;
}

const LayoutPrivate: FC<ILayoutPrivate> = ({ children, hideHeader }) => {
  const [onScroll, isScrolled] = useIsScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPopup } = useContext(ExtensionContext);
  const { isExact, path } = useRouteMatch();
  const isInVaultList = path === ROUTES.VAULT && isExact;
  const isInItemDetails = path === ROUTES.VAULT && !isExact;
  const isInTrashItemDetails = path === ROUTES.TRASH && !isExact;
  const isHeaderHidden = isInItemDetails || isInTrashItemDetails || hideHeader;
  const isToastVisible = useToastVisibility();

  return (
    <PendingSharesProvider>
      <VaultProvider>
        <VaultItemModalsProvider>
          <div
            className={cx(
              'overflow-hidden h-screen flex flex-col text-grey-darkest leading-normal text-small font-medium',
              isPopup && 'is-popup',
            )}
          >
            <ItemActionModalsHandler />
            <OfflineModeIndicator />
            <AlertBar />
            <div className="overflow-hidden flex flex-1 flex-col bg-primary">
              {!isHeaderHidden && <Header isContentScrolled={isScrolled} onMenuOpen={() => setIsMenuOpen(true)} />}
              <Sidebar isMenuOpen={isMenuOpen} onMenuClose={() => setIsMenuOpen(false)} />
              <div className="flex flex-col flex-1 relative overflow-hidden">
                <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto" onScroll={onScroll}>
                  <OrganizationBar />
                  {children}
                </div>
                {isInVaultList && (
                  <>
                    <div className={cx(
                      'fixed bottom-0 right-0 p-4',
                      isToastVisible && 'mb-14',
                    )}
                    >
                      <AddMenu />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </VaultItemModalsProvider>
      </VaultProvider>
    </PendingSharesProvider>
  );
};

export default LayoutPrivate;
