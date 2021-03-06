import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Layout from '../Layout'
import Link from '../Link'

const Material = ({ pageContext }) => {
	const { slug, name, image, banners, content } = pageContext

	const handleDropDown = e => {
		const isActive = e.currentTarget.classList.contains('active')
		const allItems = e.currentTarget.parentElement.querySelectorAll('.material-item')

		allItems.forEach(item => item.classList.remove('active'))

		isActive
			? e.currentTarget.classList.remove('active')
			: e.currentTarget.classList.add('active')
	}

	return (
		<Layout title={name}>
			<section className={`${slug} material-section fader`}>
				<header className='material-header'>
					<h2 className='main-title'>{name}</h2>
					<div className='material-hero'>
						<img src={image && image.publicURL} alt='' />
					</div>
				</header>
				<div className='material-content'>
					{content &&
						content.length > 0 &&
						content.map(({ item, thickness, measure, link, desc, subItems }, key) => (
							<dl
								key={key}
								className={`${slugify(item, {
									lower: true,
								})} material-item`}
								role='presentation'
								onKeyDown={handleDropDown}
								onClick={handleDropDown}>
								<div className='item-content'>
									<dt
										className={
											thickness || measure || link || desc || subItems
												? 'item-title icon-angle-down'
												: 'item-title empty-content'
										}>
										{item}
									</dt>
									<dd
										className={
											thickness || measure || link || desc || subItems
												? 'dd'
												: 'dd empty-content'
										}>
										{desc && (
											<p className='desc'>
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
											<p className='ext-link'>
												<Link
													to={link}
													rel='noopener noreferrer'
													target='_blank'
													className='link'>
													<strong>ver más</strong>
												</Link>
											</p>
										)}
										{subItems &&
											subItems.map(
												({ subItem, thickness, measure, link, desc }, key) => (
													<dl key={key} className='sub-item'>
														<dt>{subItem}</dt>
														<dd>
															{desc && (
																<p className='desc'>
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
																<p className='ext-link'>
																	<Link
																		to={link}
																		rel='noopener noreferrer'
																		target='_blank'
																		className='link'>
																		<strong>ver más</strong>
																	</Link>
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
				<div className='banners'>
					{banners &&
						banners.map(banner => (
							<img key={banner.id} src={banner.publicURL} alt='[ publicidad ]' />
						))}
				</div>
			</section>
		</Layout>
	)
}

Material.propTypes = {
	pageContext: PropTypes.object,
}

export default Material
