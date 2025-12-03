import { Routes } from '@koku-ui/ui-lib-hccm/routes';
import {
  Masthead,
  MastheadBrand,
  MastheadLogo,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavItem as PFNavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
} from '@patternfly/react-core';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    title: 'Overview',
  },
  {
    path: '/optimizations',
    title: 'Optimizations',
  },
  {
    path: '/ocp',
    title: 'OpenShift',
  },
  {
    path: '/aws',
    title: 'Amazon Web Services',
  },
  {
    path: '/gcp',
    title: 'Google Cloud',
  },
  {
    path: '/azure',
    title: 'Microsoft Azure',
  },
  {
    path: '/explorer',
    title: 'Cost Explorer',
  },
  {
    path: '/settings',
    title: 'Settings',
  },
];

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  const isMatch = useMatch(`${to}/*`);
  return (
    <PFNavItem id={to} isActive={!!isMatch}>
      <Link to={to}>{children}</Link>
    </PFNavItem>
  );
};

const AppLayout = () => {
  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton isHamburger aria-label="Global navigation" />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo component="a">Logo</MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>
        <Nav>
          <NavList>
            {routes.map(route => (
              <NavItem key={route.path} to={route.path || ''}>
                {route.title}
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page
      mainContainerId="primary-app-container"
      isManagedSidebar
      masthead={masthead}
      sidebar={sidebar}
      isContentFilled
    >
      <PageSection isFilled padding={{ default: 'noPadding' }}>
        <Routes />
      </PageSection>
    </Page>
  );
};

export default AppLayout;
