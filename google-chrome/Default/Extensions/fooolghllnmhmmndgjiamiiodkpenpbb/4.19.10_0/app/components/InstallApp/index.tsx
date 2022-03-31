import { useContext, useEffect } from 'react';
import { Col, Container, Image, Row, Text } from '@nord/ui';
import { FormattedMessage } from 'react-intl';
import { openInNewTab } from '@extension/common/utils';
import { ExtensionContext } from '@extension/app/context/ExtensionContext';
import SupportCard from './SupportCard';
import GetStarted from './GetStarted';

const isSafari = process.env.SAFARI === '1';

function InstallApp() {
  const { isPopup } = useContext(ExtensionContext);

  useEffect(() => {
    // TODO set bigger base html font-size and rework all pages. Responsive does not work for us.
    document.documentElement.style.fontSize = '15px';
    return () => {
      document.documentElement.style.removeProperty('font-size');
    };
  }, []);

  if (isPopup && !isSafari) {
    openInNewTab('');
    window.close();
    return null;
  }

  return (
    <div className="bg-teal-lightest text-center overflow-y-auto h-screen">
      <div className="p-4 bg-white">
        <Row gutter={false}>
          <Col sm={12}>
            <Image src="icons/logo-big.svg" className="mx-auto" noLazy />
          </Col>
        </Row>
      </div>
      <div className="pt-6 text-black leading-loose">
        <Container>
          <Text variant="h4" className="mb-2 mx-1 font-bold">
            <FormattedMessage id="getNordPassDesktopApp" />
          </Text>
          <p className="text-base text-grey-dark mb-4 mx-1 font-medium">
            <FormattedMessage id="installDesktopAppText" />
          </p>
          <GetStarted />
          <SupportCard />
        </Container>
      </div>
    </div>
  );
}

export default InstallApp;
