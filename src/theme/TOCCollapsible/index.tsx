/* eslint-disable import/no-unresolved */
import React, { ComponentProps } from 'react';
import type TOCCollapsibleType from '@theme/TOCCollapsible';
import TOCCollapsible from '@theme-original/TOCCollapsible';
import { isEmbedded, withBrowserWrapper } from '../utils';

type Props = ComponentProps<typeof TOCCollapsibleType>;

const TOCCollapsibleWrapper = (props: Props): JSX.Element => {
  const embedded = isEmbedded(window.location);

  return <>{!embedded && <TOCCollapsible {...props} />}</>;
};

export default withBrowserWrapper(TOCCollapsibleWrapper);
