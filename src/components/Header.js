import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/valerio_oliva_logo.svg'

const Header = () => (
   <header className="header">
      <div className="inner-header">
         <h1 className="logo">
            <Link to="/">
               <img src={logo} alt="Valerio Oliva" />
            </Link>
         </h1>
         <nav className="main-nav">
            <ul className="nav-list">
               <li className="nav-item">
                  <Link className="nav-link" to="/">
                     Productos
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

export default Header
