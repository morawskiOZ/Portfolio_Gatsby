import React, { ReactElement } from 'react'
import './ParallaxTitle.scss'

const ParallaxTitle = (): ReactElement => {
	return (
		<div className='parallaxTitle' id='parallaxTitle'>
			Hi! <br /> I&apos;m Piotr! <br /> Front-End Developer
			<span className='parallaxTitle-blinking'>.</span>
		</div>
	)
}

export default ParallaxTitle
