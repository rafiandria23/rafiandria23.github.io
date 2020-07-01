import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import { markdownRenderers } from '@/utils';

export interface ProjectDescriptionProps {
  description: string;
}

export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  const classes = useStyles();

  useEffect(() => {
    description.split('/uploads/').join(`${process.env.CMS_API_URL}/uploads/`);
  }, [description]);

  return (
    <Grid
      container
      classes={{ container: classes.projectDescriptionWrapper }}
      direction={`column`}
      justify={`space-around`}
      alignItems={`stretch`}
      component={`section`}
    >
      <ReactMarkdown source={description} renderers={markdownRenderers} />
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectDescriptionWrapper: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(20),
    },
  })
);
