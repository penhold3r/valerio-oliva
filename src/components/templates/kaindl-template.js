import React from 'react'
//import slugify from 'slugify'
import Layout from '../Layout'
//import Link from '../Link'

const KaindlProduct = ({ pageContext }) => {
	const { slug, name, desc, products } = pageContext

	console.log(desc, JSON.stringify(products, null, 2))
	return (
		<Layout title={name}>
			<section className={`${slug} kaindl-product`}>
				<header className="kaindl-product-header">
					<h2 className="main-title">{name}</h2>
					<div className="product-main-description">
						<p dangerouslySetInnerHTML={{ __html: desc }} />
					</div>
				</header>
				<div className="products">
					{products &&
						products.map((product, key) => (
							<div key={key} className="product-block">
								<header className="category-header">
									<h3 class="product-name">{product.name}</h3>
									{product.desc && (
										<p
											class="product-desc"
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
														class="cat-desc"
														dangerouslySetInnerHTML={{ __html: cat.desc }}
													/>
												)}
											</div>
											{cat.items &&
												cat.items.map((item, key) => (
													<div key={key} className="cat-block" data-id={item.id}>
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

export default KaindlProduct
