import React from 'react'
import GoogleMapReact from 'google-map-react'
//import { Link } from 'gatsby'

import Layout from '../components/Layout'

const ContactPage = () => (
   <Layout>
      <section className="contact">
         <header className="contact-header">
            <h1 className="main-title">Contacto</h1>
         </header>
         <div className="contact-info">
            <p>
               Rodriguez Peña 2250 - (5501) - Godoy Cruz - Mendoza - Argentina.
            </p>
            <p>
               Tel/fax: <a href="tel:+542614316010">54 - 261- 4316010</a>
            </p>
            <p>
               <a href="mailto:ventas@valeriooliva.com">
                  ventas@valeriooliva.com
               </a>
            </p>
         </div>
         <form action="" className="form">
            <div className="field-block">
               <label htmlFor="name">Nombre</label>
               <input className="field" type="text" name="name" id="name" />
            </div>
            <div className="field-block">
               <label htmlFor="email">Email</label>
               <input className="field" type="text" name="email" id="email" />
            </div>
            <div className="field-block">
               <label htmlFor="msg">Mensaje</label>
               <textarea className="field textarea" name="msg" id="msg" />
            </div>
            <input className="submit" type="submit" value="Enviar" />
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
      </section>
   </Layout>
)

export default ContactPage
