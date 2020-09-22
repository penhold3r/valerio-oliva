import React, { useState } from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/valerio_oliva_logo.svg'
import { ReactComponent as AFIP } from '../assets/images/afip-logo.svg'

const Header = () => {
	const [menuOpen, setMenu] = useState(false)

	return (
		<header className="header">
			<div className="inner-header">
				<h1 className="logo">
					<Link to="/">
						<img src={logo} alt="Valerio Oliva" />
					</Link>
				</h1>
				<div
					className={menuOpen ? 'hamb-menu crossed' : 'hamb-menu'}
					onClick={() => setMenu(!menuOpen)}
				>
					<div className="hamb-bar" />
					<div className="hamb-bar" />
					<div className="hamb-bar" />
				</div>
				<nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
					<ul className="nav-list">
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/productos/materiales"
								activeClassName="active-link"
							>
								Materiales
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/productos/vigas-laminadas"
								activeClassName="active-link"
							>
								Vigas Laminadas
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/nuestra-empresa" activeClassName="active-link">
								Nuestra Empresa
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contacto" activeClassName="active-link">
								Contacto
							</Link>
						</li>
					</ul>
					<div className="nav-icons">
						<a href="/AFIP.pdf" target="_blank" rel="noopener noreferrer" title="Data Fiscal">
							<AFIP className="afip" />
						</a>
						<a
							href="https://wa.me/+542612179863?text=Hola!"
							title="Whatsapp"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon icon-whatsapp" />
						</a>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
