import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const withBrowserWrapper = (Component) =>
  function (props) {
    return <BrowserOnly>{() => <Component {...props} />}</BrowserOnly>;
  };
