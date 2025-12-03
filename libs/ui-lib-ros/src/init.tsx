import type { PropsWithChildren } from 'react';

export let PageHeader: React.ComponentType<PropsWithChildren>;
export let PageHeaderTitle: React.ComponentType<{ title: React.ReactNode }>;

export let navToggleResizer: (handleResize: VoidFunction) => VoidFunction;

export let useIsProjectLinkToggleEnabled: () => boolean;
export let useIsBoxPlotToggleEnabled: () => boolean;

export interface InitUIProps {
  PageHeader: typeof PageHeader;
  PageHeaderTitle: typeof PageHeaderTitle;
  navToggleResizer: typeof navToggleResizer;
  useIsProjectLinkToggleEnabled: typeof useIsProjectLinkToggleEnabled;
  useIsBoxPlotToggleEnabled: typeof useIsBoxPlotToggleEnabled;
}

export const initUILib = (props: InitUIProps) => {
  PageHeader = props.PageHeader;
  PageHeaderTitle = props.PageHeaderTitle;

  navToggleResizer = props.navToggleResizer;
  useIsProjectLinkToggleEnabled = props.useIsProjectLinkToggleEnabled;
  useIsBoxPlotToggleEnabled = props.useIsBoxPlotToggleEnabled;
};
