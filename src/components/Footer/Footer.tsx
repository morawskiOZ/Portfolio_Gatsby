import React from 'react'
import './Footer.scss'

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className='Footer'>
			&#169; All rights reserved Piotr Morawski {year}
		</footer>
	)
}

export default Footer
