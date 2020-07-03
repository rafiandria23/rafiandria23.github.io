import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
            overview
            cover {
              publicURL
            }
            tags {
              id
              name
            }
          }
        }
      }
    }
  `);

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
          My Latest Projects
        </Typography>
      </Grid>
      <Grid
        container
        alignItems={`stretch`}
        justify={`space-evenly`}
        component={`section`}
      >
        {(threeLatestProjects.allStrapiProject.edges as any[]).map(
          (project: any) => {
            project = project.node;

            return (
              <Grid
                item
                key={project.strapiId}
              >
                <ProjectCard
                  strapiId={project.strapiId}
                  name={project.name}
                  overview={project.overview}
                  coverImageURL={project.cover.publicURL}
                  tags={project.tags}
                />
              </Grid>
            );
          }
        )}
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
