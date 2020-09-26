import React, { ReactElement } from 'react'
// @reach/router package—which Gatsby already depends upon
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router'

interface Props {
	activeButton: number
	activeButtonCb: (arg0: number) => void
	index: number
	title: string
}

export const MenuButton = ({
	activeButton,
	activeButtonCb,
	index,
	title,
}: Props): ReactElement => {
	return (
		<button
			className={`menu-item ${activeButton === index && 'menu-item--active'}`}
			onClick={(): void => activeButtonCb(index)}
			key={title}
			type='button'
		>
			<a
				href={`#${title}`}
				className='menu-link'
				onClick={(): Promise<void> => navigate(`#${title}`)}
			>
				{title}
			</a>
		</button>
	)
}
