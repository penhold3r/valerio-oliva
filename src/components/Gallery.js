import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

class Gallery extends React.Component {
	state = {
		currentImage: '',
		modalOpen: false
	}

	render() {
		const imgs = this.props.data.map(
			({ node: { id, name, publicURL, childImageSharp } }) => {
				const thumb = childImageSharp.fluid

				return (
					<div key={id} className="gallery-item">
						<div
							className="thumb-image"
							onClick={() =>
								this.setState({
									currentImage: publicURL,
									modalOpen: true
								})
							}
						>
							<Img className="thumb-image" fluid={thumb} alt={name} />
						</div>
					</div>
				)
			}
		)

		return (
			<div className="gallery-grid">
				<div
					className={
						this.state.modalOpen ? 'modal-image open' : 'modal-image'
					}
				>
					<div className="inner-modal">
						<div
							className="close-modal"
							onClick={() => this.setState({ modalOpen: false })}
						>
							&#215;
						</div>
						<img src={this.state.currentImage} alt="" />
					</div>
				</div>
				{imgs}
			</div>
		)
	}
}

export default props => (
	<StaticQuery
		query={graphql`
			query GalleryQuery {
				allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
					edges {
						node {
							id
							name
							publicURL
							childImageSharp {
								fluid(maxWidth: 400) {
									src
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={({ allFile: { edges } }) => <Gallery data={edges} {...props} />}
	/>
)
