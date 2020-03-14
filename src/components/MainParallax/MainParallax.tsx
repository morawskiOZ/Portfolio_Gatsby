import React, { ReactElement } from 'react'
import './MainParallax.scss'

interface MainParallaxProps {
	children: ReactElement
	parallaxImage: string
}

const MainParallax = ({
	parallaxImage,
	children,
}: MainParallaxProps): ReactElement => {
	const inlineStyles = {
		backgroundImage: `url(${parallaxImage})`,
	}
	return (
		<div className='mainParallax-container'>
			<div className='mainParallax-image' style={inlineStyles}>
				{children}
			</div>
		</div>
	)
}

export default MainParallax
