import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import submitForm from '../utils/submit-form'

import Layout from '../components/Layout'

const ContactPage = () => {
	const [focused, setFocus] = useState(false)

	const contactMsgs = () => {
		const successMsg = '¡Mensaje enviado!'
		const errorMsg = 'Hubo un error, intente más tarde.'
		const sending = 'Enviando...'

		return { successMsg, errorMsg, sending }
	}

	const handleSubmit = e => {
		console.log('foo')
		const submitSettings = {
			dest: '/email-sender.php',
			fields: '.field',
			successMsg: contactMsgs().successMsg,
			errorMsg: contactMsgs().errorMsg,
			sending: contactMsgs().sending,
			urlencoded: true,
			reciever: 'penhold3r@gmail.com'
		}

		const form = document.querySelector('.form')

		const humanForm = document.querySelector('.human')
		const human = humanForm.value === ''

		e.preventDefault()
		human && submitForm(form, submitSettings)
	}

	const mapProps = {
		center: {
			lat: -32.927869,
			lng: -68.815098
		},
		zoom: 15
	}

	const textClass = focused ? 'field-block' : 'field-block message icon-bubble'

	return (
		<Layout title={'Contacto'}>
			<section className="contact fader">
				<header className="contact-header">
					<h2 className="main-title">Contacto</h2>
				</header>
				<div className="contact-content">
					<form action="" className="form">
						<div className="field-block">
							<label htmlFor="name">Nombre</label>
							<input className="field" type="text" name="name" id="name" required />
						</div>
						<div className="field-block">
							<label htmlFor="email">Email</label>
							<input className="field" type="email" name="email" id="email" required />
						</div>
						<div className={textClass}>
							<label htmlFor="msg">Mensaje</label>
							<textarea
								className="field textarea"
								name="msg"
								id="msg"
								onBlur={() => setFocus(true)}
								onFocus={() => setFocus(true)}
								required
							/>
						</div>
						<input type="text" className="human" tabIndex="-1" />
						<input
							className="submit"
							type="submit"
							value="Enviar Mensaje"
							onClick={handleSubmit}
						/>
					</form>
					<div className="gmap">
						<GoogleMapReact
							bootstrapURLKeys={{
								key: 'AIzaSyBRs-Luy6KaOFhALbTKyCJ8LJ2ILuB-q8g'
							}}
							defaultCenter={mapProps.center}
							defaultZoom={mapProps.zoom}
						>
							<div className="mark" lat={mapProps.center.lat} lng={mapProps.center.lng}>
								<span>Valerio Oliva</span>
							</div>
						</GoogleMapReact>
					</div>
					<div className="contact-info">
						<div className="contact-block icon icon-map-mark">
							<h4>Visitanos en:</h4>
							<p>Rodriguez Peña 2250 - (5501) - Godoy Cruz - Mendoza - Argentina.</p>
						</div>
						<div className="contact-block icon icon-mail-line">
							<h4>Nuestro e-mail:</h4>
							<p>
								<a href="mailto:ventas@valeriooliva.com">ventas@valeriooliva.com</a>
							</p>
						</div>
						<div className="contact-block icon icon-phone">
							<h4>Llamanos al:</h4>
							<p>
								<a href="tel:+542614316010">
									54 - 261- <strong>431 6010</strong>
								</a>
							</p>
						</div>
						<div className="contact-block icon icon-clock">
							<h4>Horarios de atención:</h4>
							<p>
								Lun a Vier, de <strong>8:30 a 12:30 hs.</strong>
								<br />y de <strong>15:30 a 20:00 hs.</strong>
								<br />
								Sábados de <strong>8:30 a 13:00 hs.</strong>
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default ContactPage
