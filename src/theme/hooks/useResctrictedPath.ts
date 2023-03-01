import { useLayoutEffect } from 'react';
import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { checkAllowedRoutes, ResctrictedAccessStorage, checkHiddenSidebarItem } from '../utils';
import { RestrictedHref } from '../types';
import { useRouteAllowance } from './useRouteAllowance';

export const useResctrictedPath = (item: PropSidebarItem | any) => {
  const isStorageAllowed = useIsBrowser();
  const routeHref = (item.customProps?.restrictedAccessHref) as RestrictedHref

  const { allowedRoutes, isNewAccessToRoute } = useRouteAllowance(routeHref, {
    isStorageAllowed,
    type: item.type
  });

  useLayoutEffect(() => {
    if (isNewAccessToRoute && isStorageAllowed) {
      ResctrictedAccessStorage.setJSON(allowedRoutes);
    }
  }, [isStorageAllowed, isNewAccessToRoute]);

  if (item.type === 'link') {
    console.log('!!', item.label, !checkAllowedRoutes(allowedRoutes, routeHref), allowedRoutes)
  }

  return {
    isRestricted: checkHiddenSidebarItem(item) || !checkAllowedRoutes(allowedRoutes, routeHref),
  };
};
