import React, { ReactElement } from 'react'
import './ProjectCardContainer.scss'
import { projects } from './data'
import { ProjectCard } from './ProjectCard/ProjectCard'

interface Props {
	images: any
}

const ProjectCardContainer = ({ images }: Props): ReactElement => {
	return (
		<div className='projectCard-container'>
			{projects.map(
				({ title, codeLink, description, id, liveLink, imageName }) => {
					return (
						<ProjectCard
							title={title}
							codeLink={codeLink}
							description={description}
							key={id}
							liveLink={liveLink}
							image={images[imageName] || null}
							id={id}
						/>
					)
				}
			)}
		</div>
	)
}

export default ProjectCardContainer
