import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import { markdownRenderers } from '@/utils';

export interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  const classes = useStyles();

  useEffect(() => {
    content.split('/uploads/').join(`${process.env.CMS_API_URL}/uploads/`);
  }, [content]);

  return (
    <Grid
      container
      classes={{ container: classes.projectContentWrapper }}
      direction={`column`}
      justify={`space-around`}
      alignItems={`stretch`}
      component={`section`}
    >
      <ReactMarkdown source={content} renderers={markdownRenderers} />
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectContentWrapper: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(20),
    },
  })
);
