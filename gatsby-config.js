module.exports = {
	siteMetadata: {
		title: 'Valerio Oliva',
		siteUrl: `https://www.valeriooliva.com`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8
			}
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'icons',
				path: `${__dirname}/src/assets/icons/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/images/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'brands',
				path: `${__dirname}/src/assets/brands/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: `${__dirname}/src/data/`
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sitemap`
		},
		/*{
			resolve: `gatsby-plugin-manifest`,
			options: {
				background_color: '#F2EEEB',
				display: 'standalone',
				//icon: 'src/assets/images/favicon.png',
				name: 'Valerio Oliva',
				orientation: 'portrait',
				scope: '/',
				short_name: 'Valerio Oliva',
				start_url: '.',
				theme_color: '#F2EEEB'
			}
		},*/
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet'
	]
}
