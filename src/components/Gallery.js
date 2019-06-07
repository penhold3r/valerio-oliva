import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Gallery = ({ data }) => {
	const [modalState, setModalState] = useState({
		modalOpen: false,
		currentImage: ''
	})

	const imgs = data.map(({ node: { id, name, publicURL, childImageSharp } }) => {
		const thumb = childImageSharp.fluid

		return (
			<div key={id} className="gallery-item">
				<div
					className="thumb-image"
					onClick={() => {
						const open = {
							currentImage: publicURL,
							modalOpen: true
						}
						setModalState(open)
					}}
				>
					<Img className="thumb-image" fluid={thumb} alt={name} />
				</div>
			</div>
		)
	})

	return (
		<div className="gallery">
			<div className={modalState.modalOpen ? 'modal-image open' : 'modal-image'}>
				<div className="inner-modal">
					<div
						className="close-modal"
						onClick={() => {
							const close = {
								currentImage: '',
								modalOpen: false
							}
							setModalState(close)
						}}
					>
						&times;
					</div>
					<img src={modalState.currentImage} alt="" />
				</div>
			</div>
			{imgs}
		</div>
	)
}

Gallery.propTypes = {
	data: PropTypes.array
}

export default Gallery
