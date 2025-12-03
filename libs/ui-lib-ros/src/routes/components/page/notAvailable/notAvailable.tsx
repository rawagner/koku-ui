import Unavailable from '@patternfly/react-component-groups/dist/esm/UnavailableContent';
import { PageSection } from '@patternfly/react-core';
import React from 'react';

import { PageHeader, PageHeaderTitle } from '../../../../init';

interface NotAvailableOwnProps {
  title?: string;
}

type NotAvailableProps = NotAvailableOwnProps;

const NotAvailable = ({ title }: NotAvailableProps) => {
  return (
    <>
      {title && (
        <PageHeader>
          <PageHeaderTitle title={title} />
        </PageHeader>
      )}
      <PageSection hasBodyWrapper={false}>
        <Unavailable />
      </PageSection>
    </>
  );
};

export default NotAvailable;
