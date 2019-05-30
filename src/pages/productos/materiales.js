import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import slugify from 'slugify'

import Layout from '../../components/Layout'
import Slider from '../../components/Slider'

import materialsImg01 from '../../assets/images/valerio_oliva-materiales01.jpg'
import materialsImg02 from '../../assets/images/valerio_oliva-materiales02.jpg'
import materialsImg03 from '../../assets/images/valerio_oliva-materiales03.jpg'
import materialsImg04 from '../../assets/images/valerio_oliva-materiales04.jpg'
import materialsImg05 from '../../assets/images/valerio_oliva-materiales05.jpg'

const MaterialsPage = ({ data }) => {
	const { edges } = data.allMaterialesJson
	return (
		<Layout title={'Maderas y Materiales'}>
			<section className="materials fader">
				<header className="materials-header">
					<h2 className="main-title">Maderas y Materiales</h2>

					<Slider>
						<img src={materialsImg01} alt="" />
						<img src={materialsImg02} alt="" />
						<img src={materialsImg03} alt="" />
						<img src={materialsImg04} alt="" />
						<img src={materialsImg05} alt="" />
					</Slider>
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
