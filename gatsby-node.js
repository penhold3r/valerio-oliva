const path = require(`path`)
const slugify = require('slugify')

const kaindl = require('./src/data/kaindl-products')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMaterialesJson {
					edges {
						node {
							name
							image {
								publicURL
							}
							icon {
								publicURL
							}
							banners {
								id
								publicURL
							}
							content {
								item
								thickness
								measure
								link
								desc
								subItems {
									subItem
									desc
									thickness
									measure
									link
								}
							}
						}
					}
				}
			}
		`)
			.then(result => {
				result.data.allMaterialesJson.edges.forEach(({ node }) => {
					createPage({
						path: `materiales/${slugify(node.name, { lower: true })}`,
						component: path.resolve(`./src/components/templates/materials-template.js`),
						context: {
							slug: slugify(node.name, { lower: true }),
							name: node.name,
							image: node.image,
							icon: node.icon,
							banners: node.banners,
							content: node.content
						}
					})
				})

				kaindl.forEach(product => {
					createPage({
						path: `materiales/kaindl/${slugify(product.name, { lower: true })}`,
						component: path.resolve(`./src/components/templates/kaindl-template.js`),
						context: {
							slug: slugify(product.name, { lower: true }),
							name: product.name,
							desc: product.desc,
							products: product.products
						}
					})
				})

				resolve()
			})
			.catch(err => reject(err))
	})
}
