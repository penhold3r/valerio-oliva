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
			<section className="laminated gallery-page fader">
				<h2 className="gallery-page-title">Productos Multilaminados</h2>
				<div className="gallery-page-content">
					<div className="intro-text">
						<p>
							La incorporación de nuevos productos con madera multilaminada es gracias a la
							versatilidad del material que ofrece múltiples usos y ventajas en la decoración
							interior. &ldquo;Mesadas y Escalones&rdquo;, se suman a nuestra gran familia de
							multilaminados.
						</p>
					</div>

					<div className="galleries">
						<div className="galleries__column">
							<h3 className="laminated-subtitle">
								<span>Mesadas</span>
							</h3>
							<Gallery data={mesadas} />
						</div>

						<div className="galleries__column">
							<h3 className="laminated-subtitle">
								<span>Escalones</span>
							</h3>
							<Gallery data={escalones} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default ProductosLaminadosPage
