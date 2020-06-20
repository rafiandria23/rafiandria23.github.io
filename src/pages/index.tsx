import React from 'react';
import { Link, PageProps } from 'gatsby';

import { Layout, Image, SEO } from '@/components';

export interface IndexPageProps extends PageProps {}

export default function IndexPage({}: IndexPageProps) {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  );
}
