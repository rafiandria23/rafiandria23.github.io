import React, { useState } from 'react';
import clsx from 'clsx';
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
  Collapse,
  Chip,
  IconButton,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

export interface ProjectCardProps {
  strapiId: string;
  name: string;
  coverImageURL: string;
  overview: string;
  tags?: any[];
}

export default function ProjectCard({
  strapiId,
  name,
  coverImageURL = ``,
  overview,
  tags = [],
}: ProjectCardProps) {
  const classes = useStyles();
  const [showTags, setShowTags] = useState<boolean>(false);

  return (
    <Card classes={{ root: classes.projectCardWrapper }}>
      <CardActionArea>
        {coverImageURL && (
          <CardMedia
            classes={{ root: classes.projectCoverImage }}
            image={coverImageURL}
            title={name}
            component={`img`}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant={`h4`} component={`h2`}>
            {name}
          </Typography>
          <Typography
            paragraph
            variant={`subtitle1`}
            component={`p`}
            // classes={{ root: classes.projectCardContentWrapper }}
          >
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.projectCardActionsWrapper }}>
        <Button
          size={`medium`}
          color={`primary`}
          variant={`outlined`}
          onClick={() =>
            navigate(
              `/projects/${name.split(' ').join('-').toLowerCase()}-${strapiId}`
            )
          }
        >
          Read More
        </Button>
        <IconButton
          className={clsx(classes.showTags, {
            [classes.showTagsOpen]: showTags,
          })}
          onClick={() => setShowTags(!showTags)}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={showTags}
        timeout={`auto`}
        unmountOnExit
        classes={{ entered: classes.showTagsCollapseEntered }}
      >
        <CardContent>
          {tags.length &&
            tags.map((tag: any) => (
              <Chip
                classes={{ root: classes.tagChip }}
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
    projectCardWrapper: {
      maxWidth: 345,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    projectCoverImage: {},
    projectCardActionsWrapper: {
      padding: theme.spacing(2),
    },
    projectCardActionAreaWrapper: {},
    projectCardContentWrapper: {
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    showTags: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    showTagsOpen: {
      transform: 'rotate(180deg)',
    },
    showTagsCollapseEntered: {
      position: 'relative',
    },
    tagChip: {
      margin: theme.spacing(1),
    },
  })
);
