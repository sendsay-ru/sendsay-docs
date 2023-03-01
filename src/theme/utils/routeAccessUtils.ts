import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  ResctrictedAccessItems,
  ResctrictedAccessStatus,
  PropSidebarItemType,
  RestrictedHref,
  ResctrictedAccessItem,
  ResctrictedAccessStorageKeys,
  AllowedRoutesOptions
} from '../types';
import { ResctrictedAccessStorage } from './ResctrictedAccessStorage';
import { HIDDEN_CATEGORIES_LABELS } from '../constants';

const getRoutesFromStorage = (): ResctrictedAccessItems =>
  ResctrictedAccessStorage.getJSON<ResctrictedAccessItems>() ?? {};

export const getAllowedRoutes = (
  newRouteHref: string,
  { isStorageAllowed, type, isNewAccessToRoute }: AllowedRoutesOptions
) => {
  const previouslyAccessed: ResctrictedAccessItems = isStorageAllowed ? getRoutesFromStorage() : {};

  if (!isNewAccessToRoute) {
    return previouslyAccessed;
  }

  const storeKey = type === PropSidebarItemType.Category
    ? ResctrictedAccessStorageKeys.Categories
    : ResctrictedAccessStorageKeys.Articles

  return {
    ...previouslyAccessed,
    [storeKey]: {
      ...(previouslyAccessed[storeKey] ?? {}),
      [newRouteHref]: ResctrictedAccessStatus.Allowed,
    },
  };
};

export const checkAllowedRoutes = (allowedRoutes: ResctrictedAccessItems, routeHref: string) => {
  if (!routeHref) {
    return true;
  }

  return Object.values(allowedRoutes).reduce(
    (acc: boolean, routes: ResctrictedAccessItem) =>
      acc || routes[routeHref] === ResctrictedAccessStatus.Allowed,
    false
  );
};

export const checkNewAccessToRoute = (routeHref: RestrictedHref, path: string) => path.includes(routeHref)

// export const getRouteWithNewAccess = (routeHrefs: RestrictedHref, path: string) => routeHrefs
//   .filter((route) => path.includes(route))
//   .sort((a, b) => a.length - b.length)[0];

export const checkHiddenSidebarItem = (item: PropSidebarItem) =>
  item.type === PropSidebarItemType.Category
    ? HIDDEN_CATEGORIES_LABELS.includes(item.label)
    : false;
