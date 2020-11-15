import React, { useRef } from 'react'

const AdsModal = ({ active = false }) => {
	const modal = useRef()

	const closeModal = () => {
		console.log('modal close')
		modal.current.classList.add('closed')
	}

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
