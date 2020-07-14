import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { IPost, IProject } from '@/types';
import { LatestCard } from '@/components';

export interface LatestListProps {
  title: string;
  data: IPost[] | IProject[];
  type: `post` | `project`;
}

export default function LatestList({ title, data, type }: LatestListProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction={`column`}
      justify={`space-between`}
      alignItems={`center`}
      classes={{ root: classes.latestListWrapper }}
    >
      <Grid item>
        <Typography gutterBottom variant={`h3`} component={`h3`}>
          {title}
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction={`row`}
        justify={`center`}
        alignItems={`center`}
        component={`div`}
      >
        {type === `post` && (data as IPost[]).length > 0
          ? (data as IPost[]).map(post => (
              <Grid key={post.strapiId} item>
                <LatestCard data={post} type={`post`} />
              </Grid>
            ))
          : type === `project` && (data as IProject[]).length > 0
          ? (data as IProject[]).map(project => (
              <Grid key={project.strapiId} item>
                <LatestCard data={project} type={`project`} />
              </Grid>
            ))
          : ''}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    latestListWrapper: {},
  })
);
