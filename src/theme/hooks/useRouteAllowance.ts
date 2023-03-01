import { useHistory } from '@docusaurus/router';
import { checkNewAccessToRoute, getAllowedRoutes } from '../utils';
import { RestrictedHref, AllowedRoutesOptions } from '../types';

export const useRouteAllowance = (routeHref: RestrictedHref, options: AllowedRoutesOptions) => {
  const {
    location: { pathname: path },
  } = useHistory();

  const isNewAccessToRoute = checkNewAccessToRoute(routeHref, path);
  const allowedRoutes = getAllowedRoutes(routeHref, {
    ...options,
    isNewAccessToRoute,
  });

  return {
    isNewAccessToRoute,
    allowedRoutes,
  };
};
