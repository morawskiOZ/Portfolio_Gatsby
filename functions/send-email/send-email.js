/* eslint-disable import/no-extraneous-dependencies */
const SparkPost = require('sparkpost')

const client = new SparkPost(process.env.SPARKPOST)

exports.handler = function(event, context, callback) {
	console.log(event)

	client.transmissions.send({
		content: {
			from: 'chris@css-tricks.com',
			subject: 'Hello, World!',
			html: '<html><body><p>My cool email.</p></body></html>',
		},
		recipients: [{ address: 'chriscoyier@gmail.com' }],
	})
}
