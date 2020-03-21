import React, { ReactElement } from 'react'
import './Footer.scss'

const Footer = (): ReactElement => {
	const year = new Date().getFullYear()
	return (
		<footer className='Footer'>
			&#169; All rights reserved Piotr Morawski {year}
		</footer>
	)
}

export default Footer
