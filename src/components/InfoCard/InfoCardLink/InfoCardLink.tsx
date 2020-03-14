import React, { ReactElement } from 'react'

import './InfoCardLink.scss'

interface Props {
	icon: ReactElement
	address: string
	description: string
}

export const InfoCardLink = ({
	address,
	description,
	icon,
}: Props): ReactElement => {
	return (
		<div className='InfoCardLink'>
			<div className='InfoCardLink-Svg'>{icon}</div>
			<a
				className='InfoCardLink-link'
				href={address}
				target='_blank'
				rel='noopener noreferrer'
			>
				{description}
			</a>
		</div>
	)
}
