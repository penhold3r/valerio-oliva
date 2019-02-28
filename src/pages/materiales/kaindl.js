import React from 'react'
import slugify from 'slugify'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

import products from '../../data/kaindl-products'

const Kaindl = ({ products: data }) => {
	console.log(data)
	return (
		<Layout title={'Kaindl'}>
			<section className="kaindl-page">
				<header className="kaindl-header">
					<h2 className="main-title">Kaindl</h2>
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

export default Kaindl
