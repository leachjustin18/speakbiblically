module.exports = {
  siteMetadata: {
    title: 'Speak Biblically',
    siteUrl: 'https://tobedetermined.com',
  },
  plugins: [
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
