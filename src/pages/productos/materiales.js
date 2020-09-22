import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import slugify from 'slugify'

import Layout from '../../components/Layout'
import Slider from '../../components/Slider'
import Link from '../../components/Link'

const context = require.context(
	'../../assets/images',
	true,
	/valerio_oliva-materiales(\d+)\.jp(e?)g/
)

const MaterialsPage = ({ data }) => {
	const images = context.keys().map(key => context(key))
	const { edges } = data.allMaterialesJson

	return (
		<Layout title={'Maderas y Materiales'}>
			<section className="materials fader">
				<header className="materials-header">
					<h2 className="main-title">Maderas y Materiales</h2>

					<Slider>
						{images.map((img, key) => (
							<img key={key} src={img} alt="" />
						))}
					</Slider>
				</header>
				<div className="materials-list">
					{edges &&
						edges.map(({ node }, key) => (
							<Link
								key={key}
								className="product-icon"
								to={`/materiales/${slugify(node.name, {
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

MaterialsPage.propTypes = {
	data: PropTypes.object
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
