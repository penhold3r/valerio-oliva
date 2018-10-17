import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = () => (
   <Layout>
      <section className="landing">
         <div className="products-options">
            <Link to="/productos/materiales">
               <img src="" alt="" />
               <h2>Maderas y materiales</h2>
            </Link>
         </div>
         <div className="products-options">
            <Link to="/productos/vigas-laminadas">
               <img src="" alt="" />
               <h2>Vigas Laminadas</h2>
            </Link>
         </div>
      </section>
   </Layout>
)

export default IndexPage
