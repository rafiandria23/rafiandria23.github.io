import React from 'react';
import { Link } from 'gatsby';
import { colors } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Instagram as InstagramLogo } from '@material-ui/icons';
import { FaFacebookF as FacebookLogo } from 'react-icons/fa';

import { myFacebookAccount, myInstagramAccount } from '@/utils';

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  const classes = useStyles();

  return (
    <footer className={classes.footerWrapper}>
      <section className={classes.leftSection}>
        <Link className={classes.navLink} to="/">
          &copy; 2020 Adam Rafiandri.
        </Link>
      </section>
      <section className={classes.centerSection}>
        <nav className={classes.navWrapper}>
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
      <section className={classes.rightSection}>
        <nav className={classes.navWrapper}>
          <a className={classes.navLink} href={myFacebookAccount} target="_blank">
            <FacebookLogo className={classes.logo} />
          </a>
          <a className={classes.navLink} href={myInstagramAccount} target="_blank">
            <InstagramLogo className={classes.logo} />
          </a>
        </nav>
      </section>
    </footer>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    footerWrapper: {
      background: colors.blue[900],
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1.6rem 2rem',
    },
    leftSection: {
      float: 'left',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%'
    },
    centerSection: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%'
    },
    rightSection: {
      float: 'right',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%'
    },
    navWrapper: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    navLink: {
      textDecoration: 'none',
      display: 'flex',
      lineHeight: 1,
      fontSize: '1.1rem',
      textTransform: 'uppercase',
      color: colors.grey[50],
      transition: 'color .5s ease',
      margin: '0 1rem',
      '&:hover': {
        color: colors.grey[300],
      },
    },
    logo: {
      width: '2rem',
      height: '2rem',
    },
  })
);
