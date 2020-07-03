import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Theme,
  Tooltip,
  Paper,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

export interface ProfileBannerProps {}

export default function ProfileBanner({}: ProfileBannerProps) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      profilePhoto: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      latestResume: file(
        relativePath: { eq: "Adam Rafiandri's Resume V3.pdf" }
      ) {
        publicURL
      }
    }
  `);

  return (
    <Grid
      container
      classes={{
        container: classes.profileBannerWrapper,
      }}
      direction={`row`}
      justify={`space-between`}
      alignItems={`center`}
      component={`section`}
    >
      <Grid item xs={7}>
        <Paper
          elevation={0}
          component={`section`}
          classes={{
            root: classes.introductionSection,
          }}
        >
          <Typography
            variant={`h1`}
            classes={{ root: classes.greeterText }}
            paragraph
          >
            Hey, I'm Adam.
          </Typography>
          <Typography
            variant={`h4`}
            classes={{ root: classes.introductionText }}
            paragraph
          >
            Software engineer from Bogor, Indonesia. I create web, mobile, and
            desktop applications to help businesses grow online.
          </Typography>

          <Grid container classes={{ container: classes.profileButtonWrapper }}>
            <Grid item>
              <Tooltip
                title={`Download My Resume!`}
                aria-label={`Download My Resume!`}
              >
                <Button
                  variant={`outlined`}
                  color={`secondary`}
                  size={`large`}
                  fullWidth
                  href={data.latestResume.publicURL}
                  target={`_blank`}
                >
                  Download Me
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Tooltip title={`Adam Rafiandri`} aria-label={`Adam Rafiandri`}>
          <Paper
            elevation={0}
            component={`section`}
            classes={{
              root: classes.profilePhotoSection,
            }}
          >
            <Img
              className={classes.profilePhoto}
              fixed={data.profilePhoto.childImageSharp.fixed}
              alt={`Adam Rafiandri`}
            />
          </Paper>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileBannerWrapper: {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    profilePhotoSection: {
      width: `400px`,
      height: `400px`,
      position: `relative`,
      overflow: `hidden`,
      borderRadius: `50%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      paddingTop: theme.spacing(10),
    },
    profilePhoto: {
      display: `inline`,
      margin: `0 auto`,
      height: `100%`,
      width: `auto`,
    },
    introductionSection: {
      height: `100%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `flex-start`,
      flexDirection: `column`,
      backgroundColor: `inherit`,
    },
    greeterText: {
      fontWeight: `bolder`,
      color: theme.palette.secondary.main,
    },
    introductionText: {
      color: theme.palette.secondary.dark,
    },
    profileButtonWrapper: {
      paddingTop: theme.spacing(3),
    },
  })
);
