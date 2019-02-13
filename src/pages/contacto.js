import React from 'react'
import GoogleMapReact from 'google-map-react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'

class ContactPage extends React.Component {
	state = { focused: false }

	render() {
		const textClass = this.state.focused ? 'field-block' : 'field-block message icon-bubble'
		return (
			<Layout title={'Contacto'}>
				<section className="contact">
					<header className="contact-header">
						<h1 className="main-title">Contacto</h1>
					</header>
					<div className="contact-content">
						<form action="" className="form">
							<div className="field-block">
								<label htmlFor="name">Nombre</label>
								<input className="field" type="text" name="name" id="name" />
							</div>
							<div className="field-block">
								<label htmlFor="email">Email</label>
								<input className="field" type="text" name="email" id="email" />
							</div>
							<div className={textClass}>
								<label htmlFor="msg">Mensaje</label>
								<textarea
									className="field textarea"
									name="msg"
									id="msg"
									onBlur={() => this.setState({ focused: false })}
									onFocus={() => this.setState({ focused: true })}
								/>
							</div>
							<input
								className="submit"
								type="submit"
								value="Enviar Mensaje"
								onClick={e => e.preventDefault()}
							/>
						</form>
						<div className="gmap">
							<GoogleMapReact
								bootstrapURLKeys={{
									key: 'AIzaSyBZLEliDhUUlSxi5yjNAB8F9-lDYVVAoYM'
								}}
								defaultCenter={{
									lat: -32.927869,
									lng: -68.815098
								}}
								defaultZoom={15}
							/>
							<div className="mark">
								<span>Valerio Oliva</span>
							</div>
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
}

export default ContactPage
