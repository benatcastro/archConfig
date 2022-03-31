import React from 'react';
import ReactDOM from 'react-dom';
import { init, configureScope } from '@sentry/browser';
import StorageApi from '@extension/browser/storageApi';
import { Storage } from '@extension/common/constants';
import getSentryRewriteFrames from '@extension/app/utils/getSentryRewriteFrames';

import IGNORED_ERRORS_LIST from '@common/constants/ignoredErrorsList';
import App from './App';
import { sentryBeforeSend } from './utils/sentryBeforeSend';
import '@common/utils/polyfills';

import '@extension/common/style';
import './index.scss';

if (process.env.NODE_ENV === 'production') {
  (async () => {
    const result = await StorageApi.get({ [Storage.DesktopVersion]: 'unknown' });

    init({
      dsn: process.env.EXTENSION_SENTRY_PROD_DSN,
      release: process.env.EXTENSION_VERSION,
      integrations: [getSentryRewriteFrames()],
      beforeSend: sentryBeforeSend,
      ignoreErrors: IGNORED_ERRORS_LIST,
    });

    configureScope(scope => {
      scope.setTag('process_name', 'browser_extension');
      scope.setTag('desktop_version', result[Storage.DesktopVersion]);
    });
  })();
}

if (process.env.DEBUG === '1') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js'); // eslint-disable-line
  whyDidYouRender(React, {
    include: [/.+/],
    exclude: [/^T/, /^NordIntl/, /Link/, /^Route/, /^Button/, /^(Inline)?SVG/, /(Input|Field)/],
    logOnDifferentValues: false,
    collapseGroups: true,
  });
}

ReactDOM.render(<App />, document.getElementById('app'));
