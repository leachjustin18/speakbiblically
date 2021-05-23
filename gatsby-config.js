require('dotenv').config();
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Speak Biblically',
    siteUrl: 'https://www.speakbiblically.com',
  },
  plugins: [
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: path.join(__dirname, `src`, `image`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Speak Biblically',
        short_name: 'Speak Biblically',
        start_url: '/',
        background_color: '#454040',
        theme_color: '#d9a762',
        display: `standalone`,
        icon: `src/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        worksheetTitle: process.env.WORKSHEET_TITLE,
        credentials: require('./utils/client_secret.js'),
      },
    },
  ],
};
