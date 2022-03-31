import { memo, useEffect, useState, FC } from 'react';
import { useIntl } from 'react-intl';
import { Button, Image, Link, Text, SVG } from '@nord/ui';
import { Storage } from '@extension/common/constants';
import StorageApi from '@extension/browser/storageApi';
import clearIcon from '@icons/16/clear.svg';
import { useOrganizationContext } from '@extension/app/context/OrganizationContext';
import { api } from '@extension/app/api';

const OrganizationBar: FC = () => {
  const { formatMessage } = useIntl();
  const [show, setShow] = useState(true);
  const { invitations, organizationData } = useOrganizationContext();

  const hasInvitation = invitations?.length && !organizationData?.organization;

  useEffect(() => {
    (async () => {
      const result = await StorageApi.get({ [Storage.showOrganizationBar]: true });
      setShow(result[Storage.showOrganizationBar]);
    })();
  });

  if (!hasInvitation || !show) {
    return null;
  }

  const close = () => {
    StorageApi.set({ [Storage.showOrganizationBar]: false });
    setShow(false);
  };

  const openOrgInvite = async () => {
    await api.extension.openApp('/organization-invite');
  };

  return (
    <div className="alert-fade-in bg-purple-lightest p-4 mx-4 mb-4 rounded-8px">
      <div className="flex">
        <Image
          className="mr-4 rounded-full"
          width={48}
          height={48}
          responsive={false}
          src="icons/32/organisation-join.svg"
        />
        <div className="ml-1">
          <div className="text-base text-black leading-tight">{formatMessage({ id: 'pendingInvite' })}</div>
          <Text variant="caption" className="text-grey-darker mt-1">
            {formatMessage({ id: 'organizationBannerText' })}
          </Text>
        </div>
        <Link colorClassName="text-grey hover:text-teal ml-4" onClick={close}>
          <SVG
            width={20}
            height={20}
            src={clearIcon}
            noLazy
          />
        </Link>
      </div>
      <Button
        className="block font-medium text-center mt-4"
        variant="contained"
        color="teal"
        size="medium"
        component="a"
        onClick={openOrgInvite}
      >
        {formatMessage({ id: 'joinNow' })}
      </Button>
    </div>
  );
};

export default memo(OrganizationBar);
