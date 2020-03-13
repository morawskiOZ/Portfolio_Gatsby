import React from 'react'
import './InfoCardSection.scss'

const InfoCardSection = ({ children, id }) => {
	return (
		<>
			<div className='InfoCardSection-container' id={id}>
				<div className='TimeLine-firstDot'>
					<h2 className='InfoCardSection-title'>Contact </h2>
					<div className='TimeLine-firstDot--inner' />
				</div>
				<div className='TimeLine-secondLine' />
				<div className='TimeLine-secondDot'>
					<div className='TimeLine-secondDot--inner' />
				</div>
				<div className='TimeLine-thirdLine' />
			</div>
			{children}
		</>
	)
}

export default InfoCardSection
