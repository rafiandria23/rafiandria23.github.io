import React, { useState } from 'react';
import { navigate } from 'gatsby';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Chip,
  Collapse,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import { IPost } from '@/types';

export interface PostCardProps {
  post: IPost;
}

export default function PostCard({ post }: PostCardProps) {
  const classes = useStyles();
  const [showProjectTags, setShowProjectTags] = useState<boolean>(false);

  return (
    <Card classes={{ root: classes.postCardWrapper }}>
      <CardActionArea>
        {post.cover && (
          <CardMedia
            classes={{ root: classes.postCoverImage }}
            image={post.cover}
            title={post.title}
            component={`img`}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant={`h4`} component={`h2`}>
            {post.title}
          </Typography>
          <Typography
            paragraph
            variant={`subtitle1`}
            component={`p`}
            // classes={{ root: classes.postCardContentWrapper }}
          >
            {post.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.postCardActionsWrapper }}>
        <Button
          size={`medium`}
          color={`primary`}
          variant={`outlined`}
          onClick={() =>
            navigate(
              `/${post.title.split(' ').join('-').toLowerCase()}-${
                post.strapiId
              }`
            )
          }
        >
          Explore!
        </Button>
        <IconButton
          className={clsx(classes.showProjectTags, {
            [classes.showProjectTagsOpen]: showProjectTags,
          })}
          onClick={() => setShowProjectTags(!showProjectTags)}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={showProjectTags}
        timeout={`auto`}
        unmountOnExit
        classes={{ entered: classes.showProjectTagsCollapseEntered }}
      >
        <CardContent>
          {post.tags.length > 0 &&
            post.tags.map((tag) => (
              <Chip
                classes={{ root: classes.projectTagChip }}
                key={tag.id}
                label={tag.name.toUpperCase()}
                clickable
                onClick={() =>
                  navigate(
                    `/tags/${tag.name.split(' ').join('-').toLowerCase()}`
                  )
                }
              />
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postCardWrapper: {
      maxWidth: 345,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    postCoverImage: {},
    postCardActionsWrapper: {
      padding: theme.spacing(2),
    },
    postCardActionAreaWrapper: {},
    postCardContentWrapper: {
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    showProjectTags: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    showProjectTagsOpen: {
      transform: 'rotate(180deg)',
    },
    showProjectTagsCollapseEntered: {
      position: 'relative',
    },
    projectTagChip: {
      margin: theme.spacing(1),
    },
  })
);
