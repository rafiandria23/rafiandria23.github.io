import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Layout, ProjectHeader, ProjectDescription } from '@/components';

export const query = graphql`
  query ProjectQuery($id: String!) {
    strapiProject(strapiId: { eq: $id }) {
      strapiId
      name
      description
      tags {
        id
        name
      }
    }
  }
`;

export interface ProjectPageProps extends PageProps {
  data: any;
}

export default function Project({ data }: ProjectPageProps) {
  const project = data.strapiProject;

  return (
    <Layout>
      <ProjectHeader name={project.name} />
      <ProjectDescription description={project.description} />
    </Layout>
  );
}
