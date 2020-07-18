import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Tooltip,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
  const [animatedHeader, setAnimatedHeader] = useState<boolean>(false);

  const _handleScrollAnimation = (): void => {
    const { scrollY } = window;
    scrollY < 50 ? setAnimatedHeader(false) : setAnimatedHeader(true);
  };

  useEffect(() => {
    document.addEventListener('scroll', _handleScrollAnimation);
    return () => document.removeEventListener('scroll', _handleScrollAnimation);
  }, []);

  const _goTo = (target: string): void => {
    navigate(target);
  };

  return (
    <Container
      classes={{
        root: classes.headerWrapper,
      }}
      component={`header`}
    >
      <AppBar
        classes={{
          root: `${classes.appBar} ${
            animatedHeader ? classes.appBarAnimated : classes.appBarUnanimated
          }`,
        }}
      >
        <Toolbar>
          <section className={classes.socialSection}>
            <Tooltip
              title={`Adam Rafiandri on LinkedIn`}
              aria-label={`Adam Rafiandri on LinkedIn`}
            >
              <IconButton
                color={`inherit`}
                href={myLinkedInAccount}
                target={`_blank`}
              >
                <LinkedInLogo />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={`Adam Rafiandri on GitHub`}
              aria-label={`Adam Rafiandri on GitHub`}
            >
              <IconButton
                color={`inherit`}
                href={myGitHubAccount}
                target={`_blank`}
              >
                <GitHubLogo />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={`Adam Rafiandri on Stack Overflow`}
              aria-label={`Adam Rafiandri on Stack Overflow`}
            >
              <IconButton
                color={`inherit`}
                href={myStackOverflowAccount}
                target={`_blank`}
              >
                <StackOverflowLogo />
              </IconButton>
            </Tooltip>
          </section>

          <Button color={`inherit`} onClick={() => _goTo(`/`)}>
            Home
          </Button>
          <Button color={`inherit`} onClick={() => _goTo(`/about`)}>
            About
          </Button>
          {/* <Button color={`inherit`} onClick={() => _goTo(`/projects`)}>
            Projects
          </Button> */}
          <Button color={`inherit`} onClick={() => _goTo(`/blog`)}>
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerWrapper: {
      flexGrow: 1,
    },
    socialSection: {
      flexGrow: 1,
    },
    appBar: {
      transition: 'all .5s ease',
    },
    appBarUnanimated: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    appBarAnimated: {},
  })
);
