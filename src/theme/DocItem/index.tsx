import React, { ComponentProps } from 'react';
import type DocItemType from '@theme/DocItem';
import DocItem from '@theme-original/DocItem';
import BrowserOnly from '@docusaurus/BrowserOnly';
import RemoveHeaderInIframe from '../../components/RemoveHeaderInIframe';

type Props = ComponentProps<typeof DocItemType>;

const DocItemWrapper = (props: Props): JSX.Element => (
  <>
    <BrowserOnly>{() => <RemoveHeaderInIframe {...props} />}</BrowserOnly>
    <DocItem {...props} />
  </>
);

export default DocItemWrapper;
