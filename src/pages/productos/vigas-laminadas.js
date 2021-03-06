import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Link from '../../components/Link'
//import VigasTable from '../../components/VigasTable'
import Slider from '../../components/Slider'
import Gallery from '../../components/Gallery'

import floatImg from '../../assets/images/valerio-oliva-productos_laminados.jpg'

import estructuraIcon from '../../assets/icons/vigas_estructura-icon.svg'
import cortesIcon from '../../assets/icons/vigas_cortes-icon.svg'
//import caracteristicasIcon from '../../assets/icons/vigas_caracteristicas-icon.svg'
import estructuras from '../../assets/images/tipos-de-estructura.svg'
import cortes from '../../assets/images/tipos-de-corte.svg'

const context = require.context(
	'../../assets/images',
	true,
	/valerio_oliva-vigas_laminadas(\d+)\.jp(e?)g/
)

const LaminatedPage = () => {
	const [modalState, setModalState] = useState({
		modalOpen: false,
		modalContent: '',
		modalTitle: '',
	})

	const [floatOpen, setFloatState] = useState(false)

	const {
		allFile: { edges },
	} = useStaticQuery(graphql`
		query ObrasQuery {
			allFile(filter: { relativeDirectory: { eq: "obras" } }) {
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
	`)

	const openModal = (title, content) => {
		const open = {
			modalOpen: true,
			modalContent: content,
			modalTitle: title,
		}
		setModalState(open)
	}

	const closeModal = () => {
		const defModal = {
			modalOpen: false,
			modalContent: '',
			modalTitle: '',
		}
		setModalState(defModal)
	}

	const images = context.keys().map(key => context(key))

	useEffect(() => {
		setTimeout(() => setFloatState(true), 1200)
	}, [])

	return (
		<Layout title={'Vigas Laminadas'}>
			<section className='laminated fader'>
				<div className={`specs-modal ${modalState.modalOpen && 'open'}`}>
					<div className='specs-content'>
						<header className='modal-header'>
							<h3>{modalState.modalTitle && modalState.modalTitle}</h3>
							<button className='close-modal' onClick={() => closeModal()}>
								&times;
							</button>
						</header>
						<div className='modal-content'>
							{modalState.modalContent && modalState.modalContent}
						</div>
					</div>
				</div>

				<div className='float-btn-wrapper'>
					<div className={floatOpen ? 'float-btn open' : 'float-btn'}>
						<button className='arrow' onClick={() => setFloatState(!floatOpen)}>
							<span>&lang;</span>
						</button>
						<img src={floatImg} alt='[ Productos Laminados ]' />
						<h3 className='tag'>
							<span>Nuevos</span>

							<span>Productos</span>

							<span>Multilaminados</span>
						</h3>
						<Link className='link' to='/productos/vigas-laminadas/productos-multilaminados'>
							Ver más
						</Link>
					</div>
				</div>

				<header className='vigas-header'>
					<h2 className='main-title'>Vigas Laminadas</h2>

					<Slider>
						{images.map((img, key) => (
							<img key={key} src={img} alt='' />
						))}
					</Slider>
				</header>
				<div className='vigas-content'>
					<div className='vigas-block'>
						<div className='vigas-text'>
							<h3 className='sub-title'>Diseño, Ingeniería y Fabricación</h3>
							<div className='border-block'>
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

							<div className='color-block'>
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
					<div className='specs'>
						<div className='spec-block'>
							<button
								className='specs-icon'
								onKeyDown={() =>
									openModal('Tipos de Estructuras', <img src={estructuras} alt='' />)
								}
								onClick={() =>
									openModal('Tipos de Estructuras', <img src={estructuras} alt='' />)
								}>
								<img src={estructuraIcon} alt='' />
							</button>
							<h2 className='specs-title'>
								<span>Tipos de </span>
								<span className='grey'>Estructuras</span>
							</h2>
						</div>
						{/* <div className="spec-block">
							<div
								className="specs-icon"
								onClick={() => openModal('Caracteristicas', <VigasTable />)}
							>
								<img src={caracteristicasIcon} alt="" />
							</div>
							<h2 className="specs-title">
								<span>Lista de </span>
								<span className="grey">Caractéristicas</span>
							</h2>
						</div> */}
						<div className='spec-block'>
							<button
								className='specs-icon'
								onKeyDown={() => openModal('Tipos de Cortes', <img src={cortes} alt='' />)}
								onClick={() => openModal('Tipos de Cortes', <img src={cortes} alt='' />)}>
								<img src={cortesIcon} alt='' />
							</button>
							<h2 className='specs-title'>
								<span>Tipos de </span>
								<span className='grey'>Cortes</span>
							</h2>
						</div>
					</div>
					<div className='vigas-gallery'>
						<h2 className='vigas-gallery-title'>Obras destacadas</h2>
						<div className='vigas-gallery-content'>
							<div className='intro-text'>
								<p>
									Múltiples obras a lo largo de todo el país avalan la trayectoria de
									nuestra empresa.
								</p>
							</div>
							<Gallery data={edges} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default LaminatedPage
