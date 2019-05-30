import React from 'react'

import Layout from '../components/Layout'
import Slider from '../components/Slider'

import empresaImg01 from '../assets/images/valerio_oliva-empresa01.jpg'
import empresaImg02 from '../assets/images/valerio_oliva-empresa02.jpg'
import empresaImg03 from '../assets/images/valerio_oliva-empresa03.jpg'
import empresaImg04 from '../assets/images/valerio_oliva-empresa04.jpg'
import empresaImg05 from '../assets/images/valerio_oliva-empresa05.jpg'

const AboutPage = () => (
	<Layout>
		<section className="about fader">
			<header className="about-header">
				<h2 className="main-title">Nuestra Empresa</h2>

				<Slider>
					<img src={empresaImg01} alt="" />
					<img src={empresaImg02} alt="" />
					<img src={empresaImg03} alt="" />
					<img src={empresaImg04} alt="" />
					<img src={empresaImg05} alt="" />
				</Slider>
			</header>
			<div className="about-content">
				<div className="about-block">
					<div className="about-text">
						<h3 className="sub-title">VALERIO OLIVA S.A.C.I.A.,</h3>
						<p>
							Comenzó su trayectoria en{' '}
							<strong>
								<em>Mendoza - Argentina,</em>
							</strong>{' '}
							en 1956, iniciando un proceso de permanente crecimiento, instalándose también
							en{' '}
							<strong>
								<em>Misiones - Argentina,</em>
							</strong>{' '}
							donde cuenta con aserraderos y forestaciones de pinos complementado con amplios
							secaderos; cepillada, molduras y además piezas clear para el mercado externo.
						</p>

						<div className="color-block">
							<p>
								Mantiene un permanente stock de maderas nacionales e importadas, destinadas
								a la venta y a la industrialización; en constante desarollo y modernización
								y con muchos años de eficaz desempeño.
							</p>
							<p>
								<span className="border">
									<strong>
										Ha logrado un sólido prestigio por múltiples clientes en todo el país.
									</strong>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
)

export default AboutPage
