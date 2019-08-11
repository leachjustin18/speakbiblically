const cssnano = require('css-mqpacker');
const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');

module.exports = {
  siteMetadata: {
    title: 'Speak Biblically',
    siteUrl: `https://tobedetermined.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'speak-biblically',
        short_name: 'speak-biblically',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: `standalone`,
        icon: `src/favicon.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              'default',
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1bKMxl15efhuFFtppUWQwzppDALj68VsCWbljYmym7A8',
          worksheetTitle: 'Lessons',
          credentials: require('./client_secret.json')
      }
  },
    `gatsby-plugin-offline`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-netlify`,
  ],
};
