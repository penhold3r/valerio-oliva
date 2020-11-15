const path = require(`path`)
const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: 'Valerio Oliva',
		siteUrl: `https://www.valeriooliva.com`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
				importer: globImporter(),
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'icons',
				path: path.join(__dirname, `src`, `assets`, `icons`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'ads',
				path: path.join(__dirname, `src`, `assets`, `ads`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'images',
				path: path.join(__dirname, `src`, `assets`, `images`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'brands',
				path: path.join(__dirname, `src`, `assets`, `brands`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: path.join(__dirname, `src`, `data`),
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Open Sans\:300,300i,700,700i`, `Cairo\:300`],
				display: 'swap',
			},
		},

		'gatsby-plugin-react-helmet',
		'gatsby-plugin-svgr',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sitemap`,
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				background_color: '#F2EEEB',
				display: 'standalone',
				icon: './src/assets/images/favicon.png',
				name: 'Valerio Oliva',
				orientation: 'portrait',
				scope: '/',
				short_name: 'Valerio Oliva',
				start_url: '/',
				theme_color: '#f39200',
			},
		},
		'gatsby-plugin-offline',
	],
}
