import React from 'react'

import Link from '../components/Link'
import Services from './Services'

import contact from '../data/contact.json'

const Footer = () => {
	return (
		<React.Fragment>
			<Services />
			<footer className='site-footer'>
				<div className='columns'>
					<div className='footer-block'>
						<h4>Seguinos en</h4>
						<div className='links'>
							<a href={contact.facebook} title='Facebook' className='social'>
								<i className='icon icon-facebook' />
								<span>Facebook</span>
							</a>
							<a href={contact.instagram} title='Instagram' className='social'>
								<i className='icon icon-instagram' />
								<span>Instagram</span>
							</a>
						</div>
					</div>
					<div className='footer-block'>
						<h4>Contactenos</h4>
						<div className='links contact-links'>
							<a href={`tel:${contact.tel.number}`}>
								<i className='icon icon-phone' />
								<span dangerouslySetInnerHTML={{ __html: contact.tel.formatted }} />
							</a>
							<a
								href={`https://wa.me/${contact.whatsapp.number}?text=${contact.whatsapp.text}`}
								title='WhatsApp'
								target='_blank'
								rel='noopener noreferrer'>
								<i className='icon icon-whatsapp' />
								<span dangerouslySetInnerHTML={{ __html: contact.whatsapp.content }} />
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
							<Link to='https://goo.gl/maps/9F6jGeftNPhzphnJ9' className='credit-link'>
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
