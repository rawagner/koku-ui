import { PageSection } from '@patternfly/react-core';
import React from 'react';

import { PageHeader, PageHeaderTitle } from '../../../../init';
import { WelcomeState } from './welcomeState';

interface WelcomeOwnProps {
  title?: string;
}

const Welcome = ({ title }: WelcomeOwnProps) => {
  return (
    <>
      {title && (
        <PageHeader>
          <PageHeaderTitle title={title} />
        </PageHeader>
      )}
      <PageSection hasBodyWrapper={false}>
        <WelcomeState />
      </PageSection>
    </>
  );
};

export default Welcome;
