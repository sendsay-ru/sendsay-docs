import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import useIsBrowser from '@docusaurus/useIsBrowser';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type { WrapperProps } from '@docusaurus/types';
import { useResctrictedPath } from '../hooks';

type Props = WrapperProps<typeof DocSidebarItemType>;

const DocSidebarItemWithStorage = ({ item, ...restProps }: Props): JSX.Element => {
  const { isRestricted } = useResctrictedPath(item);

  if (isRestricted) {
    return null;
  }

  return <DocSidebarItem {...restProps} item={item} />;
};

const DocSidebarItemWrapper = (props: Props): JSX.Element => {
  const isBrowser = useIsBrowser();

  const DocSidebarComponent = isBrowser ? DocSidebarItemWithStorage : DocSidebarItem;

  return <DocSidebarComponent {...props} />;
};

export default DocSidebarItemWrapper;
