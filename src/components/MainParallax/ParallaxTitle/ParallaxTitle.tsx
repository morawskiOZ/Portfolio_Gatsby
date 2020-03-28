import React, { useEffect, useRef, ReactElement } from 'react'
import Typed from 'typed.js'
import './ParallaxTitle.scss'

const ParallaxTitle = (): ReactElement => {
	const typed = useRef(null)

	useEffect(() => {
		const options = {
			strings: [
				"Hi! <br/> I'm Piotr! <br /> Front-End Developer<span class='parallaxTitle-blinking'>.</span>",
			],
			typeSpeed: 40,
			showCursor: false,
		}
		const targetElement = document.querySelector('#parallaxTitle')
		if (targetElement) {
			typed.current = new Typed('#parallaxTitle', options)
		}
	}, [])

	return (
		<div className='parallaxTitle' id='parallaxTitle'>
			{typed.current}
		</div>
	)
}

export default ParallaxTitle
