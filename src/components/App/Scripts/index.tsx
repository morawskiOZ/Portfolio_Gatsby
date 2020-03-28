import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import { RE_CAPTCHA_CLIENT } from 'src/config'

export const SCRIPTS = (): ReactElement => {
	return (
		<Helmet>
			<script
				src={`https://www.google.com/recaptcha/api.js?render=${RE_CAPTCHA_CLIENT}`}
				async
				defer
			/>
		</Helmet>
	)
}
