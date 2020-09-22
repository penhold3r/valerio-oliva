import React, { useState, useEffect } from 'react'

const defStyles = {
	slider: {
		height: '100%',
		position: 'relative',
		width: '100%'
	},
	slide: {
		height: '100%',
		left: 0,
		opacity: 0,
		position: 'absolute',
		top: 0,
		transition: 'all 0.3s',
		width: '100%',
		zIndex: 3
	},
	sliderImg: {
		height: '100%',
		objectFit: 'cover',
		opacity: 1,
		display: 'block',
		width: '100%'
	},
	onTop: {
		opacity: 1,
		zIndex: 1
	},
	pagination: {
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		left: 0,
		margin: '0 auto',
		position: 'absolute',
		right: 0,
		zIndex: 99
	},
	navigation: {
		bottom: 0,
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		margin: '0 auto',
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: 99
	},
	navigationArrows: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		border: 'none',
		cursor: 'pointer',
		outline: 'none'
	},
	tile: {
		background: '#CCC',
		border: '1px solid #666',
		borderRadius: '50%',
		cursor: 'pointer',
		height: '20px',
		margin: '6px',
		opacity: 0.5,
		outline: 'none',
		padding: 0,
		transition: 'all 0.3s',
		WebkitAppearance: 'none',
		width: '20px'
	},
	activeTile: {
		background: '#999',
		opacity: 1
	}
}

const Slider = ({ config: userConfig, children }) => {
	const [images, setImages] = useState([])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [pagination, setPagination] = useState(false)
	const [navigation, setNavigation] = useState(true)

	const defConfig = {
		navigation: true,
		pagination: false,
		delay: 4500,
		paginationStyle: {}
	}

	const config = { ...defConfig, ...userConfig }

	const styles = {
		...defStyles,
		tile: {
			...defStyles.tile,
			...config.paginationStyle
		},
		activeTile: {
			...defStyles.activeTile,
			...config.paginationStyle
		}
	}

	const createPagination = (slides, activeTile) => {
		const tiles =
			slides &&
			slides.map((slide, key) => {
				const currentIndex = slides.indexOf(slide)
				const classes = currentIndex === activeTile ? 'tile' : 'tile active-tile'
				const style =
					slides.indexOf(slide) === activeTile
						? { ...styles.tile, ...styles.activeTile }
						: styles.tile

				return (
					<button
						key={key}
						className={classes}
						style={style}
						onClick={() => handlePagination(currentIndex)}
					/>
				)
			})

		return (
			<nav className="pagination" style={styles.pagination}>
				{tiles}
			</nav>
		)
	}

	const createNavigation = (slides, activeSlide) => {
		const currentIndex = activeSlide

		return (
			<nav className="slider-navigation" style={styles.navigation}>
				<button
					className="nav-btn prev"
					style={styles.navigationArrows}
					onClick={() => handlePagination(currentIndex - 1)}
				>
					&lang;
				</button>
				<button
					className="nav-btn next"
					style={styles.navigationArrows}
					onClick={() => handlePagination(currentIndex + 1)}
				>
					&rang;
				</button>
			</nav>
		)
	}

	const handlePagination = index => {
		const i = index > images.length - 1 ? 0 : index < 1 ? images.length - 1 : index

		setCurrentSlide(i)
	}

	const slides =
		images.length > 1 &&
		images.map((slide, key) => {
			const classes = images.indexOf(slide) === currentSlide ? 'slide on-top' : 'slide'
			const style =
				images.indexOf(slide) === currentSlide
					? { ...styles.slide, ...styles.onTop }
					: styles.slide

			return (
				<div key={key} className={classes} style={style}>
					{slide}
				</div>
			)
		})

	useEffect(() => {
		const images = React.Children.map(children, child =>
			React.cloneElement(child, { style: styles.sliderImg })
		)

		setImages(images)
		setNavigation(config.navigation)
		setPagination(config.pagination)

		images &&
			setInterval(() => {
				const onTop = currentSlide === images.length - 1 ? 0 : currentSlide + 1
				setCurrentSlide(onTop)
			}, config.delay)
	}, [currentSlide])

	return (
		<div className="slider" style={styles.slider}>
			<div className="slides">{slides}</div>
			{pagination && createPagination(slides, currentSlide)}
			{navigation && createNavigation(slides, currentSlide)}
		</div>
	)
}

export default Slider
