const path = require(`path`)
const slugify = require('slugify')

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
						component: path.resolve(`./src/pages/productos/material.js`),
						context: {
							slug: slugify(node.name, { lower: true }),
							name: node.name,
							image: node.image,
							content: node.content
						}
					})
				})
				resolve()
			})
			.catch(err => reject(err))
	})
}
