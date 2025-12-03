/* eslint-disable no-console */
// TODO !!
// import messages from '@koku-ui/locales/data.json';
import UiVersion from '@koku-ui/ui-lib/components/page/uiVersion';
// TODO !!
// import IntlProvider from '@redhat-cloud-services/frontend-components-translations/Provider';
// import { getLocale } from 'components/i18n';
import React from 'react';
import { Provider } from 'react-redux';

import { rosStore } from '../store';

export interface OptimizationsWrapperOwnProps {
  children?: React.ReactNode;
}

type OptimizationsWrapperProps = OptimizationsWrapperOwnProps;

const OptimizationsWrapper: React.FC<OptimizationsWrapperProps> = ({ children }: OptimizationsWrapperOwnProps) => {
  // const locale = getLocale();

  // Note: className is a workaround for ConsoleDot outputting the app name instead of module name
  return (
    <Provider store={rosStore as any}>
      <div className="costManagementRos">{children}</div>
      <UiVersion />
    </Provider>
  );
};

export { OptimizationsWrapper };
