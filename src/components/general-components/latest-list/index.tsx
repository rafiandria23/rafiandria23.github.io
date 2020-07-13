import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { IPost, IProject } from '@/types';
import { LatestCard } from '@/components';

export interface LatestListProps {
  title: string;
  data: IPost[] | IProject[];
}

export default function LatestList({ title, data }: LatestListProps) {
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
        {data.length &&
          data.map((item: IPost | IProject) => {
            return (
              <Grid key={item.strapiId} item>
                <LatestCard data={item} />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    latestListWrapper: {},
  })
);
