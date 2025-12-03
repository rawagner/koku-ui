import '@patternfly/patternfly/patternfly-addons.css';

import { initAPILib, type InitAPIProps } from '@koku-ui/api/init';
import { getLocale } from '@koku-ui/i18n/i18n';
import messages from '@koku-ui/locales/data.json';
import { initUILib, type InitUIProps } from '@koku-ui/ui-lib-hccm/init';
import { configureStore } from '@koku-ui/ui-lib-hccm/store';
import { initUILib as initROSUILib } from '@koku-ui/ui-lib-ros/init';
import { PageSection } from '@patternfly/react-core';
import React from 'react';
// import './styles/global.css';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppLayout from './AppLayout';
import { AsyncComponent } from './AsyncComponent';

const initLibs = () => {
  const initAPIProps: InitAPIProps = {
    setRBACFunction: async () => {
      return { isOrgAdmin: true, permissions: null };
    },
  };

  initAPILib(initAPIProps);

  const initUiProps: InitUIProps = {
    PageHeader: PageSection,
    PageHeaderTitle: () => <div />,
    AsyncComponent,
    Maintenance: () => <div />,
    Unavailable: () => <div />,
    setNotificationsFuncs: {
      useAddNotification: () => () => {},
      useClearNotifications: () => () => {},
      useNotifications: () => ({
        addNotification: () => {},
        removeNotification: () => {},
        clearNotifications: () => {},
        notifications: [],
      }),
      useRemoveNotification: () => () => {},
    },
    navToggleResizer: () => () => {},

    getUserIdentity: async () => {
      return Promise.resolve({ account_number: 'foo' });
    },
    basename: '',
  };

  initUILib(initUiProps);

  const rosLibProps = {
    PageHeader: PageSection,
    PageHeaderTitle: () => <div />,
    navToggleResizer: () => () => {},
    useIsProjectLinkToggleEnabled: () => false,
    useIsBoxPlotToggleEnabled: () => false,
  };

  initROSUILib(rosLibProps);

  return configureStore({
    // session: {
    //   token: getToken(),
    // },
  });
};

const costStore = initLibs();

// eslint-disable-next-line no-console
const onError = console.log;

const AppEntry = () => {
  const locale = getLocale();

  return (
    <BrowserRouter>
      <IntlProvider defaultLocale="en" locale={locale} messages={messages[locale]} onError={onError}>
        <Provider store={costStore}>
          <AppLayout />
        </Provider>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default AppEntry;
