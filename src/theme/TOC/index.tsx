/* eslint-disable import/no-unresolved */
import React, { ComponentProps } from 'react';
import type TOCType from '@theme/TOC';
import TOC from '@theme-original/TOC';
import { isEmbedded, withBrowserWrapper } from '../utils';

type Props = ComponentProps<typeof TOCType>;

const TOCWrapper = (props: Props): JSX.Element => {
  const embedded = isEmbedded(window.location);

  return <>{!embedded && <TOC {...props} />}</>;
};

export default withBrowserWrapper(TOCWrapper);
