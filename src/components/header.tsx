import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { colors } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  LinkedIn as LinkedInLogo,
  GitHub as GitHubLogo,
} from '@material-ui/icons';
import { FaStackOverflow as StackOverflowLogo } from 'react-icons/fa';

import {
  myGitHubAccount,
  myLinkedInAccount,
  myStackOverflowAccount,
} from '@/utils';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const classes = useStyles();
  const [headerScroll, setHeaderScroll] = useState<boolean>(false);

  const handleHeaderScrollAnimation = (): void => {
    const { scrollY } = window;
    scrollY > 50 ? setHeaderScroll(true) : setHeaderScroll(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleHeaderScrollAnimation);
    return () =>
      document.removeEventListener('scroll', handleHeaderScrollAnimation);
  }, []);

  return (
    <header
      className={`${classes.headerWrapper} ${
        headerScroll ? classes.headerWrapperScrollAnimation : ''
      }`}
    >
      <section className={classes.leftSection}>
        <nav className={classes.navWrapper}>
          <a
            className={classes.navLink}
            href={myLinkedInAccount}
            target="_blank"
          >
            <LinkedInLogo className={classes.logo} />
          </a>
          <a className={classes.navLink} href={myGitHubAccount} target="_blank">
            <GitHubLogo className={classes.logo} />
          </a>
          <a
            className={classes.navLink}
            href={myStackOverflowAccount}
            target="_blank"
          >
            <StackOverflowLogo className={classes.logo} />
          </a>
        </nav>
      </section>
      <section className={classes.centerSection}></section>
      <section className={classes.rightSection}>
        <nav className={classes.navWrapper}>
          <Link className={classes.navLink} to="/">
            Home
          </Link>
          <Link className={classes.navLink} to="/about">
            About
          </Link>
          <Link className={classes.navLink} to="/projects">
            Projects
          </Link>
          <Link className={classes.navLink} to="/blog">
            Blog
          </Link>
        </nav>
      </section>
    </header>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    headerWrapper: {
      background: 'transparent',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      top: 0,
      left: 0,
      right: 0,
      padding: '1.4rem 2rem',
      position: 'fixed',
      zIndex: 1333,
      transition: 'all .5s ease',
    },
    headerWrapperScrollAnimation: {
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      background: colors.blue[600],
    },
    leftSection: {
      float: 'left',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    centerSection: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    rightSection: {
      float: 'right',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
    },
    navLink: {
      textDecoration: 'none',
      display: 'flex',
      lineHeight: 1,
      fontSize: '1.1rem',
      textTransform: 'uppercase',
      color: colors.grey[50],
      transition: 'all .5s ease',
      margin: '0 1rem',
      '&:hover': {
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        padding: '1rem',
        borderRadius: '8px'
      },
    },
    logo: {
      width: '2rem',
      height: '2rem',
    },
    navWrapper: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  })
);
