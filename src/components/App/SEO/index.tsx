import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'

export const SEO = (): ReactElement => {
	return (
		<Helmet>
			<title> Piotr Morawski | Frontend developer portfolio</title>
			<meta
				name='description'
				content='Piotr Morawski portfolio. I am a frontend developer. Take a look at my projects in React, Javascript, Node, Typescript, Gatsby and other modern technologies. Ex SimScale developer currently work for Limango'
			/>
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta
				name='keywords'
				content='react javascript typescript frontend backend node nodejs css scss jss golang go Limango SimScale'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta
				name='robots'
				content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
			/>
			<link rel='canonical' href='https://morawski.online' />
			<meta property='og:locale' content='en_US' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content='Piotr Morawski | Frontend developer' />
			<meta
				property='og:description'
				content='Favorite stack for now? React, TS, Node, Netlify, CircleCI, Jest. Also React Native maniac and trying to absorb Golang'
			/>
			<meta property='og:url' content='https://morawski.online' />
			<meta property='og:site_name' content='Portfolio' />
			<meta
				property='og:image'
				content='https://pmorawski.s3.eu-west-2.amazonaws.com/avatar_Limango.jpg'
			/>
			<meta
				property='og:image:secure_url'
				content='https://pmorawski.s3.eu-west-2.amazonaws.com/avatar_Limango.jpg'
			/>
			<meta property='og:image:width' content='1280' />
			<meta property='og:image:height' content='630' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta
				name='twitter:description'
				content='React JavaScript TypeScript developer'
			/>
			<meta name='twitter:title' content='Piotr Morawski FE Dev' />
			<meta
				name='twitter:image'
				content='https://pmorawski.s3.eu-west-2.amazonaws.com/avatar_Limango.jpg'
			/>
		</Helmet>
	)
}
