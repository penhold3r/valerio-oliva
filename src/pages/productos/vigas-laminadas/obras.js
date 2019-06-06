import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../../components/Layout'
import Gallery from '../../../components/Gallery'

const ObrasPage = () => {
	const {
		allFile: { edges }
	} = useStaticQuery(graphql`
		query ObrasQuery {
			allFile(filter: { relativeDirectory: { eq: "obras" } }) {
				edges {
					node {
						id
						name
						publicURL
						childImageSharp {
							fluid(maxWidth: 400) {
								src
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Layout title="Obras">
			<section className="obras gallery-page">
				<h2 className="gallery-page-title">Obras destacadas</h2>
				<div className="gallery-page-content">
					<div className="intro-text">
						<p>
							Múltiples obras a lo largo de todo el país avalan la trayectoria de nuestra
							empresa.
						</p>
					</div>
					<Gallery data={edges} />
				</div>
			</section>
		</Layout>
	)
}

export default ObrasPage
