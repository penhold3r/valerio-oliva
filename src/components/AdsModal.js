import React, { useEffect, useRef, useState } from 'react'

const AdsModal = () => {
	const [active, setActive] = useState(false)
	const modal = useRef()

	const closeModal = () => {
		modal.current.classList.add('closed')
	}

	useEffect(() => {
		window && setActive(window.activeModal)
		//eslint-disable-next-line
	}, [])

	return (
		<div className={active ? 'ads-modal active' : 'ads-modal'} ref={modal}>
			{active && (
				<div className='modal-content'>
					<button className='modal-close' onClick={() => closeModal()}>
						&times;
					</button>
					<img src='./modal/valerio-oliva_modal.jpg' alt='' />
				</div>
			)}
		</div>
	)
}

export default AdsModal
