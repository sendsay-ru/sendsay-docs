/* eslint-disable import/no-unresolved */
import React, { ComponentProps } from 'react';
import type SidebarType from '@theme/DocPage/Layout/Sidebar';
import Sidebar from '@theme-original/DocPage/Layout/Sidebar';
import { isEmbedded } from '../../../utils';

type Props = ComponentProps<typeof SidebarType>;

const SidebarWrapper = (props: Props): JSX.Element => {
  const embedded = isEmbedded(window.location);

  return <>{!embedded && <Sidebar {...props} />}</>;
};

export default SidebarWrapper;
