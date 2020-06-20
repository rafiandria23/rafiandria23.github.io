import React, { ReactNode, useEffect } from 'react';
import { colors } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import aos from 'aos';

import Header from './header';
import Footer from './footer';

// Style Imports
import '@/styles/index.scss';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles();

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <Header />
      <main className={classes.mainWrapper}>{children}</main>
      <Footer />
    </>
  );
};

const useStyles = makeStyles(() => createStyles({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: '100vh'
  }
}));
