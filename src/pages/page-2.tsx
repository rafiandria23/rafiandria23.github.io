import React from 'react';
import { Link, PageProps } from 'gatsby';

import { Layout, SEO } from '@/components';

export interface SecondPageProps extends PageProps {}

export default function SecondPage({}: SecondPageProps) {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
