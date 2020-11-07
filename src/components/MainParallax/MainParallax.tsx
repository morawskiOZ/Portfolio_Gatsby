import React, { ReactElement } from 'react'
import './MainParallax.scss'
import Img from 'gatsby-image'

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
			<Img
				fluid={parallaxImage.fluid}
				style={{ height: '100%' }}
				backgroundColor='transparent'
				fadeIn={false}
				loading='eager'
			/>
			{children}
		</div>
	)
}

export default MainParallax
