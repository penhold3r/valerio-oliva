import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-styled-carousel'
import Img from 'gatsby-image'

const Carrousel = ({ data }) => {
	return (
		<div className="carrousel">
			<Slider
				showArrows={false}
				showDots={false}
				cardsToShow={5}
				autoSlide={true}
				responsive={[
					{ breakPoint: 1280, cardsToShow: 5 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
					{ breakPoint: 460, cardsToShow: 3 }
				]}
			>
				{data &&
					data.map(({ node: { id, name, childImageSharp } }) => {
						return (
							<Img
								key={id}
								className="brand-logo"
								fluid={childImageSharp.fluid}
								alt={name}
								title={name}
							/>
						)
					})}
			</Slider>
		</div>
	)
}

export default props => (
	<StaticQuery
		query={graphql`
			query CarrouselQuery {
				allFile(filter: { sourceInstanceName: { eq: "brands" } }) {
					edges {
						node {
							id
							name
							childImageSharp {
								fluid(maxWidth: 300) {
									src
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={({ allFile: { edges } }) => <Carrousel data={edges} {...props} />}
	/>
)
