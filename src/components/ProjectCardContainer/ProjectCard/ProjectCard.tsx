import React, { ReactElement, useState } from 'react'
import GitHubSvg from '../../../icons/github.svg'
import ReactSvg from '../../../icons/www.svg'
import './ProjectCard.scss'

export interface ProjectCardProps {
	title: string
	imageName: string
	description: string
	liveLink?: string
	codeLink: string
	id: string
}

const ProjectCard = ({
	title,
	codeLink,
	description,
	liveLink,
	imageName,
}: ProjectCardProps): ReactElement => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const inlineStyle = { backgroundImage: `url(${imageName})` }
	return (
		<button
			id={title}
			key={title}
			className='projectCard'
			onClick={(): void => {
				if (isHovered) {
					setIsHovered(false)
				}
				setIsClicked(prevState => !prevState)
			}}
			onKeyDown={(): void => setIsHovered(true)}
			onMouseEnter={(): void => setIsHovered(true)}
			onMouseLeave={(): void => {
				setIsClicked(false)
				setIsHovered(false)
			}}
			type='button'
		>
			<div className='projectCard-picture' style={inlineStyle}>
				<div
					className={`projectCard-overlay ${
						isHovered || isClicked ? 'projectCard-overlay--shown' : ''
					}`}
				>
					<h3 className='projectCard-title'>{title}</h3>
					<p className='projectCard-description'>{description}</p>
					<div className='projectCard-links'>
						{liveLink && (
							<a
								className='projectCard-link'
								href={liveLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<ReactSvg className='projectCard-svg' />
								<p className='projectCard-linkDescription'>Live link</p>
							</a>
						)}
						<a
							className='projectCard-link'
							href={codeLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							<GitHubSvg className='projectCard-svg' />
							<p className='projectCard-linkDescription'>See the code</p>
						</a>
					</div>
				</div>
			</div>
		</button>
	)
}

export default ProjectCard
