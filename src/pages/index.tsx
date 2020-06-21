import React from 'react';
import { Link, PageProps } from 'gatsby';

import { Layout, Image, SEO, ProfileBanner } from '@/components';

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
