import React from 'react'
//import { Link } from "gatsby"

import Layout from '../../components/Layout'

import vigasImg from '../../images/vigas.jpg'
import estructuras from '../../images/tipos-de-estructura.svg'
import cortes from '../../images/tipos-de-corte.svg'

const LaminatedPage = () => {
	const galleryList = require.context(
		'../../images/gallery',
		false,
		/.*\.jpg$/
	)

	return (
		<Layout>
			<section className="laminated">
				<header className="vigas-header">
					<h1 className="main-title">Vigas Laminadas</h1>
					<img src={vigasImg} alt="" className="vigas-img" />
				</header>
				<div className="vigas-text">
					<p>
						La madera multilaminada está constituida por láminas de
						distintos largos, seleccionados, de un espesor determinado que
						permite eliminar los defectos. Se unen entre sí por el sistema
						de entalladuras múltiples, hasta alcanzar la longitud de la
						pieza a construir.
					</p>

					<p>
						Estas láminas son encoladas, obteniéndose un elemento con
						resistencia mecánica superior a la misma madera que lo compone
						y de gran estabilidad dimensional.
					</p>

					<p>
						La firma elabora industrialmente Maderas Multilaminadas desde
						hace cuatro décadas.
					</p>

					<p>
						A ese efecto cuenta con una planta de 3000m2 cubiertos,
						personal capacitado y el más moderno equipamiento, que nos
						permite asegurar el mantenimiento de la calidad.
					</p>
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
						<div className="gallery-grid">
							{galleryList.keys().map((img, key) => {
								//console.log(img)
								const src = galleryList(img)
								return (
									<div key={key} className="gallery-item">
										<img className="thumb-image" src={src} alt="" />
										<div className="modal-image">
											<img src={src} alt="" />
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default LaminatedPage
