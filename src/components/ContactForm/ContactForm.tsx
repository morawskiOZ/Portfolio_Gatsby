import axios from 'axios'
import React, { FormEvent, useState, ReactElement } from 'react'
import './ContactForm.scss'
import { RE_CAPTCHA_CLIENT } from 'src/config'

const ContactForm = (): ReactElement => {
	const [name, setName] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [sent, setSent] = useState<boolean>(false)
	const [buttonText, setButtonText] = useState<string>('Send')
	const [error, setError] = useState(null)

	const handleSend = async (
		event: FormEvent<HTMLFormElement>,
		ReCaptchaToken: string
	): Promise<void> => {
		setButtonText('...sending')

		const data = {
			name,
			email,
			message,
			token: ReCaptchaToken,
		}
		try {
			await axios.post('/send', data, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
			setSent(true)
			setButtonText('')
		} catch (e) {
			setError(e.message)
		}
	}

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
		event.preventDefault()
		grecaptcha.ready(async () => {
			const token = await grecaptcha.execute(RE_CAPTCHA_CLIENT, {
				action: 'demo',
			})
			handleSend(event, token)
		})
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

			{sent && !error && (
				<p className='ContactForm-message'>Message has been sent! Thank you!</p>
			)}
			{!sent && buttonText && !error && (
				<button type='submit' className='ContactForm-button'>
					{buttonText}
				</button>
			)}
			{error && (
				<p className='ContactForm-message'>
					Sorry,an error has occurred. Please refresh the page and try again.
				</p>
			)}
		</form>
	)
}

export default ContactForm
