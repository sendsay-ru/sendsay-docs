import React from 'react';
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useDocById } from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { CardLayout } from '../CardLayout';

interface CardLinkProps {
  item: PropSidebarItemLink;
}

const CardLink = ({ item }: CardLinkProps): JSX.Element => {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
    />
  );
};

export default CardLink;
