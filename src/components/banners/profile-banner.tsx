import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export interface ProfileBannerProps { }

export default function ProfileBanner({ }: ProfileBannerProps) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      profilePhoto: file(relativePath: { eq: "profile-photo.png" }) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section className={classes.profileBannerWrapper}>
      <section className={classes.profilePhotoSection}>
        <Img className={classes.profilePhotoNoBg} fixed={data.profilePhoto.childImageSharp.fixed} alt="Adam Rafiandri" />
      </section>
      <section className={classes.introductionSection}>

      </section>
    </section>
  );
}

const useStyles = makeStyles(() => createStyles({
  profileBannerWrapper: {
    height: '100vh',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr',
    gridTemplateRows: '1fr',
    '& > section': {
      height: '100%',
      width: '100%'
    },
    background: colors.blue[900]
  },
  profilePhotoSection: {
    gridColumn: 1,
  },
  introductionSection: {
    gridColumn: 2
  },
  profilePhotoNoBg: {
    display: 'flex',
    transform: 'scale(.7, .7)',
    transition: 'all .5s ease',
    '&:hover': {
      transform: 'scale(1, 1)'
    }
  }
}));
