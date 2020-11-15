import React from 'react'

import Header from './src/components/Header'
import AdsModal from './src/components/AdsModal'
import WhatsappChat from './src/components/WhatsappChat'
import Footer from './src/components/Footer'
import Carrousel from './src/components/Carrousel'

export const wrapPageElement = ({ element }) => (
	<>
		<Header />
		<AdsModal active={window && window.activeModal} />
		{element}
		<Carrousel />
		<Footer />
		<WhatsappChat />
	</>
)
