import React, { memo } from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common/internal';
import { checkHiddenCategory } from '../utils';
import { useFirstPagePath } from '../hooks';

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
const DocSidebarItems = ({ items, ...props }) => {
  const firstPagePath = useFirstPagePath();

  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => {
        if (checkHiddenCategory(item, firstPagePath)) {
          return null;
        }

        return <DocSidebarItem key={index} item={item} index={index} {...props} />;
      })}
    </DocSidebarItemsExpandedStateProvider>
  );
};

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
