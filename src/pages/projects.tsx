import React from 'react';
import { PageProps } from 'gatsby';

import { Layout, LatestProfileBanner, SEO } from '@/components';

export interface ProjectsPageProps extends PageProps {}

export default function ProjectsPage({}: ProjectsPageProps) {
  return (
    <Layout>
      <SEO
        title={`Projects`}
        description={`All the projects I'm currently doing or already done, ranging from Back-End, Front-End, to Full-Stack`}
      />
      <LatestProfileBanner />
    </Layout>
  );
}
