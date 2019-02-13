import React from 'react'
import slugify from 'slugify'
import Layout from './Layout'

const Material = ({ pageContext }) => {
	const { slug, name, image, banners, content } = pageContext

	return (
		<Layout>
			<section className={`${slug} material-section`}>
				<header className="material-header">
					<h2 className="main-title">{name}</h2>
					<div className="material-hero">
						<img src={image && image.publicURL} alt="" />
					</div>
				</header>
				<div className="material-content">
					{content &&
						content.length > 0 &&
						content.map(({ item, thickness, measure, link, desc, subItems }, key) => (
							<dl
								key={key}
								className={`${slugify(item, {
									lower: true
								})} material-item`}
								onClick={e => {
									const isActive = e.currentTarget.classList.contains('active')
									const allItems = e.currentTarget.parentElement.querySelectorAll(
										'.material-item'
									)

									for (let item of allItems) item.classList.remove('active')

									isActive
										? e.currentTarget.classList.remove('active')
										: e.currentTarget.classList.add('active')
								}}
							>
								<div className="item-content">
									<dt
										className={
											thickness || measure || link || desc || subItems
												? 'item-title icon-angle-down'
												: 'item-title empty-content'
										}
									>
										{item}
									</dt>
									<dd
										className={
											thickness || measure || link || desc || subItems
												? 'dd'
												: 'dd empty-content'
										}
									>
										{desc && (
											<p className="desc">
												<strong>
													<em>{desc}</em>
												</strong>
											</p>
										)}
										{thickness && (
											<p>
												Espesor: <strong>{thickness}</strong>
											</p>
										)}
										{measure && (
											<p>
												Medidas: <strong>{measure}</strong>
											</p>
										)}
										{link && (
											<p className="ext-link">
												<a
													href={link}
													rel="noopener noreferrer"
													target="_blank"
													className="link"
												>
													<strong>ver más</strong>
												</a>
											</p>
										)}
										{subItems &&
											subItems.map(
												({ subItem, thickness, measure, link, desc }, key) => (
													<dl key={key} className="sub-item">
														<dt>{subItem}</dt>
														<dd>
															{desc && (
																<p className="desc">
																	<strong>
																		<em>{desc}</em>
																	</strong>
																</p>
															)}
															{thickness && (
																<p>
																	Espesor: <strong>{thickness}</strong>
																</p>
															)}
															{measure && (
																<p>
																	Medidas: <strong>{measure}</strong>
																</p>
															)}
															{link && (
																<p className="ext-link">
																	<a
																		href={link}
																		rel="noopener noreferrer"
																		target="_blank"
																		className="link"
																	>
																		<strong>ver más</strong>
																	</a>
																</p>
															)}
														</dd>
													</dl>
												)
											)}
									</dd>
								</div>
							</dl>
						))}
				</div>
				<div className="banners">
					{banners &&
						banners.map(banner => (
							<img key={banner.id} src={banner.publicURL} alt="[ publicidad ]" />
						))}
				</div>
			</section>
		</Layout>
	)
}

export default Material
