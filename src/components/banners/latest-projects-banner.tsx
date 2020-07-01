import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { ProjectCard } from '@/components';

export interface LatestProjectsBannerProps {}

export default function LatestProjectsBanner({}: LatestProjectsBannerProps) {
  const classes = useStyles();
  const threeLatestProjects = useStaticQuery(graphql`
    query {
      allStrapiProject(limit: 3, sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            strapiId
            name
            description
            createdAt
          }
        }
      }
    }
  `);

  return (
    <Grid
      container
      classes={{ container: classes.latestProjectsBannerWrapper }}
      direction={`row`}
      justify={`space-between`}
      alignItems={`center`}
      component={`section`}
    >
      {(threeLatestProjects.allStrapiProject.edges as any[]).map(
        (project: any) => {
          project = project.node;

          return (
            <Grid item key={project.strapiId}>
              <ProjectCard
                strapiId={project.strapiId}
                name={project.name}
                description={project.description}
              />
            </Grid>
          );
        }
      )}
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
  })
);
