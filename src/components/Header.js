import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/valerio_oliva_logo.svg'

class Header extends React.Component {
	state = { menuOpen: false }
	handleMenu = () => {
		const menuOpen = !this.state.menuOpen
		this.setState({ menuOpen })
	}
	render() {
		return (
			<header className="header">
				<div className="inner-header">
					<h1 className="logo">
						<Link to="/">
							<img src={logo} alt="Valerio Oliva" />
						</Link>
					</h1>
					<div
						className={
							this.state.menuOpen ? 'hamb-menu crossed' : 'hamb-menu'
						}
						onClick={this.handleMenu}
					>
						<div className="hamb-bar" />
						<div className="hamb-bar" />
						<div className="hamb-bar" />
					</div>
					<nav
						className={this.state.menuOpen ? 'main-nav open' : 'main-nav'}
					>
						<ul className="nav-list">
							<li className="nav-item">
								<Link className="nav-link" to="/productos/materiales">
									Materiales
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/productos/vigas-laminadas"
								>
									Vigas Laminadas
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/nuestra-empresa">
									Nuestra Empresa
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contacto">
									Contacto
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header
