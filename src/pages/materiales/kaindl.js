import React from 'react'
import slugify from 'slugify'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

import kaindlLogo from '../../assets/images/kaindl_logo.svg'
import products from '../../data/kaindl-products'

const Kaindl = ({ products: data, images }) => {
	const imgs = Object.values(images)

	return (
		<Layout title={'Kaindl'}>
			<section className="kaindl-page fader">
				<header className="kaindl-header">
					<h2 className="main-title">
						<img src={kaindlLogo} alt="Kaindl" />
					</h2>
				</header>
				<div className="categories">
					{data &&
						data.map((category, key) => (
							<div
								key={key}
								className={`category ${slugify(category.name, { lower: true })}`}
							>
								<Link
									className="category-link"
									to={`/materiales/kaindl/${slugify(category.name, {
										lower: true
									})}`}
								>
									{imgs &&
										imgs.map(({ childImageSharp }, key) => {
											const { originalName } = childImageSharp.fluid
											const currentName = `kaindl_${slugify(category.name, {
												lower: true
											})}.jpg`

											return (
												originalName === currentName && (
													<Img
														key={key}
														className="cat-image"
														fluid={childImageSharp.fluid}
														alt={category.name}
													/>
												)
											)
										})}
									<h4 className="category-name">{category.name}</h4>
								</Link>
							</div>
						))}
				</div>
			</section>
		</Layout>
	)
}

Kaindl.defaultProps = {
	products
}

export default props => (
	<StaticQuery
		query={graphql`
			query KaindlHomeQuery {
				natural: file(relativePath: { eq: "kaindl/kaindl_natural-touch.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							src
							originalName
							...GatsbyImageSharpFluid
						}
					}
				}
				classic: file(relativePath: { eq: "kaindl/kaindl_classic-touch.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 800) {
							src
							originalName
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => <Kaindl images={data} {...props} />}
	/>
)
