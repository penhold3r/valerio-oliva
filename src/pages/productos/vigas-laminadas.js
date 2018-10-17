import React from 'react'
import { Link } from 'gatsby'

import vigas from '../../products/vigas-list'
import Layout from '../../components/Layout'

const LaminatedPage = () => (
   <Layout>
      <section className="laminated">
         <h1 className="main-title">Vigas Laminadas</h1>
         <div className="material-list">
            {vigas.map((producto, key) => (
               <div key={key} className="product-icon">
                  <h3>{producto.name}</h3>
                  <p>{producto.description}</p>
               </div>
            ))}
         </div>
      </section>
   </Layout>
)

export default LaminatedPage
