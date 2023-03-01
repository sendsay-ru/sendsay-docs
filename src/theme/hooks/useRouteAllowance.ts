import { useHistory } from '@docusaurus/router';
import { checkNewAccessToRoute, getAllowedRoutes } from '../utils';
import { RestrictedHref, AllowedRoutesOptions } from '../types';

export const useRouteAllowance = (newRouteHref: RestrictedHref, options: AllowedRoutesOptions) => {
  const {
    location: { pathname: path },
  } = useHistory();

  const isNewAccessToRoute = checkNewAccessToRoute(newRouteHref, path);
  const allowedRoutes = getAllowedRoutes({
    newRouteHref,
    ...options,
    isNewAccessToRoute,
  });

  return {
    isNewAccessToRoute,
    allowedRoutes,
  };
};
