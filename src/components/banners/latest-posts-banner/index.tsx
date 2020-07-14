import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { IPost } from '@/types';
import { PostCard } from '@/components';

export interface LatestPostsBannerProps {
  posts: IPost[];
}

export default function LatestPostsBanner({ posts }: LatestPostsBannerProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ container: classes.latestPostsBannerWrapper }}
      direction={`column`}
      justify={`center`}
      alignItems={`center`}
      component={`section`}
    >
      <Grid item classes={{ root: classes.latestPostsPageTitle }}>
        <Typography variant={`h2`} color={`secondary`} gutterBottom>
          Latest Posts
        </Typography>
      </Grid>
      <Grid
        container
        alignItems={`stretch`}
        justify={`space-evenly`}
        component={`section`}
      >
        {posts.map(post => {
          return (
            <Grid item key={post.strapiId}>
              <PostCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    latestPostsBannerWrapper: {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    latestPostsPageTitle: {
      paddingBottom: theme.spacing(8),
    },
  })
);
