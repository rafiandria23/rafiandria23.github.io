import React, { useState } from 'react';
import { navigate } from 'gatsby';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
  Collapse,
  Typography,
  Button,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import { IPost, IProject } from '@/types';

export interface LatestCardProps {
  data: IPost | IProject;
}

export default function LatestCard({ data }: LatestCardProps) {
  const classes = useStyles();
  const [showTags, setShowTags] = useState<boolean>(false);

  return (
    <Card classes={{ root: classes.latestCardWrapper }}>
      <CardActionArea>
        {data.cover && (
          <CardMedia
            classes={{ root: classes.latestCardCover }}
            image={data.cover}
            title={data.title}
            component={`img`}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant={`h4`} component={`h2`}>
            {data.title}
          </Typography>
          <Typography paragraph variant={`subtitle1`} component={`p`}>
            {data.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.latestCardActionsWrapper }}>
        <Button
          size={`medium`}
          color={`primary`}
          variant={`outlined`}
          onClick={() =>
            navigate(
              `/projects/${data.title.split(' ').join('-').toLowerCase()}-${
                data.strapiId
              }`
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
          {data.tags.length &&
            data.tags.map((tag: any) => (
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
    latestCardWrapper: {
      maxWidth: 345,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    latestCardCover: {},
    latestCardActionsWrapper: {
      padding: theme.spacing(2),
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
