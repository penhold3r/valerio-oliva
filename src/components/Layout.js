import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'sanitize.css'
import '../styles/index.scss'
import Header from './Header'

const Layout = ({ children }) => (
   <React.Fragment>
      <Helmet
         title="Valerio Oliva"
         meta={[
            {
               name: 'description',
               content: 'Maderas Laminadas para la construcción'
            },
            {
               name: 'keywords',
               content: 'maderas, maderas laminadas, construcción, materiales'
            }
         ]}
      >
         <html lang="es" />
         <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,700,700i"
            rel="stylesheet"
         />
         <link
            href="https://fonts.googleapis.com/css?family=Cairo:300"
            rel="stylesheet"
         />
      </Helmet>

      <Header />

      <main>{children}</main>
   </React.Fragment>
)

Layout.propTypes = {
   children: PropTypes.node.isRequired
}

export default Layout
