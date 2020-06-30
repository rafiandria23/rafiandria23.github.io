import React, { ReactNode, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  ThemeProvider,
  Theme,
} from '@material-ui/core/styles';
import aos from 'aos';

import { theme } from '@/styles';
import Header from './header';
import Footer from './footer';

// Style Imports
import 'fontsource-roboto';
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
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: '100vh',
      '& > section:first-child': {
        height: '100vh'
      },
    },
  })
);
