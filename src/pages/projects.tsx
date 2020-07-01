import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

import { Layout, LatestProfileBanner } from '@/components';

export interface ProjectsPageProps extends PageProps {}

export default function ProjectsPage({}: ProjectsPageProps) {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProject {
        edges {
          node {
            strapiId
            name
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <LatestProfileBanner />
    </Layout>
  );
}
