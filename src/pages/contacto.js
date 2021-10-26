import React, { useState } from 'react'
import submitForm from '../utils/submit-form'

import Layout from '../components/Layout'
import GoogleMap from '../components/Map'

import mapIcon from '../assets/images/map_mark.svg'

import contact from '../data/contact.json'

const ContactPage = () => {
	const [focused, setFocus] = useState(false)

	const handleSubmit = e => {
		const submitSettings = {
			dest: 'http://valeriooliva.com/contact-form/index.php',
			fields: '.field',
			successMsg: '¡Mensaje enviado!',
			errorMsg: 'Hubo un error, intente más tarde.',
			sending: 'Enviando...',
			urlencoded: true,
		}

		const form = document.querySelector('.form')

		const humanForm = document.querySelector('.human')
		const human = humanForm.value === ''

		console.log('submit')

		e.preventDefault()
		human && submitForm(form, submitSettings)
	}

	const mapProps = {
		center: {
			lat: -32.927869,
			lng: -68.815098,
		},
		zoom: 15,
		title: 'Valerio Oliva',
		icon: mapIcon,
		link:
			'https://www.google.com/maps/place/VALERIO+OLIVA+s.a.c.i.a./@-32.9278162,-68.8175899,16.62z/data=!4m5!3m4!1s0x967e0bf90a1bb189:0xec6043c2e6b44dc1!8m2!3d-32.928105!4d-68.815038?hl=es',
	}

	const textClass = focused ? 'field-block' : 'field-block message icon-bubble'

	return (
		<Layout title={'Contacto'}>
			<section className='contact fader'>
				<header className='contact-header'>
					<h2 className='main-title'>Contacto</h2>
				</header>
				<div className='contact-content'>
					<form action='' className='form' onSubmit={handleSubmit}>
						<div className='field-block'>
							<label htmlFor='name'>Nombre</label>
							<input className='field' type='text' name='name' id='name' required />
						</div>
						<div className='field-block'>
							<label htmlFor='email'>Email</label>
							<input className='field' type='email' name='email' id='email' required />
						</div>
						<div className={textClass}>
							<label htmlFor='message'>Mensaje</label>
							<textarea
								className='field textarea'
								name='message'
								id='message'
								onBlur={() => setFocus(true)}
								onFocus={() => setFocus(true)}
								required
							/>
						</div>
						<input type='text' className='human' tabIndex='-1' />
						<input className='submit' type='submit' value='Enviar Mensaje' />
					</form>
					<div className='map-holder'>
						<GoogleMap config={mapProps}></GoogleMap>
					</div>
					<div className='contact-info'>
						<div className='contact-block icon icon-map-mark'>
							<h4>Visitanos en:</h4>
							<p dangerouslySetInnerHTML={{ __html: contact.address }} />
						</div>
						<div className='contact-block icon icon-mail-line'>
							<h4>Nuestro e-mail:</h4>
							<p>
								<a href={`mailto:${contact.email}`}>{contact.email}</a>
							</p>
						</div>
						<div className='contact-block icon icon-phone'>
							<h4>Lamanos al:</h4>
							<p>
								<a href={`tel:${contact.tel.number}`}>
									<span dangerouslySetInnerHTML={{ __html: contact.tel.formatted }} />
								</a>
							</p>
						</div>
						<div className='contact-block icon icon-whatsapp'>
							<h4>Escribinos al:</h4>
							<p>
								<a href={`https://wa.me/${contact.whatsapp.number}?text=${contact.whatsapp.text}`}>
									<span dangerouslySetInnerHTML={{ __html: contact.whatsapp.content }} />
								</a>
							</p>
						</div>

						<div className='contact-block icon icon-clock'>
							<h4>Horarios de atención:</h4>
							<p>
								Lun a Vier, de <strong>9:10 a 18:00 hs.</strong>
								{/* <br />y de <strong>15:30 a 20:00 hs.</strong> */}
								<br />
								Sábados de <strong>9:10 a 13:00 hs.</strong>
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default ContactPage
