import axios from 'axios'
import React, { FormEvent, useState, ReactElement } from 'react'
import './ContactForm.scss'

const ContactForm = (): ReactElement => {
	const [name, setName] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [sent, setSent] = useState<boolean>(false)
	const [buttonText, setButtonText] = useState<string>('Send')

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
		event.preventDefault()

		setButtonText('...sending')

		const data = {
			name,
			email,
			message,
		}
		await axios.post('api/v1', data)
		setSent(true)
	}
	return (
		<form className='ContactForm' onSubmit={handleSubmit}>
			<label className='ContactForm-label' htmlFor='message'>
				<p className='ContactForm-label--text'>Message</p>
				<textarea
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
						setMessage(e.target.value)
					}
					id='message'
					name='message'
					className='ContactForm-textArea ContactForm-input'
					placeholder='Please write your message here'
					value={message}
					required
				/>
			</label>

			<label className='ContactForm-label' htmlFor='name'>
				<p className='ContactForm-label--text'>Name</p>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
						setName(e.target.value)
					}
					id='name'
					name='name'
					className='ContactForm-textInput ContactForm-input'
					type='text'
					placeholder='Your Name'
					value={name}
				/>
			</label>

			<label className='ContactForm-label' htmlFor='email'>
				<p className='ContactForm-label--text'>Email</p>
				<input
					onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
						setEmail(e.target.value)
					}
					id='email'
					name='email'
					className='ContactForm-textInput ContactForm-input'
					type='email'
					placeholder='your@email.com'
					required
					value={email}
				/>
			</label>

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
