import React from 'react'
//import { Link } from "gatsby"

import Layout from '../../components/Layout'
import estructuras from '../../images/tipos-de-estructura.svg'
import cortes from '../../images/tipos-de-corte.svg'
import specs from '../../products/vigas'

const LaminatedPage = () => {
   console.log(specs)
   const specsTable = specs.map((row, trk) => {
      const th = Object.values(row).map((val, thk) => <th key={thk}>{val}</th>)
      return <tr key={trk}>{th}</tr>
   })
   return (
      <Layout>
         <section className="laminated">
            <h1 className="main-title">Vigas Laminadas</h1>
            <div className="vigas-text">
               <p>
                  La madera multilaminada está constituida por láminas de
                  distintos largos, seleccionados, de un espesor determinado que
                  permite eliminar los defectos. Se unen entre sí por el sistema
                  de entalladuras múltiples, hasta alcanzar la longitud de la
                  pieza a construir.
               </p>

               <p>
                  Estas láminas son encoladas, obteniéndose un elemento con
                  resistencia mecánica superior a la misma madera que lo compone
                  y de gran estabilidad dimensional.
               </p>

               <p>
                  La firma elabora industrialmente Maderas Multilaminadas desde
                  hace cuatro décadas.
               </p>

               <p>
                  A ese efecto cuenta con una planta de 3000m2 cubiertos,
                  personal capacitado y el más moderno equipamiento, que nos
                  permite asegurar el mantenimiento de la calidad.
               </p>
            </div>
            <div className="specs">
               <div className="spec-block">
                  <h2>Tipos de Estructura</h2>
                  <img src={estructuras} alt="" />
               </div>
               <div className="spec-block">
                  <h2>Caractéristicas</h2>
                  <table className="specs-table">
                     <thead>
                        <tr>
                           <th colSpan="4">Dimensión</th>
                        </tr>
                        <tr>
                           <th colSpan="2">Nominal</th>
                           <th colSpan="2">Neto</th>
                        </tr>
                        <tr>
                           <th>Pul</th>
                           <th>Pul</th>
                           <th>cm</th>
                           <th>cm</th>
                        </tr>
                        <tr>
                           <th>B</th>
                           <th>H</th>
                           <th>B</th>
                           <th>H</th>
                        </tr>
                     </thead>
                     <tbody>{specsTable}</tbody>
                  </table>
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
}

export default LaminatedPage
