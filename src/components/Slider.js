import React from 'react'

const styles = {
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

class Slider extends React.Component {
	constructor(props) {
		super(props)
		this.state = { images: [], currentSlide: 0, pagination: false, navigation: true }
		this.slider = React.createRef()
		this.styles = {
			...styles,
			tile: {
				...styles.tile,
				...props.paginationStyle
			},
			activeTile: {
				...styles.activeTile,
				...props.paginationStyle
			}
		}
	}

	componentDidMount() {
		const { children, pagination, delay = 4500 } = this.props
		const images = React.Children.map(children, child =>
			React.cloneElement(child, { style: this.styles.sliderImg })
		)

		this.setState({ images, pagination })

		images &&
			setInterval(() => {
				const onTop = this.state.currentSlide
				const currentSlide = onTop === images.length - 1 ? 0 : onTop + 1

				this.setState({ currentSlide })
			}, delay)
	}

	createPagination = (slides, activeTile) => {
		const tiles =
			slides &&
			slides.map((slide, key) => {
				const currentIndex = slides.indexOf(slide)
				const classes = currentIndex === activeTile ? 'tile' : 'tile active-tile'
				const style =
					slides.indexOf(slide) === activeTile
						? { ...this.styles.tile, ...this.styles.activeTile }
						: this.styles.tile

				return (
					<button
						key={key}
						className={classes}
						style={style}
						onClick={() => this.handlePagination(currentIndex)}
					/>
				)
			})

		return (
			<nav className="pagination" style={this.styles.pagination}>
				{tiles}
			</nav>
		)
	}

	createNavigation = (slides, activeSlide) => {
		const currentIndex = activeSlide

		return (
			<nav className="slider-navigation" style={this.styles.navigation}>
				<button
					className="nav-btn prev"
					style={this.styles.navigationArrows}
					onClick={() => this.handlePagination(currentIndex - 1)}
				>
					&lang;
				</button>
				<button
					className="nav-btn next"
					style={this.styles.navigationArrows}
					onClick={() => this.handlePagination(currentIndex + 1)}
				>
					&rang;
				</button>
			</nav>
		)
	}

	handlePagination = index => {
		const i =
			index > this.state.images.length - 1 ? 0 : index < 1 ? this.state.images.length - 1 : index

		this.setState({ currentSlide: i })
	}

	render() {
		const { images, pagination, navigation } = this.state
		const slides =
			images.length > 1 &&
			images.map((slide, key) => {
				const classes =
					images.indexOf(slide) === this.state.currentSlide ? 'slide on-top' : 'slide'
				const style =
					images.indexOf(slide) === this.state.currentSlide
						? { ...this.styles.slide, ...this.styles.onTop }
						: this.styles.slide

				return (
					<div key={key} className={classes} style={style}>
						{slide}
					</div>
				)
			})

		return (
			<div className="slider" style={this.styles.slider} ref={this.slider}>
				<div className="slides">{slides}</div>
				{pagination && this.createPagination(slides, this.state.currentSlide)}
				{navigation && this.createNavigation(slides, this.state.currentSlide)}
			</div>
		)
	}
}

export default Slider
