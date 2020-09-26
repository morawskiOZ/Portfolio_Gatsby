// @reach/router package—which Gatsby already depends upon
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router'
import React, { ReactElement } from 'react'
import './DownArrows.scss'

const DownArrows = ({ href }): ReactElement => {
	const scrollToElement = (): Promise<void> => navigate(href)

	return (
		<button
			className='downArrow arrows downArrow--flex'
			onClick={scrollToElement}
			type='button'
		>
			<i className='downArrow--animated' />
			<i className='downArrow--animated downArrow--bottom' />
		</button>
	)
}

export default DownArrows
