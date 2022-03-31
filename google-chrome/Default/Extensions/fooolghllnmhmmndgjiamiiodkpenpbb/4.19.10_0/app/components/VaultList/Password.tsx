import { FC, memo } from 'react';
import { Text } from '@nord/ui';
import { useIntl } from 'react-intl';
import { logError, openInNewTab } from '@extension/common/utils';
import * as launchIcon from '@icons/24/launch.svg';
import TrashItemActions from '@extension/app/components/VaultList/TrashItemActions';
import { IItemTypeProps } from '@extension/app/components/VaultList/VaultList';
import ActionButton from '@common/components/ActionButton/ActionButton';
import { IPasswordItem } from '@common/contracts/contracts';
import PasswordIcon from '@common/components/PasswordIcon/PasswordIcon';
import ItemMenu from './ItemMenu/ItemMenu';

const Password: FC<IItemTypeProps<IPasswordItem>> = ({ item, isTrash }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="w-third flex flex-1 items-center overflow-hidden">
        <PasswordIcon
          logError={logError}
          title={item.title}
          url={item.url}
          className="rounded-image-8px item-image-32px my-1"
          uuid={item.uuid}
        />

        <div className="flex-1 min-w-0 px-4 overflow-hidden">
          <Text className="truncate color-primary" variant="body2">
            {item.title}
          </Text>
          <Text className="truncate color-primary-accent-1" variant="caption">
            {item.username}
          </Text>
        </div>
      </div>
      <div className="vault-item-actions flex">
        {isTrash ? (
          <TrashItemActions item={item} />
        ) : (
          <>
            {item.url && (
              <ActionButton
                className="mr-2 inline-block"
                tooltipText={formatMessage({ id: 'launchWebsite' })}
                tooltipId={`launch-${item.uuid}`}
                icon={launchIcon}
                onClick={() => openInNewTab(item.url.startsWith('http') ? item.url : `https://${item.url}`, true)}
              />
            )}
            <ItemMenu item={item} />
          </>
        )}
      </div>
    </>
  );
};

export default memo(Password);
