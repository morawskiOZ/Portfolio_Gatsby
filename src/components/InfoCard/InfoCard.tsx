import ContactForm from 'src/components/ContactForm/ContactForm'
import React, { ReactElement } from 'react'
import './InfoCard.scss'
import { InfoCardLink } from './InfoCardLink/InfoCardLink'
import { InfoLinkProps } from '../App/types'

interface InfoCardProps {
	fullName: string
	title: string
	photoUrl?: string
	links?: InfoLinkProps[]
}

export const InfoCard = ({
	fullName,
	links,
	photoUrl,
	title,
}: InfoCardProps): ReactElement => {
	const inlineStyles = {
		backgroundImage: `url(${photoUrl})`,
	}
	return (
		<div className='infoCard'>
			<div className='infoCard-infoContainer'>
				<div className='infoCard-photo' style={inlineStyles} />
				<div className='infoCard-info'>
					<h1 className='infoCard-name'>{fullName}</h1>
					<h2 className='infoCard-title'>{title}</h2>
					<div className='infoCard-links'>
						{links.map(link => (
							<InfoCardLink
								address={link.address}
								description={link.description}
								icon={link.icon}
								key={link.description}
							/>
						))}
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}
