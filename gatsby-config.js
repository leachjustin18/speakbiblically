module.exports = {
  siteMetadata: {
    title: 'Speak Biblically',
    siteUrl: 'https://tobedetermined.com',
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
      },
	},
	{
		resolve: 'gatsby-source-google-sheets',
		options: {
			spreadsheetId: '1bKMxl15efhuFFtppUWQwzppDALj68VsCWbljYmym7A8',
			worksheetTitle: 'Lessons',
			credentials: require('./src/utils/client_secret.json')
		}
	},
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-netlify`,
  ],
};
