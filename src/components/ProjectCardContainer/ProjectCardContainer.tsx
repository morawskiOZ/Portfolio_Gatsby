import React, { ReactElement } from 'react'
import ProjectCard from 'src/components/ProjectCard/ProjectCard'
import './ProjectCardContainer.scss'
import { projects } from './data'

const ProjectCardContainer = (): ReactElement => {
	return (
		<div className='projectCard-container'>
			{projects.map(
				({ title, codeLink, description, id, liveLink, photoURL }) => {
					return (
						<ProjectCard
							title={title}
							codeLink={codeLink}
							description={description}
							key={id}
							liveLink={liveLink}
							photoURL={photoURL}
							id={id}
						/>
					)
				}
			)}
		</div>
	)
}

export default ProjectCardContainer
