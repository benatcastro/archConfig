import { FC, memo } from 'react';
import { Storage } from '@extension/common/constants';
import { SortingType, SortingDirection } from '@common/constants';
import { ISorting } from '@extension/common/interfaces/sorting';
import StorageApi from '@extension/browser/storageApi';
import { useIntl } from 'react-intl';
import { Link, SVG, Text } from '@nord/ui';
import cx from 'classnames';
import tickIcon from '@icons/10/tick.svg';
import chevronDownIcon from '@icons/14/chevron-down.svg';
import Menu from '@common/components/Menu/Menu';
import MenuItem from '@common/components/Menu/MenuItem';
import { useMenuState } from '@common/components/Menu/useMenuState';

import './SortingMenu.scss';

interface ISortingMenu {
  sorting: ISorting;
}

const setSorting = (type: SortingType, sort: SortingDirection) => {
  StorageApi.set({ [Storage.VaultSorting]: { type, sort } });
};

const TickIcon: FC<{ className: string }> = ({ className }) => (
  <SVG src={tickIcon} className={className} />
);

export const SortingMenu: FC<ISortingMenu> = memo(({ sorting }) => {
  const { formatMessage } = useIntl();
  const { isOpen, toggleOpen, close } = useMenuState();

  return (
    <Menu
      isOpen={isOpen}
      onClose={close}
      dropdownXOffset={-44}
      isCloseOnItemClickDisabled
      button={
        <Link colorClassName="hover:text-black" className="formatted-link flex items-center" onClick={toggleOpen}>
          <Text variant="caption" className="font-medium inline-block color-primary">
            {sorting.type === SortingType.Recent ? formatMessage({ id: 'lastUsed' }) : formatMessage({ id: 'title' })}
          </Text>
          {(sorting.type === SortingType.Recent || sorting.type === SortingType.Alpha) && (
            <SVG
              src={chevronDownIcon}
              className={cx('nordpass-svg inline-block relative color-primary', sorting.sort === SortingDirection.Desc && 'rotate-180')}
            />
          )}
        </Link>
      }
    >
      <div className="sorting-column-menu">
        <Text className="font-medium uppercase py-1 px-3 text-grey" variant="overline">
          {formatMessage({ id: 'sortingOrder' })}
        </Text>

        <MenuItem onClick={() => setSorting(sorting.type, SortingDirection.Asc)}>
          <Text className="font-medium flex items-center" variant="caption">
            <TickIcon
              className={cx(
                'sorting-tick pointer-events-none',
                sorting.sort === SortingDirection.Asc ? 'opacity-100' : 'opacity-0',
              )}
            />
            {formatMessage({ id: 'ascending' })}
          </Text>
        </MenuItem>

        <MenuItem onClick={() => setSorting(sorting.type, SortingDirection.Desc)}>
          <Text className="font-medium flex items-center" variant="caption">
            <TickIcon
              className={cx(
                'sorting-tick pointer-events-none',
                sorting.sort === SortingDirection.Desc ? 'opacity-100' : 'opacity-0',
              )}
            />
            {formatMessage({ id: 'descending' })}
          </Text>
        </MenuItem>

        <div className="border-t border-primary-accent-1 divider" />

        <Text className="font-medium uppercase py-1 px-3 text-grey" variant="overline">
          {formatMessage({ id: 'sortBy' })}
        </Text>

        <MenuItem onClick={() => setSorting(SortingType.Alpha, sorting.sort)}>
          <Text className="font-medium flex items-center" variant="caption">
            <TickIcon
              className={cx(
                'sorting-tick pointer-events-none',
                sorting.type === SortingType.Alpha ? 'opacity-100' : 'opacity-0',
              )}
            />
            {formatMessage({ id: 'title' })}
          </Text>
        </MenuItem>

        <MenuItem onClick={() => setSorting(SortingType.Recent, sorting.sort)}>
          <Text className="font-medium flex items-center" variant="caption">
            <TickIcon
              className={cx(
                'sorting-tick pointer-events-none',
                sorting.type === SortingType.Recent ? 'opacity-100' : 'opacity-0',
              )}
            />
            {formatMessage({ id: 'lastUsed' })}
          </Text>
        </MenuItem>
      </div>
    </Menu>
  );
});
