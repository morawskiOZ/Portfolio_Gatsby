import axios from 'axios'
import React, { useState } from 'react'
import './ContactForm.scss'

const ContactForm = () => {
	const [name, setName] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [sent, setSent] = useState<boolean>(false)
	const [buttonText, setButtonText] = useState<string>('Send')

	const resetForm = () => {
		setName('')
		setMessage('')
		setEmail('')
		setButtonText('Send')
	}

	const handleSubmit = event => {
		event.preventDefault()

		setButtonText('...sending')

		const data = {
			name,
			email,
			message,
		}

		axios
			.post('api/v1', data)
			.then(res => {
				setSent(true)
				resetForm()
			})
			.catch(() => {
				console.log('Message not sent')
			})
	}
	return (
		<form className='ContactForm' onSubmit={handleSubmit}>
			<label className='ContactForm-label' htmlFor='message-input'>
				Message
			</label>
			<textarea
				onChange={e => setMessage(e.target.value)}
				name='message'
				className='ContactForm-textArea ContactForm-input'
				placeholder='Please write your message here'
				value={message}
				required
			/>

			<label className='ContactForm-label' htmlFor='message-name'>
				Name
			</label>
			<input
				onChange={e => setName(e.target.value)}
				name='name'
				className='ContactForm-textInput ContactForm-input'
				type='text'
				placeholder='Your Name'
				value={name}
			/>

			<label className='ContactForm-label' htmlFor='message-email'>
				Email
			</label>
			<input
				onChange={e => setEmail(e.target.value)}
				name='email'
				className='ContactForm-textInput ContactForm-input'
				type='email'
				placeholder='your@email.com'
				required
				value={email}
			/>

			{sent ? (
				<p className='ContactForm-message'>Message has been sent! Thank you!</p>
			) : (
				<button type='submit' className='ContactForm-button'>
					{buttonText}
				</button>
			)}
		</form>
	)
}

export default ContactForm
