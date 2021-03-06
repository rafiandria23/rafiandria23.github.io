import React from 'react';
import { PageProps } from 'gatsby';

import { Layout, SEO } from '@/components';

export interface NotFoundPageProps extends PageProps {}

export default function NotFoundPage({}: NotFoundPageProps) {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}
