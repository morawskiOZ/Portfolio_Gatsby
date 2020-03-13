import React from 'react'
import '../TimeLine/TimeLine.scss'
import './IntroSection.scss'

const IntroSection = ({ children, id }) => {
	return (
		<>
			<div className='IntroSection-container' id={id}>
				<div className='TimeLine-firstLine' />

				<div className='TimeLine-firstDot'>
					<h2 className='IntroSection-title'>Intro </h2>
					<div className='TimeLine-firstDot--inner' />
				</div>
				<div className='TimeLine-secondLine' />
				<div className='TimeLine-secondDot'>
					<div className='TimeLine-secondDot--inner' />
				</div>
			</div>
			{children}
		</>
	)
}

export default IntroSection
