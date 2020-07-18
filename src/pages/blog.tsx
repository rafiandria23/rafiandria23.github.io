import React, { useEffect, useState } from 'react';
import { PageProps, useStaticQuery, graphql } from 'gatsby';

import { Layout } from '@/components';

export interface BlogPageProps extends PageProps { }

export default function BlogPage({ }: BlogPageProps) {
  const threeLatestPosts = useStaticQuery(graphql`
    query {
      allStrapiPost(limit: 3, sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            strapiId
            title
            summary
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

  const [postsFromGQL, setPostsFromGQL] = useState<any[]>(
    [...threeLatestPosts.allStrapiPost.edges] || []
  );
  const [postsHaveBeenFormatted, setPostsHaveBeenFormatted] = useState<
    boolean
  >(false);

  useEffect(() => {
    if (
      threeLatestPosts.allStrapiPost.edges &&
      threeLatestPosts.allStrapiPost.edges instanceof Array
    ) {
      const formattedPostsFromGQL = threeLatestPosts.allStrapiPost.edges.map(
        (post: any) => {
          post = post.node;
          post.cover = post.cover.publicURL;
          return post;
        }
      );
      setPostsFromGQL([...formattedPostsFromGQL]);
      setPostsHaveBeenFormatted(true);
    }
  }, []);

  return (
    <Layout>

    </Layout>
  )
}
