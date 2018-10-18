import React from 'react'
//import { Link } from "gatsby"

import Layout from '../../components/Layout'
import estructuras from '../../images/tipos-de-estructura.svg'
import cortes from '../../images/tipos-de-corte.svg'

const LaminatedPage = () => (
   <Layout>
      <section className="laminated">
         <h1 className="main-title">Vigas Laminadas</h1>
         <div className="vigas-text">
            <p>
               La madera multilaminada está constituida por láminas de distintos
               largos, seleccionados, de un espesor determinado que permite
               eliminar los defectos. Se unen entre sí por el sistema de
               entalladuras múltiples, hasta alcanzar la longitud de la pieza a
               construir.
            </p>

            <p>
               Estas láminas son encoladas, obteniéndose un elemento con
               resistencia mecánica superior a la misma madera que lo compone y
               de gran estabilidad dimensional.
            </p>

            <p>
               La firma elabora industrialmente Maderas Multilaminadas desde
               hace cuatro décadas.
            </p>

            <p>
               A ese efecto cuenta con una planta de 3000m2 cubiertos, personal
               capacitado y el más moderno equipamiento, que nos permite
               asegurar el mantenimiento de la calidad.
            </p>
         </div>
         <div className="specs">
            <div className="spec-block">
               <h2>Tipos de Estructura</h2>
               <img src={estructuras} alt="" />
            </div>
            <div className="spec-block">
               <h2>Caractéristicas</h2>
            </div>
            <div className="spec-block">
               <h2>Tipos de Cortes en Extremos Sugeridos</h2>
               <img src={cortes} alt="" />
            </div>
            <div className="spec-block">
               <h2>Obras destacadas</h2>
               <p>
                  Múltiples obras a lo largo de todo el país avalan la
                  trayectoria de nuestra empresa.
               </p>
            </div>
         </div>
      </section>
   </Layout>
)

export default LaminatedPage
