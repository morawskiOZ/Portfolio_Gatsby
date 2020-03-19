import React, { ReactElement } from 'react'
import '../TimeLine/TimeLine.scss'
import './IntroSection.scss'
import { TimeLine } from '../TimeLine/TimeLine'

const IntroSection = ({ children, id }): ReactElement => {
	return (
		<>
			<div className='IntroSection-container' id={id}>
				<TimeLine title='Intro' isFirstSection />
			</div>
			{children}
		</>
	)
}

export default IntroSection
