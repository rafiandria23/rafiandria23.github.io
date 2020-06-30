import React from 'react';
import { navigate } from 'gatsby';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
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

  const _goTo = (
    target: string,
    type: `internal` | `external` = `internal`
  ) => {
    switch (type) {
      case `internal`:
        navigate(target);
        break;

      case `external`:
        window.open(target, `_blank`);
        break;
    }
  };

  return (
    <Container
      classes={{
        root: classes.headerWrapper,
      }}
      component={`header`}
    >
      <AppBar>
        <Toolbar>
          <section className={classes.socialSection}>
            <IconButton
              color={`inherit`}
              onClick={() => _goTo(myLinkedInAccount, `external`)}
            >
              <LinkedInLogo />
            </IconButton>
            <IconButton
              color={`inherit`}
              onClick={() => _goTo(myGitHubAccount, `external`)}
            >
              <GitHubLogo />
            </IconButton>
            <IconButton
              color={`inherit`}
              onClick={() => _goTo(myStackOverflowAccount, `external`)}
            >
              <StackOverflowLogo />
            </IconButton>
          </section>
          <Button color={`inherit`} onClick={() => _goTo(`/`)}>
            Home
          </Button>
          <Button color={`inherit`} onClick={() => _goTo(`/about`)}>
            About
          </Button>
          <Button color={`inherit`} onClick={() => _goTo(`/projects`)}>
            Projects
          </Button>
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
  })
);
