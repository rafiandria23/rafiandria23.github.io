import React from 'react';
import { navigate } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import { markdownRenderers } from '@/utils';

export interface ProjectCardProps {
  strapiId: string;
  name: string;
  coverImageURL?: string;
  description: string;
  tags?: string[];
}

export default function ProjectCard({
  strapiId,
  name,
  coverImageURL = ``,
  description,
  tags = [],
}: ProjectCardProps) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.projectCardWrapper }}>
      <CardActionArea>
        {coverImageURL && (
          <CardMedia
            classes={{ root: classes.projectCoverImage }}
            image={coverImageURL}
            title={name}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant={`h5`} component={`h2`}>
            {name}
          </Typography>
          <Typography variant={`body2`} color={`textSecondary`} component={`p`}>
            <ReactMarkdown
              source={description.split('\n')[0]}
              renderers={markdownRenderers}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size={`small`}
          color={`primary`}
          onClick={() => navigate(`/projects/${strapiId}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectCardWrapper: {
      maxWidth: 345,
    },
    projectCoverImage: {
      height: 140,
    },
  })
);
