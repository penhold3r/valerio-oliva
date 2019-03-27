import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import slugify from 'slugify'
import Layout from '../Layout'

import kaindlLogo from '../../assets/images/kaindl_logo.svg'

const KaindlProduct = ({ pageContext, images }) => {
	const { slug, name, desc, products } = pageContext

	return (
		<Layout title={name}>
			<section className={`${slug} kaindl-product fader`}>
				<header className="kaindl-product-header">
					<h2 className="main-title">
						<Link to="/materiales/kaindl">
							<img src={kaindlLogo} alt="Kaindl" />
						</Link>
					</h2>
					<h3 className="main-title">{name}</h3>
					<div className="product-main-description">
						<p dangerouslySetInnerHTML={{ __html: desc }} />
					</div>
				</header>
				<div className="products">
					{products &&
						products.map((product, key) => (
							<div key={key} className="product-block">
								<header className="category-header">
									<h3 className="product-name">{product.name}</h3>
									{product.desc && (
										<p
											className="product-desc"
											dangerouslySetInnerHTML={{ __html: product.desc }}
										/>
									)}
								</header>
								{product.categories &&
									product.categories.map((cat, key) => (
										<div key={key} className="product-cat">
											<div className="cat-block cat-intro">
												<h4 className="cat-name">{cat.name}</h4>
												{cat.desc && (
													<p
														className="cat-desc"
														dangerouslySetInnerHTML={{ __html: cat.desc }}
													/>
												)}
											</div>
											{cat.items &&
												cat.items.map((item, key) => (
													<div key={key} className="cat-block" data-id={item.id}>
														{images &&
															images.map(
																({ node: { id, name, childImageSharp } }) => {
																	const thumb = childImageSharp.fluid
																	//console.log(name, slugify(item.id))

																	return (
																		name === slugify(item.id) && (
																			<Img
																				key={id}
																				className="thumb-image"
																				fluid={thumb}
																				alt={name}
																			/>
																		)
																	)
																}
															)}
														<h5 className="item-name">{item.name}</h5>
													</div>
												))}
										</div>
									))}
							</div>
						))}
				</div>
			</section>
		</Layout>
	)
}

export default props => (
	<StaticQuery
		query={graphql`
			query KaindlQuery {
				allFile(filter: { relativeDirectory: { eq: "kaindl" } }) {
					edges {
						node {
							id
							name
							publicURL
							childImageSharp {
								fluid(maxWidth: 500) {
									src
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={({ allFile: { edges } }) => <KaindlProduct images={edges} {...props} />}
	/>
)
