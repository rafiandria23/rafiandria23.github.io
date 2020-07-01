import React, { PropsWithChildren } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Heading as HeadingType } from '@/types';

const Paragraph = (props: PropsWithChildren<any>) => {
  const classes = useStyles();

  return (
    <Typography
      classes={{ root: classes.markdownParagraph }}
      {...props}
      variant={`h6`}
      component={`p`}
      align={`left`}
      gutterBottom
      paragraph
      color={`textPrimary`}
    >
      {props.children}
    </Typography>
  );
};

const Heading = (props: PropsWithChildren<any>) => {
  return (
    <Typography
      variant={`h${props.level}` as HeadingType}
      component={`h${props.level}` as HeadingType}
      align={`left`}
      gutterBottom
      color={`textPrimary`}
    >
      {props.children}
    </Typography>
  );
};

const markdownRenderers = {
  link: Link,
  paragraph: Paragraph,
  heading: Heading,
  image: LazyLoadImage,
};

export default markdownRenderers;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    markdownParagraph: {
      fontWeight: 'normal',
    },
  })
);
