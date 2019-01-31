import React from 'react'
import { Parallax } from 'react-parallax'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

import vigasImg from '../../assets/images/vigas.jpg'
import estructuras from '../../assets/images/tipos-de-estructura.svg'
import cortes from '../../assets/images/tipos-de-corte.svg'

const LaminatedPage = () => {
	return (
		<Layout title={'Vigas Laminadas'}>
			<section className="laminated">
				<header className="vigas-header">
					<h2 className="main-title">Vigas Laminadas</h2>

					<Parallax
						bgImage={vigasImg}
						bgImageAlt={'[ Vigas Laminadas ]'}
						strength={400}
						className="vigas-img"
					/>
				</header>
				<div className="vigas-content">
					<div className="vigas-text">
						<h3 className="sub-title">
							Diseño, Ingeniería y Fabricación
						</h3>
						<div className="border-block">
							<p>
								La madera multilaminada está constituida por láminas de
								distintos largos, seleccionados, de un espesor
								determinado que permite eliminar los defectos. Se unen
								entre sí por el sistema de entalladuras múltiples, hasta
								alcanzar la longitud de la pieza a construir.
							</p>

							<p>
								Estas láminas son encoladas, obteniéndose un elemento
								con resistencia mecánica superior a la misma madera que
								lo compone y de gran estabilidad dimensional.
							</p>
						</div>

						<div className="color-block">
							<p>
								La firma elabora industrialmente Maderas Multilaminadas
								desde hace cuatro décadas.
							</p>

							<p>
								A ese efecto cuenta con una planta de 3000m2 cubiertos,
								personal capacitado y el más moderno equipamiento, que
								nos permite asegurar el mantenimiento de la calidad.
							</p>
						</div>
					</div>
					<div className="specs">
						<div className="spec-block">
							<h2 className="specs-title">
								<div className="specs-icon" />
								<span>Tipos de Estructura</span>
							</h2>
							<div className="specs-content">
								<img src={estructuras} alt="" />
							</div>
						</div>
						<div className="spec-block">
							<h2 className="specs-title">
								<div className="specs-icon" />
								<span>Caractéristicas</span>
							</h2>
							<div className="specs-content" />
						</div>
						<div className="spec-block">
							<h2 className="specs-title">
								<div className="specs-icon" />
								<span>Tipos de Cortes en Extremos Sugeridos</span>
							</h2>
							<div className="specs-content">
								<img src={cortes} alt="" />
							</div>
						</div>
					</div>
					<div className="vigas-gallery">
						<h2 className="gallery-title">Obras destacadas</h2>
						<div className="gallery-content">
							<p>
								Múltiples obras a lo largo de todo el país avalan la
								trayectoria de nuestra empresa.
							</p>
							<Gallery />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default LaminatedPage
