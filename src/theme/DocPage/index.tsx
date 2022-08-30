/* eslint-disable import/no-unresolved */
import React, { ComponentProps } from 'react';
import type DocPageType from '@theme/DocPage';
import DocPage from '@theme-original/DocPage';
import { isEmbedded, setEmbeddedSession } from '../utils';

type Props = ComponentProps<typeof DocPageType>;

const DocPageWrapper = (props: Props): JSX.Element => {
  if (isEmbedded(window.location)) {
    setEmbeddedSession(window.location);
  }

  return (
    <>
      <DocPage {...props} />
    </>
  );
};

export default DocPageWrapper;
