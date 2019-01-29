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
				//cardsToShow={3}
				autoSlide={true}
				responsive={[
					{ breakPoint: 740, cardsToShow: 6 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
					{ breakPoint: 480, cardsToShow: 4 }
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
