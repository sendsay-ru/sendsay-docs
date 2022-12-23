import { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';

const HIDDEN_CATEGORIES_LABELS = ['en'];

const checkFirstPageUrl = (href: string, firstPagePath: string) =>
  firstPagePath.split('/').includes(href);

export const checkHiddenCategory = (categoryInfo: PropSidebarItemLink, firstPagePath: string) => {
  const { label, customProps: { restrictedAccessHref } = {} } = categoryInfo;

  if (restrictedAccessHref) {
    return !checkFirstPageUrl(restrictedAccessHref as string, firstPagePath);
  }

  return HIDDEN_CATEGORIES_LABELS.includes(label);
};
