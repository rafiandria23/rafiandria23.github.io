import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Img from 'gatsby-image';

import { IModelCover } from '@/types';

export interface ProjectHeaderProps {
  name: string;
  cover: IModelCover;
}

export default function ProjectHeader({ name, cover }: ProjectHeaderProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ container: classes.projectPageWrapper }}
      direction={`column`}
      justify={`space-around`}
      alignItems={`center`}
      component={`section`}
    >
      <Grid item>
        <Typography variant={`h2`} classes={{ root: classes.projectName }}>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Img fixed={cover.childImageSharp.fixed} />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectPageWrapper: {
      backgroundColor: theme.palette.primary.main,
    },
    projectName: {
      color: theme.palette.secondary.main,
      fontWeight: 'bolder',
    },
  })
);
