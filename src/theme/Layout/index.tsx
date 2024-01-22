import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { useMutationObserver } from '../hooks';
import { CARROT_QUEST_MUTATION_PARAMS } from './support';

type Props = WrapperProps<typeof LayoutType>;

const LayoutWrapper = (props: Props): JSX.Element => {
  useMutationObserver(CARROT_QUEST_MUTATION_PARAMS);

  return (
    <>
      <Layout {...props} />
    </>
  );
};

export default LayoutWrapper;
