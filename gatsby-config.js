/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')
require('dotenv').config()

module.exports = {
	plugins: [
		`gatsby-plugin-preact`,
		'gatsby-plugin-typescript',
		'gatsby-plugin-sass',
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: ['Montserrat:,400,700,900'],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-cloudinary`,
			options: {
				cloudName: process.env.CLOUDINARY_CLOUD_NAME,
				apiKey: process.env.CLOUDINARY_API_KEY,
				apiSecret: process.env.CLOUDINARY_API_SECRET,
				resourceType: `image`,
				type: 'upload',
				prefix: `portfolio`,
				maxResults: 12,
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				components: path.join(__dirname, 'src/components'),
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: path.join(__dirname, 'src/icons'),
				},
			},
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.[t|j]sx$|\.[t|j]s$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop'],
				options: {
					emitWarning: true,
					failOnError: true,
				},
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
}
