import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import {
  ResctrictedAccessItems,
  ResctrictedAccessItem,
  ResctrictedAccessStatus,
  PropSidebarItemType,
  RestrictedHref,
} from '../types';
import { ResctrictedAccessStorage } from './ResctrictedAccessStorage';

const HIDDEN_CATEGORIES_LABELS = ['en'];

const getRoutesFromStorage = (): ResctrictedAccessItems =>
  ResctrictedAccessStorage.getJSON<ResctrictedAccessItems>() ?? {};

export const getAllowedRoutes = (routeHref: string, isNewAccessToRoute: boolean) => {
  const previouslyAccessed = getRoutesFromStorage();

  if (!isNewAccessToRoute) {
    return previouslyAccessed;
  }

  return {
    ...previouslyAccessed,
    categories: {
      ...previouslyAccessed.categories,
      [routeHref]: ResctrictedAccessStatus.Allowed,
    },
  };
};

export const checkAllowedRoutes = (allowedRoutes: ResctrictedAccessItems, routeHref: string) => {
  if (!routeHref) {
    return true;
  }

  return Object.values(allowedRoutes).reduce(
    (acc: boolean, type: ResctrictedAccessItem) =>
      acc || type[routeHref] === ResctrictedAccessStatus.Allowed,
    false
  );
};

export const checkNewAccessToRoute = (routeHref: RestrictedHref, path: string) =>
  path.includes(routeHref);

export const checkHiddenSidebarItem = (item: PropSidebarItem) =>
  item.type === PropSidebarItemType.Category
    ? HIDDEN_CATEGORIES_LABELS.includes(item.label)
    : false;
