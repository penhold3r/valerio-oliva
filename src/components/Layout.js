import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'

import 'sanitize.css'
import '../styles/index.scss'

import faviconICO from '../assets/images/favicon.ico'
import faviconPNG from '../assets/images/favicon.png'
//import bookmark from '../assets/images/bookmark-image.png'
import opengraph from '../assets/images/valerio-oliva-og.jpg'

const Layout = ({ title, children }) => {
	const pageTitle = title ? `${title} - Valerio Oliva` : 'Valerio Oliva'

	return (
		<React.Fragment>
			<Helmet
				htmlAttributes={{ lang: 'es' }}
				title={pageTitle}
				meta={[
					{
						property: 'og:image',
						content: opengraph
					},
					{
						name: 'twitter:image',
						content: opengraph
					},
					{
						name: 'description',
						content: 'Maderas Laminadas para la construcción'
					},
					{
						property: 'og:description',
						content: 'Maderas Laminadas para la construcción'
					},
					{
						name: 'twitter:description',
						content: 'Maderas Laminadas para la construcción'
					},
					{
						property: 'og:title',
						content: pageTitle
					},
					{
						name: 'twitter:title',
						content: pageTitle
					},
					{
						property: 'og:url',
						content: 'https://valerio-oliva.com/'
					},
					{
						name: 'twitter:site',
						content: 'https://valerio-oliva.com/'
					},
					{
						property: 'og:type',
						content: 'Website'
					},
					{
						name: 'twitter:card',
						content: 'summary_large_image'
					},
					{
						name: 'keywords',
						content: 'maderas, maderas laminadas, construcción, materiales'
					}
				]}
				link={[
					{
						href: 'https://file.myfontastic.com/SnS98Lv4hKuJ5pWJ47AKjb/icons.css',
						rel: 'stylesheet'
					},
					{
						href: faviconICO,
						rel: 'shortcut icon',
						type: 'image/x-icon'
					},
					{
						href: faviconPNG,
						rel: 'shortcut icon',
						type: 'image/png',
						sizes: '32x32 192x192'
					}
				]}
			/>

			<Header />

			<main>{children}</main>

			<Carrousel />

			<Footer />
		</React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
