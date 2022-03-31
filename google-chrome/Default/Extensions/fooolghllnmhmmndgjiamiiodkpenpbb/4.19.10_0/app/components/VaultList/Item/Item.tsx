import { FC, memo, MouseEvent, useCallback, useContext } from 'react';
import { isCreditCard, isNote, isPassword, isPersonalInfo } from '@common/utils/itemTypeGuards';
import cx from 'classnames';
import { ItemType, ShareStatus, SortingType } from '@common/constants';
import { FormattedMessage } from 'react-intl';
import { logError } from '@extension/common/utils';
import { IItem } from '@common/interfaces';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '@extension/common/constants';
import { shouldPreventItemOnClick } from '@common/utils/shouldPreventItemOnClick';
import { CHILD_ELEMENT_CLASSNAMES_TO_PREVENT_ON_CLICK } from '@common/constants/classNamesToPreventItemOnClick';
import Password from '../Password';
import Note from '../Note';
import CreditCard from '../CreditCard';
import PersonalInfo from '../PersonalInfo';
import SharedItem from '../SharedItem';
import { VaultItemContext } from '../VaultItemContext';
import { isItemWithHeader } from '../VaultListUtils';

interface IItemProps {
  items: Array<IItem>;
  index: number;
  query?: string;
  sortingType?: SortingType;
  itemsCount?: number;
  isTrash?: boolean;
}

interface IItemComponentProps {
  item: IItem;
  isTrash?: boolean;
}

const ItemComponent: FC<IItemComponentProps> = ({ item, isTrash }) => {
  if (isPassword(item)) {
    return <Password item={item} isTrash={isTrash} />;
  }
  if (isNote(item)) {
    return <Note item={item} isTrash={isTrash} />;
  }
  if (isCreditCard(item)) {
    return <CreditCard item={item} isTrash={isTrash} />;
  }
  if (isPersonalInfo(item)) {
    return <PersonalInfo item={item} isTrash={isTrash} />;
  }
  return null;
};

const Item: FC<IItemProps> = ({
  items, index, itemsCount, query, sortingType, isTrash,
}) => {
  const { isContextOpen } = useContext(VaultItemContext);
  const item = items[index];
  const isHeaderVisible = isItemWithHeader(items, index, query ? undefined : sortingType);
  const { push } = useHistory();

  const firstItemChar = item.title?.charAt(0).toLowerCase();
  const isSharedAndPendingItem = item.shared && item.share_status === ShareStatus.Pending;

  const handleClick = useCallback((event: MouseEvent) => {
    const shouldPreventOnClick = shouldPreventItemOnClick(
      event.target as HTMLElement,
      CHILD_ELEMENT_CLASSNAMES_TO_PREVENT_ON_CLICK,
    );

    if (!shouldPreventOnClick) {
      if (isSharedAndPendingItem && item.type === ItemType.Unknown) {
        push({ pathname: ROUTES.PENDING_ITEM(encodeURIComponent(item.uuid)) });
      } else if (isTrash) {
        push({ pathname: ROUTES.VIEW_TRASH_ITEM(item.uuid) });
      } else {
        push({ pathname: ROUTES.VIEW_ITEM(item.uuid) });
      }
    }
  }, [isSharedAndPendingItem, push, isTrash, item]);

  if (!item) {
    logError('Item:', 'item is null');
    return null;
  }

  return (
    <li>
      {isHeaderVisible && (
        <div className="flex items-center px-4 pt-3 pb-1 capitalize w-full text-micro font-bold color-primary">
          {isSharedAndPendingItem ? <FormattedMessage id="newItems" /> : firstItemChar}
        </div>
      )}

      <div className="vault-item flex items-center">
        <div
          role="presentation"
          className={cx(
            'vault-item-data relative flex flex-1 items-center px-4 py-2 min-w-0 hover:bg-primary-accent-1 cursor-pointer',
            isContextOpen && 'selected',
          )}
          onClick={handleClick}
        >
          {isSharedAndPendingItem ?
            <SharedItem itemsCount={itemsCount} item={item} /> :
            (
              <div className="flex flex-1 items-center min-w-0">
                <ItemComponent item={item} isTrash={isTrash} />
              </div>
            )}
        </div>
      </div>
    </li>
  );
};

export default memo(Item);
