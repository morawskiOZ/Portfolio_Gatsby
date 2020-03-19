import React, { ReactElement } from 'react'
import './InfoCardSection.scss'
import { TimeLine } from '../TimeLine/TimeLine'

const InfoCardSection = ({ children, id }): ReactElement => {
	return (
		<>
			<div className='InfoCardSection-container' id={id}>
				<TimeLine title='Contact' />
			</div>
			{children}
		</>
	)
}

export default InfoCardSection
