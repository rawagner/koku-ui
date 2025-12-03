import { PageSection } from '@patternfly/react-core';
import React from 'react';

import { PageHeader, PageHeaderTitle } from '../../../../init';
import { NoOptimizationsState } from './noOptimizationsState';

interface NoOptimizationsOwnProps {
  title?: string;
}

type NoOptimizationsProps = NoOptimizationsOwnProps;

const NoOptimizations = ({ title }: NoOptimizationsProps) => {
  return (
    <>
      {title && (
        <PageHeader>
          <PageHeaderTitle title={title} />
        </PageHeader>
      )}
      <PageSection hasBodyWrapper={false}>
        <NoOptimizationsState />
      </PageSection>
    </>
  );
};

export default NoOptimizations;
