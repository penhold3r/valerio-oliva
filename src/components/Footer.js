import React from 'react'

import Services from './Services'

const Footer = () => {
	return (
		<React.Fragment>
			<Services />
			<footer className="site-footer">
				<div className="columns">
					<div className="footer-block">
						<h4>Seguinos en</h4>
						<div className="links">
							<a href="https://facebook.com" title="Facebook" className="social">
								<i className="icon icon-facebook" />
								<span>Facebook</span>
							</a>
							<a href="https://instagram.com" title="Instagram" className="social">
								<i className="icon icon-instagram" />
								<span>Instagram</span>
							</a>
						</div>
					</div>
					<div className="footer-block">
						<h4>Contactenos</h4>
						<div className="links contact-links">
							<a href="tel:tel:+542614316010">
								<i className="icon icon-phone" />
								<span>
									54 - 261- <strong>431 6010</strong>
								</span>
							</a>
							<a href="whatsapp://send?text=Hola!&phone=tel:+542615320000">
								<i className="icon icon-whatsapp" />
								<span>
									+54 261 <strong>532 0000</strong>
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className="copy">
					<p>
						<em>
							<strong>&copy; 2018 Valerio Oliva</strong> - Maderas y Materiales. Todos los
							derechos reservados.
						</em>
					</p>
				</div>
			</footer>
		</React.Fragment>
	)
}

export default Footer
