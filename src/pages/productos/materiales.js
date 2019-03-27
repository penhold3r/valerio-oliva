import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import slugify from 'slugify'
import { Parallax } from 'react-parallax'

import Layout from '../../components/Layout'
import materialesHero from '../../assets/images/maderas.jpg'

const MaterialsPage = ({ data }) => {
	const { edges } = data.allMaterialesJson
	return (
		<Layout title={'Maderas y Materiales'}>
			<section className="materials fader">
				<header className="materials-header">
					<h2 className="main-title">Maderas y Materiales</h2>

					<Parallax
						bgImage={materialesHero}
						bgImageAlt={'[ Maderas y Materiales ]'}
						strength={400}
						className="materials-img"
					/>
				</header>
				<div className="materials-list">
					{edges &&
						edges.map(({ node }, key) => (
							<Link
								key={key}
								className="product-icon"
								to={`materiales/${slugify(node.name, {
									lower: true
								})}`}
							>
								<div className="icon">
									<img src={node.icon && node.icon.publicURL} alt="node.name" />
								</div>

								<h3>{node.name}</h3>
							</Link>
						))}
				</div>
			</section>
		</Layout>
	)
}

export default MaterialsPage

export const query = graphql`
	query MerialesQuery {
		allMaterialesJson {
			edges {
				node {
					name
					icon {
						publicURL
					}
				}
			}
		}
	}
`
