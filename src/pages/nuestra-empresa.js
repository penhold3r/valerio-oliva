import React from 'react'
import { Parallax } from 'react-parallax'

import Layout from '../components/Layout'
import image from '../assets/images/empresa.jpg'

const AboutPage = () => (
	<Layout>
		<section className="about">
			<header className="about-header">
				<h2 className="main-title">Nuestra Empresa</h2>
				<Parallax
					bgImage={image}
					bgImageAlt={'[ Empresa ]'}
					strength={400}
					className="about-image"
				/>
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
