import React from 'react'
import slugify from 'slugify'
import Layout from './Layout'

import banner01 from '../assets/images/valerio_oliva-banner-01.jpg'
import banner02 from '../assets/images/valerio_oliva-banner-02.jpg'

const Material = ({ pageContext }) => {
	const { slug, name, image, content } = pageContext

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
						content.map(
							(
								{ item, thickness, measure, link, desc, subItems },
								key
							) => (
								<dl
									key={key}
									className={`${slugify(item, {
										lower: true
									})} material-item`}
									onClick={e => {
										const isActive = e.currentTarget.classList.contains(
											'active'
										)
										const allItems = e.currentTarget.parentElement.querySelectorAll(
											'.material-item'
										)

										for (let item of allItems)
											item.classList.remove('active')

										isActive
											? e.currentTarget.classList.remove('active')
											: e.currentTarget.classList.add('active')
									}}
								>
									<div className="item-content">
										<dt
											className={
												thickness ||
												measure ||
												link ||
												desc ||
												subItems
													? 'item-title icon-angle-down'
													: 'item-title empty-content'
											}
										>
											{item}
										</dt>
										<dd
											className={
												thickness ||
												measure ||
												link ||
												desc ||
												subItems
													? 'dd'
													: 'dd empty-content'
											}
										>
											{desc && (
												<p>
													<strong>{desc}</strong>
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
												<p>
													<a
														href={link}
														rel="noopener noreferrer"
														target="_blank"
														className="ext-link"
													>
														<strong>ver más</strong>
													</a>
												</p>
											)}
											{subItems &&
												subItems.map(
													(
														{
															subItem,
															thickness,
															measure,
															link,
															desc
														},
														key
													) => (
														<dl key={key} className="sub-item">
															<dt>{subItem}</dt>
															<dd>
																{desc && (
																	<p>
																		<strong>{desc}</strong>
																	</p>
																)}
																{thickness && (
																	<p>
																		Espesor:{' '}
																		<strong>
																			{thickness}
																		</strong>
																	</p>
																)}
																{measure && (
																	<p>
																		Medidas:{' '}
																		<strong>{measure}</strong>
																	</p>
																)}
																{link && (
																	<p>
																		<a
																			href={link}
																			rel="noopener noreferrer"
																			target="_blank"
																			className="ext-link"
																		>
																			<strong>{link}</strong>
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
							)
						)}
				</div>
				<div className="banners">
					<img src={banner01} alt="[Publicidad]" />
					<img src={banner02} alt="[Publicidad]" />
				</div>
			</section>
		</Layout>
	)
}

export default Material
