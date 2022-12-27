import { useMemo } from 'react';
import { useHistory } from '@docusaurus/router';
import { checkNewAccessToRoute, getAllowedRoutes } from '../utils';
import { RestrictedHref } from '../types';

export const useRouteAllowance = (routeHref: RestrictedHref) => {
  const {
    location: { pathname: path },
  } = useHistory();

  const isNewAccessToRoute = checkNewAccessToRoute(routeHref, path);

  return useMemo(
    () => ({
      isNewAccessToRoute,
      allowedRoutes: getAllowedRoutes(routeHref, isNewAccessToRoute),
    }),
    []
  );
};
