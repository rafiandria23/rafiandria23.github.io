import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { ProjectCard } from '@/components';
import { IProject } from '@/types';

export interface LatestProjectsBannerProps {
  projects: IProject[];
}

export default function LatestProjectsBanner({
  projects,
}: LatestProjectsBannerProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ container: classes.latestProjectsBannerWrapper }}
      direction={`column`}
      justify={`center`}
      alignItems={`center`}
      component={`section`}
    >
      <Grid item classes={{ root: classes.latestProjectsPageTitle }}>
        <Typography variant={`h2`} color={`secondary`} gutterBottom>
          Latest Projects
        </Typography>
      </Grid>
      <Grid
        container
        alignItems={`stretch`}
        justify={`space-evenly`}
        component={`section`}
      >
        {projects !== undefined && projects.length > 0
          ? projects.map((project: any) => {
              project = project.node;

              return (
                <Grid item key={project.strapiId}>
                  <ProjectCard project={project} />
                </Grid>
              );
            })
          : ''}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    latestProjectsBannerWrapper: {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    latestProjectsPageTitle: {
      paddingBottom: theme.spacing(8),
    },
  })
);
