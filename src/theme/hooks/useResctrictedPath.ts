import { useLayoutEffect, useMemo } from 'react';
import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { checkAllowedRoutes, ResctrictedAccessStorage, checkHiddenSidebarItem } from '../utils';
import { RestrictedHref } from '../types';
import { useRouteAllowance } from './useRouteAllowance';

export const useResctrictedPath = (item: PropSidebarItem) => {
  const routeHref = item.customProps?.restrictedAccessHref as RestrictedHref;

  const { allowedRoutes, isNewAccessToRoute } = useRouteAllowance(routeHref);

  useLayoutEffect(() => {
    if (isNewAccessToRoute) {
      ResctrictedAccessStorage.setJSON(allowedRoutes);
    }
  }, []);

  return useMemo(
    () => ({
      isRestricted: checkHiddenSidebarItem(item) || !checkAllowedRoutes(allowedRoutes, routeHref),
    }),
    []
  );
};
