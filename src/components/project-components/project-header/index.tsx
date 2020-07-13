import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface ProjectHeaderProps {
  name: string;
  coverImageURL?: string;
}

export default function ProjectHeader({
  name,
  coverImageURL = ``,
}: ProjectHeaderProps) {
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
        {coverImageURL && <LazyLoadImage alt={name} src={coverImageURL} />}
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
