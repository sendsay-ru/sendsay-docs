import { getAllowedRoutes, flatRoutesResponse } from './routeAccessUtils';
import restrictedAccessRoutes from '../../../config/restrictedAccessRoutes.json';

const checkPartialExistanceInArray = (target: string, supportArray: string[]) =>
  supportArray.some((item) => target.includes(item));

const filterRestrictedRoutes = (restrictedRoutes: string[], itemsToExclude: string[]) =>
  restrictedRoutes.filter(
    (restrictedRoute) => !checkPartialExistanceInArray(restrictedRoute, itemsToExclude)
  );

export const filterSearchExcludeOptions = (searchDocs, isStorageAllowed: boolean) => {
  const allowedRoutes = getAllowedRoutes({ isStorageAllowed });
  const flatAllowedRoutes = flatRoutesResponse(allowedRoutes);
  const filteredRestrictedRoutes = filterRestrictedRoutes(
    restrictedAccessRoutes,
    flatAllowedRoutes
  );

  return searchDocs.filter(
    ({ url }) => !checkPartialExistanceInArray(url, filteredRestrictedRoutes)
  );
};
