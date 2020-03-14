import React, { ReactElement, useState } from 'react'
import GitHubSvg from 'src/icons/github.svg'
import ReactSvg from 'src/icons/www.svg'
import './ProjectCard.scss'

export interface ProjectCardProps {
	title: string
	photoURL: string
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
	photoURL,
}: ProjectCardProps): ReactElement => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const inlineStyle = { backgroundImage: `url(${photoURL})` }
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
			<div className='projectCard-picture' style={inlineStyle} />
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
							<p>Live link</p>
						</a>
					)}
					<a
						className='projectCard-link'
						href={codeLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<GitHubSvg className='projectCard-svg' />
						<p>See the code</p>
					</a>
				</div>
			</div>
		</button>
	)
}

export default ProjectCard
