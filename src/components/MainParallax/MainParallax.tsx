import React, { ReactElement } from 'react'
import './MainParallax.scss'
import BackgroundImage from 'gatsby-background-image'

interface MainParallaxProps {
	children: ReactElement
	parallaxImage: any
}

const MainParallax = ({
	parallaxImage,
	children,
}: MainParallaxProps): ReactElement => {
	return (
		<div className='mainParallax-container'>
			<BackgroundImage
				Tag='section'
				className='mainParallax-image'
				fluid={parallaxImage}
				backgroundColor='#040e18'
			>
				{children}
			</BackgroundImage>
		</div>
	)
}

export default MainParallax
