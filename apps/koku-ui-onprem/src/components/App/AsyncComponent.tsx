import React, { lazy } from 'react';

const OptimizationsBreakdown = lazy(
  () => import(/* webpackChunkName: "recommendations" */ '@koku-ui/ui-lib-ros/fed-modules/optimizationsBadgeWrapper')
);
const OptimizationsDetails = lazy(
  () => import(/* webpackChunkName: "recommendations" */ '@koku-ui/ui-lib-ros/fed-modules/optimizationsDetailsWrapper')
);
const OptimizationsLink = lazy(
  () => import(/* webpackChunkName: "recommendations" */ '@koku-ui/ui-lib-ros/fed-modules/optimizationsLinkWrapper')
);
const OptimizationsSummary = lazy(
  () => import(/* webpackChunkName: "recommendations" */ '@koku-ui/ui-lib-ros/fed-modules/optimizationsSummaryWrapper')
);
const OptimizationsTable = lazy(
  () => import(/* webpackChunkName: "recommendations" */ '@koku-ui/ui-lib-ros/fed-modules/optimizationsTableWrapper')
);

export const AsyncComponent = props => {
  switch (props.module) {
    case './OptimizationsBreakdown':
      return <OptimizationsBreakdown {...props} />;
    case './OptimizationsDetails':
      return <OptimizationsDetails {...props} />;
    case './OptimizationsLink':
      return <OptimizationsLink {...props} />;
    case './OptimizationsSummary':
      return <OptimizationsSummary {...props} />;
    case './OptimizationsTable':
      return <OptimizationsTable {...props} />;
  }
  return <div />;
};
