import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../../components/Layout'
import Gallery from '../../../components/Gallery'

const ProductosLaminadosPage = () => {
	const {
		mesadas: { edges: mesadas },
		escalones: { edges: escalones }
	} = useStaticQuery(graphql`
		query LaminatedQuery {
			mesadas: allFile(filter: { relativeDirectory: { eq: "mesadas" } }) {
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
			escalones: allFile(filter: { relativeDirectory: { eq: "escalones" } }) {
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
		<Layout title="Productos Multilaminados">
			<section className="laminated gallery-page">
				<h2 className="gallery-page-title">Productos Multilaminados</h2>
				<div className="gallery-page-content">
					<div className="intro-text">
						<p>
							Múltiples obras a lo largo de todo el país avalan la trayectoria de nuestra
							empresa.
						</p>
					</div>

					<h3 className="laminated-subtitle">Mesadas</h3>
					<Gallery data={mesadas} />

					<h3 className="laminated-subtitle">Escalones</h3>
					<Gallery data={escalones} />
				</div>
			</section>
		</Layout>
	)
}

export default ProductosLaminadosPage
