import { FC, useCallback, memo } from 'react';
import ReactList from 'react-list';
import cx from 'classnames';
import { IItem } from '@common/interfaces';
import { ISorting } from '@extension/common/interfaces/sorting';
import { FormattedMessage } from 'react-intl';
import { VaultType } from '@common/constants';
import StarRating from '@extension/app/components/StarRating/StarRating';
import EmptyVault from './EmptyVault';
import SuggestedItems from './SuggestedItems/SuggestedItems';
import { SortingMenu } from './SortingMenu/SortingMenu';
import Item from './Item/Item';
import { getItemHeight } from './VaultListUtils';

import './index.scss';
import VaultItemContextProvider from './VaultItemContext';

const itemsRenderer = (items: Array<JSX.Element>, ref: string) => <ul ref={ref}>{items}</ul>;

interface IVaultListProps {
  items: Array<IItem>;
  query: string;
  vaultType: VaultType;
  sorting: ISorting;
  isTrash?: boolean;
}

export interface IItemTypeProps<TItemType> {
  item: TItemType;
  isTrash: boolean;
}

const VaultList: FC<IVaultListProps> = ({ items, query, vaultType, sorting, isTrash = false }) => {
  const { type: sortingType } = sorting;
  // TODO: on return from item scrollTo that item
  const listItem = useCallback(
    index => (
      <VaultItemContextProvider key={items[index].uuid}>
        <Item
          items={items}
          index={index}
          itemsCount={items.length}
          query={query}
          sortingType={sortingType}
          isTrash={isTrash}
        />
      </VaultItemContextProvider>
    ),
    [isTrash, items, query, sortingType],
  );

  const itemSizeGetter = useCallback(
    index => getItemHeight(items, index, query ? undefined : sortingType),
    [items, query, sortingType],
  );

  return (
    <>
      <StarRating vaultItemsLength={items?.length} />
      <div
        className={cx(
          'vault flex-1 relative bg-primary',
          !items?.length && 'h-full flex justify-center',
        )}
      >
        {items?.length ? (
          <>
            {!query && <SuggestedItems items={items} />}
            <div className="flex px-4">
              <span className="text-micro mr-1 truncate color-primary-accent-1">
                {query ? (
                  <span className="truncate">
                    <FormattedMessage id="searchResultsFor" />
                    <span className="color-primary ml-1">{`"${query}"`}</span>
                  </span>
                ) : (
                  <FormattedMessage id="sortBy" />
                )}
              </span>
              {!query && <SortingMenu sorting={sorting} />}
            </div>
            <div className="pb-16">
              <ReactList
                itemRenderer={listItem}
                itemsRenderer={itemsRenderer}
                itemSizeGetter={itemSizeGetter}
                length={items.length}
                type="variable"
                minSize={6}
              />
            </div>
          </>
        ) : (
          <EmptyVault type={vaultType} search={query} />
        )}
      </div>
    </>
  );
};

export default memo(VaultList);
