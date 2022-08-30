/* eslint-disable import/no-unresolved */
import React, { ComponentProps } from 'react';
import type NavbarType from '@theme/Navbar';
import Navbar from '@theme-original/Navbar';
import { isEmbedded } from '../utils';

type Props = ComponentProps<typeof NavbarType>;

const NavbarWrapper = (props: Props): JSX.Element => {
  if (isEmbedded(window.location)) {
    return <div style={{ display: 'none' }} className="navbar" />;
  }

  return (
    <>
      <Navbar {...props} />
    </>
  );
};

export default NavbarWrapper;
