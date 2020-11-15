import React, { useEffect, useState } from 'react'

const WhatsappChat = () => {
	const [message, setMessage] = useState()
	const [openWindow, setOpenWindow] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()

		if (window && message) {
			window.open(`https://wa.me/+542612179863?text=${message}`, '_blank', 'noopener noreferrer')
			setMessage(null)
			setOpenWindow(false)
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => setOpenWindow(true), 1000)
		return () => clearTimeout(timer)
		//eslint-ignore-next-line
	}, [])

	return (
		<div className={openWindow ? 'whatsapp-chat open' : 'whatsapp-chat'}>
			<button className='button' onClick={() => setOpenWindow(true)} aria-label='Whatsapp Chat'>
				<i className='icon icon-whatsapp' />
			</button>
			<div className='chat-window'>
				<div className='header'>
					<span>Whatsapp Chat</span>
					<button onClick={() => setOpenWindow(false)}>&times;</button>
				</div>
				<div className='chat'>
					<div className='bubble'>
						<p>Hola! Estoy para ayudarte.</p>
						<p>¿Cuál es tu consulta?</p>
					</div>
					<form className='message' onSubmit={handleSubmit}>
						<input
							type='text'
							className='input'
							placeholder='mensaje...'
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
						<button type='submit' className='submit'>
							<i className='icon icon-paper-plane'></i>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default WhatsappChat
