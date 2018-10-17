import React from 'react'
import { Link } from 'gatsby'

import materiales from '../../products/materiales-list'
import Layout from '../../components/Layout'

const MaterialsPage = () => (
   <Layout>
      <section className="materials">
         <h1 className="main-title">Maderas y Materiales</h1>
         <div className="material-list">
            {materiales.map((producto, key) => (
               <div key={key} className="product-icon">
                  <h3>{producto.name}</h3>
                  <p>{producto.description}</p>
               </div>
            ))}
         </div>
      </section>
   </Layout>
)

export default MaterialsPage
