import React, { ReactElement } from 'react'
import './ProjectsSection.scss'
import { TimeLine } from '../TimeLine/TimeLine'

const ProjectsSection = ({ children, id }): ReactElement => {
	return (
		<>
			<div className='ProjectsSection-decorators' id={id}>
				<TimeLine title='Projects' />
			</div>
			{children}
		</>
	)
}

export default ProjectsSection
