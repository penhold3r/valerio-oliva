import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'sanitize.css'
import '../styles/index.scss'

import favicon from '../assets/images/favicon.ico'
import bookmark from '../assets/images/bookmark-image.png'

import Header from './Header'
import Footer from './Footer'
import Carrousel from './Carrousel'

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
						content: bookmark
					},
					{
						name: 'description',
						content: 'Maderas Laminadas para la construcción'
					},
					{
						name: 'keywords',
						content:
							'maderas, maderas laminadas, construcción, materiales'
					}
				]}
				link={[
					{
						href:
							'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,700,700i',
						rel: 'stylesheet'
					},
					{
						href: 'https://fonts.googleapis.com/css?family=Cairo:300',
						rel: 'stylesheet'
					},
					{
						href:
							'https://file.myfontastic.com/SnS98Lv4hKuJ5pWJ47AKjb/icons.css',
						rel: 'stylesheet'
					},
					{
						href: favicon,
						rel: 'shortcut icon',
						type: 'image/x-icon'
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
