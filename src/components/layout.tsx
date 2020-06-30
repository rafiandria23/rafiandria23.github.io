import React, { ReactNode, useEffect } from 'react';
import { colors } from '@material-ui/core';
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core/styles';
import aos from 'aos';

import { theme } from '@/styles';
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
    <ThemeProvider theme={theme}>
      <Header />
      <main className={classes.mainWrapper}>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

const useStyles = makeStyles(() => createStyles({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: '100vh',
    '& > section:first-child': {
      paddingTop: '8vh'
    }
  }
}));
