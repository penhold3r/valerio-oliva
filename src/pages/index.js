import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import vigas from '../assets/images/vigas.jpg'
import materiales from '../assets/images/maderas.jpg'

const IndexPage = () => (
	<Layout>
		<section className="landing">
			<div className="landing-grid">
				<div className="products-options">
					<Link to="/productos/materiales">
						<img src={materiales} alt="" />
						<h2>Maderas y materiales</h2>
					</Link>
				</div>
				<div className="products-options">
					<Link to="/productos/vigas-laminadas">
						<img src={vigas} alt="" />
						<h2>Vigas Laminadas</h2>
					</Link>
				</div>
			</div>
		</section>
	</Layout>
)

export default IndexPage
