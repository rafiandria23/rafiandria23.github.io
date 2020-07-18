import React, { useEffect, useState } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';

import { Layout, LatestProjectsBanner, SEO } from '@/components';

export interface ProjectsPageProps extends PageProps {}

export default function ProjectsPage({}: ProjectsPageProps) {
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
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
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
    <Layout>
      <SEO
        title={`Projects`}
        description={`All the projects I'm currently doing or already done, ranging from Back-End, Front-End, to Full-Stack`}
      />
      <LatestProjectsBanner
        projects={threeLatestProjects.allStrapiProject.edges}
      />
    </Layout>
  );
}
