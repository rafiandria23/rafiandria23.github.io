import React from 'react';
import { PageProps } from 'gatsby';

import { Layout, SEO, ProfileBanner } from '@/components';

export interface IndexPageProps extends PageProps {}

export default function IndexPage({}: IndexPageProps) {
  return (
    <Layout>
      <SEO
        title="Home"
        description={`Adam Rafiandri is a Software Engineer who's passionate about Computer Science`}
      />
      <ProfileBanner />
    </Layout>
  );
}
