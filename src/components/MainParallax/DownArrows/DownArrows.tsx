import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './DownArrows.scss'

const DownArrows = ({ href }) => {
	return (
		<AnchorLink href={href} offset='100'>
			<div className='downArrow arrows downArrow--flex'>
				<i className='downArrow--animated' />
				<i className='downArrow--animated downArrow--bottom' />
			</div>
		</AnchorLink>
	)
}

export default DownArrows
