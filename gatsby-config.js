module.exports = {
   siteMetadata: {
      title: 'Valerio Oliva',
      siteUrl: `https://www.valeriooliva.com`
   },
   plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `gallery`, // you can use multiple source-filesystem instances
            path: `${__dirname}/src/images/gallery/`
         }
      },
      {
         resolve: `gatsby-plugin-sass`,
         options: {
            precision: 8
         }
      },
      {
         resolve: `gatsby-plugin-sitemap`
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            background_color: '#F2EEEB',
            display: 'standalone',
            icon: 'src/images/favicon.png',
            name: 'Valerio Oliva',
            orientation: 'portrait',
            scope: '/',
            short_name: 'Valerio Oliva',
            start_url: '.',
            theme_color: '#F2EEEB'
         }
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-react-helmet'
   ]
}
