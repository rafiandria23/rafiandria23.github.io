import React, { useEffect, useState } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';

import { Layout, LatestProfileBanner, SEO } from '@/components';

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
  const [projectsFromGQL, setProjectsFromGQL] = useState<any[]>(
    [...threeLatestProjects.allStrapiProject.edges] || []
  );
  const [projectsHaveBeenFormatted, setProjectsHaveBeenFormatted] = useState<
    boolean
  >(false);

  useEffect(() => {
    if (
      threeLatestProjects.allStrapiProject.edges &&
      threeLatestProjects.allStrapiProject.edges instanceof Array
    ) {
      const formattedProjectsFromGQL = threeLatestProjects.allStrapiProject.edges.map(
        (project: any) => {
          project = project.node;
          project.cover = project.cover.publicURL;
          return project;
        }
      );
      setProjectsFromGQL([...formattedProjectsFromGQL]);
      setProjectsHaveBeenFormatted(true);
    }
  }, [threeLatestProjects]);

  return (
    <Layout>
      <SEO
        title={`Projects`}
        description={`All the projects I'm currently doing or already done, ranging from Back-End, Front-End, to Full-Stack`}
      />
      {projectsFromGQL.length > 0 && projectsHaveBeenFormatted === true ? (
        <LatestProfileBanner projects={projectsFromGQL} />
      ) : (
        ''
      )}
    </Layout>
  );
}
