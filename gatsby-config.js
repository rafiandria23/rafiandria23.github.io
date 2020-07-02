process.env.NODE_ENV !== `production` ? require('dotenv').config() : '';

module.exports = {
  siteMetadata: {
    title: `Adam Rafiandri`,
    description: `Adam Rafiandri is a Software Engineering who's passionate about Computer Science and building softwares. He previously majord in Aerospace Engineering.`,
    author: `Adam Rafiandri`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/assets/documents`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.CMS_API_URL || `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`post`, `project`, `tag`],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-module-resolver`,
      options: {
        aliases: {
          '@': `src`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    }
  ],
};
