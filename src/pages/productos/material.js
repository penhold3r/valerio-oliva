import React from 'react'
import slugify from 'slugify'
import Layout from '../../components/Layout'

const Material = ({ pageContext }) => {
	const { slug, name, image, content } = pageContext
	const cardClass =
		content && content.length > 2 ? 'material-card' : 'material-card c50'

	console.log(pageContext)

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
									})} ${cardClass}`}
								>
									<div className="inner-card">
										<dt
											className={
												thickness ||
												measure ||
												link ||
												desc ||
												subItems
													? 'card-title'
													: 'card-title empty-content'
											}
										>
											{item}
										</dt>
										<dd>
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
														<strong>{link}</strong>
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
			</section>
		</Layout>
	)
}

export default Material
