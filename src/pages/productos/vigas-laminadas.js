import React, { useState } from 'react'

import Layout from '../../components/Layout'
import Link from '../../components/Link'
import VigasTable from '../../components/VigasTable'
import Slider from '../../components/Slider'

import vigasImg01 from '../../assets/images/valerio_oliva-vigas_laminadas01.jpg'
import vigasImg02 from '../../assets/images/valerio_oliva-vigas_laminadas02.jpg'
import vigasImg03 from '../../assets/images/valerio_oliva-vigas_laminadas03.jpg'
import vigasImg04 from '../../assets/images/valerio_oliva-vigas_laminadas04.jpg'

import estructuraIcon from '../../assets/icons/vigas_estructura-icon.svg'
import cortesIcon from '../../assets/icons/vigas_cortes-icon.svg'
import caracteristicasIcon from '../../assets/icons/vigas_caracteristicas-icon.svg'

import estructuras from '../../assets/images/tipos-de-estructura.svg'
import cortes from '../../assets/images/tipos-de-corte.svg'

const LaminatedPage = () => {
	const [modalState, setModalState] = useState({
		modalOpen: false,
		modalContent: '',
		modalTitle: ''
	})

	const openModal = (title, content) => {
		const open = {
			modalOpen: true,
			modalContent: content,
			modalTitle: title
		}
		setModalState(open)
	}

	const closeModal = () => {
		const defModal = {
			modalOpen: false,
			modalContent: '',
			modalTitle: ''
		}
		setModalState(defModal)
	}

	return (
		<Layout title={'Vigas Laminadas'}>
			<section className="laminated fader">
				<div className={`specs-modal ${modalState.modalOpen && 'open'}`}>
					<div className="specs-content">
						<header className="modal-header">
							<h3>{modalState.modalTitle && modalState.modalTitle}</h3>
							<div className="close-modal" onClick={() => closeModal()}>
								&times;
							</div>
						</header>
						<div className="modal-content">
							{modalState.modalContent && modalState.modalContent}
						</div>
					</div>
				</div>

				<header className="vigas-header">
					<h2 className="main-title">Vigas Laminadas</h2>

					<Slider>
						<img src={vigasImg01} alt="" />
						<img src={vigasImg02} alt="" />
						<img src={vigasImg03} alt="" />
						<img src={vigasImg04} alt="" />
					</Slider>
				</header>
				<div className="vigas-content">
					<div className="vigas-block">
						<div className="vigas-text">
							<h3 className="sub-title">Diseño, Ingeniería y Fabricación</h3>
							<div className="border-block">
								<p>
									La madera multilaminada está constituida por láminas de distintos largos,
									seleccionados, de un espesor determinado que permite eliminar los
									defectos. Se unen entre sí por el sistema de entalladuras múltiples,
									hasta alcanzar la longitud de la pieza a construir.
								</p>

								<p>
									Estas láminas son encoladas, obteniéndose un elemento con resistencia
									mecánica superior a la misma madera que lo compone y de gran estabilidad
									dimensional.
								</p>
							</div>

							<div className="color-block">
								<p>
									La firma elabora industrialmente Maderas Multilaminadas desde hace cuatro
									décadas.
								</p>

								<p>
									A ese efecto cuenta con una planta de 3000m2 cubiertos, personal
									capacitado y el más moderno equipamiento, que nos permite asegurar el
									mantenimiento de la calidad.
								</p>
							</div>
						</div>
					</div>
					<div className="specs">
						<div className="spec-block">
							<h2 className="specs-title">
								<div
									className="specs-icon"
									onClick={() =>
										openModal('Tipos de Estructuras', <img src={estructuras} alt="" />)
									}
								>
									<img src={estructuraIcon} alt="" />
								</div>
								<span>
									Tipos de <span className="grey">Estructuras</span>
								</span>
							</h2>
						</div>
						<div className="spec-block">
							<h2 className="specs-title">
								<div
									className="specs-icon"
									onClick={() => openModal('Caracteristicas', <VigasTable />)}
								>
									<img src={caracteristicasIcon} alt="" />
								</div>
								<span>
									Lista de <span className="grey">Caractéristicas</span>
								</span>
							</h2>
						</div>
						<div className="spec-block">
							<h2 className="specs-title">
								<div
									className="specs-icon"
									onClick={() => openModal('Tipos de Cortes', <img src={cortes} alt="" />)}
								>
									<img src={cortesIcon} alt="" />
								</div>
								<span>
									Tipos de <span className="grey">Cortes</span>
								</span>
							</h2>
						</div>
					</div>
					<div className="vigas-galleries">
						<h3 className="vigas-galleries-title">Galerías de Imágenes</h3>
						<Link className="vigas-galleries-link" to="/productos/vigas-laminadas/obras">
							Obras
						</Link>
						<Link
							className="vigas-galleries-link"
							to="/productos/vigas-laminadas/productos-multilaminados"
						>
							Productos Laminados
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default LaminatedPage
