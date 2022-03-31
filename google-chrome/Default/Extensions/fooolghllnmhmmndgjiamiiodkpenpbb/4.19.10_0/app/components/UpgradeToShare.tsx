import { FC } from 'react';
import { Button, Image } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { openInNewTab } from '@extension/common/utils';
import { LINKS } from '@extension/common/constants';

const UpgradeToShare: FC = () => (
  <div className="p-9 pt-20 text-center text-grey-dark max-w-650">
    <div className="flex justify-center items-center mb-3">
      <Image src="icons/72/premium.svg" />
    </div>
    <span className="color-primary my-4 text-lead font-bold">
      <FormattedMessage id="upgradeToShareTitle" />
    </span>

    <span className="mb-4 px-2 -letter-spacing-014 color-primary-accent-1 text-small inline-block">
      <FormattedMessage id="upgradeToShareText" />
    </span>

    <Button
      color="teal"
      size="small"
      className="mb-2 rounded-full w-full"
      onClick={() => openInNewTab(LINKS.UPGRADE)}
    >
      <FormattedMessage id="getPremium" />
    </Button>
  </div>
);

export default UpgradeToShare;
