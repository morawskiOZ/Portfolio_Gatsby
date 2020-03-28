const SparkPost = require('sparkpost')
const https = require('https')

const client = new SparkPost(process.env.SPARKPOST)

exports.handler = function(event, context, callback) {
	const sendEmail = (name, email, message) => {
		client.transmissions
			.send({
				content: {
					from: 'test@morawski.online',
					subject: 'Contact from portfolio',
					html: `<html><body><p>${message}sent by ${name} - email:${email}</p></body></html>`,
				},
				recipients: [{ address: process.env.EMAIL }],
			})
			.catch(err => {
				throw Error(err)
			})
		callback(null, {
			statusCode: 200,
			body: 'Hi',
		})
	}
	const { token, name, email, message } = JSON.parse(event.body)
	const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RE_CAPTCHA_SERVER}&response=${token}`
	https
		.get(url, resp => {
			let data = ''

			// A chunk of data has been received.
			resp.on('data', chunk => {
				data += chunk
			})

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				const results = JSON.parse(data)
				if (results.score > 0.4) {
					sendEmail(name, email, message)
				}
			})
		})
		.on('error', err => {
			throw Error(err)
		})
}
