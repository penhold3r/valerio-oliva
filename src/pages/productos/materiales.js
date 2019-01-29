import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import slugify from 'slugify'

import Layout from '../../components/Layout'
import headerImg from '../../assets/images/maderas.jpg'
import banner01 from '../../assets/images/valerio_oliva-banner-01.jpg'
import banner02 from '../../assets/images/valerio_oliva-banner-02.jpg'

const MaterialsPage = ({ data }) => {
	const { edges } = data.allMaterialesJson
	return (
		<Layout>
			<section className="materials animated fadeIn">
				<header className="materials-header">
					<h2 className="main-title">Maderas y Materiales</h2>
					<img src={headerImg} alt="" />
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
									<img
										src={node.icon && node.icon.publicURL}
										alt="node.name"
									/>
								</div>

								<h3>{node.name}</h3>
							</Link>
						))}
				</div>
				<div className="banners">
					<img src={banner01} alt="[Publicidad]" />
					<img src={banner02} alt="[Publicidad]" />
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
