import React from 'react'

import Link from '../components/Link'
import Services from './Services'

const Footer = () => {
	return (
		<React.Fragment>
			<Services />
			<footer className='site-footer'>
				<div className='columns'>
					<div className='footer-block'>
						<h4>Seguinos en</h4>
						<div className='links'>
							<a
								href='https://facebook.com/valerioolivamaderas'
								title='Facebook'
								className='social'>
								<i className='icon icon-facebook' />
								<span>Facebook</span>
							</a>
							<a
								href='https://instagram.com/valeriolivamza'
								title='Instagram'
								className='social'>
								<i className='icon icon-instagram' />
								<span>Instagram</span>
							</a>
						</div>
					</div>
					<div className='footer-block'>
						<h4>Contactenos</h4>
						<div className='links contact-links'>
							<a href='tel:tel:+542614316010'>
								<i className='icon icon-phone' />
								<span>
									54 - 261- <strong>431 6010</strong>
								</span>
							</a>
							<a
								href='https://wa.me/+542612179863?text=Hola!'
								title='WhatsApp'
								target='_blank'
								rel='noopener noreferrer'>
								<i className='icon icon-whatsapp' />
								<span>
									+54 261 <strong>217 9863</strong>
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className='copy'>
					<p>
						<em>
							<strong>&copy; {new Date().getFullYear()} Valerio Oliva</strong> - Maderas y
							Materiales. <span className='rights'>Todos los derechos reservados.</span>
						</em>
					</p>
				</div>
				<p className='credit'>
					<small>
						<span className='credit-links'>
							<span className='credit-label'>Diseño y Desarrollo: </span>
							<Link to='https://www.instagram.com/cm_brand_agency/' className='credit-link'>
								BeWine
							</Link>
							&ensp;&amp;&ensp;
							<Link to='https://github.com/penhold3r' className='credit-link'>
								penHolder Designerd
							</Link>
						</span>
					</small>
				</p>
			</footer>
		</React.Fragment>
	)
}

export default Footer
