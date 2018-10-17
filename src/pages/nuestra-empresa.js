import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const AboutPage = () => (
   <Layout>
      <section className="about">
         <h1 className="main-title">Nuestra Empresa</h1>
         <div className="about-text">
            <p>
               <strong>VALERIO OLIVA S.A.C.I.A.,</strong> comenzó su trayectoria
               en Mendoza - Argentina, en 1956, iniciando un proceso de
               permanente crecimiento, instalándose también en Misiones -
               Argentina, donde cuenta con aserraderos y forestaciones de pinos
               complementado con amplios secaderos; cepillada, molduras y además
               piezas clear para el mercado externo.
            </p>

            <p>
               Mantiene un permanente stock de maderas nacionales e importadas,
               destinadas a la venta y a la industrialización.
            </p>

            <p>
               En constante desarollo y modernización y con muchos años de
               eficaz desempeño, ha logrado un sólido prestigio por múltiples
               clientes en todo el país
            </p>
         </div>
      </section>
   </Layout>
)

export default AboutPage
