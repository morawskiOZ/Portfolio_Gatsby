import React, { ReactElement } from 'react'

interface Props {
	title: string
	isFirstSection?: boolean
}

export const TimeLine = ({ title, isFirstSection }: Props): ReactElement => {
	return (
		<>
			{isFirstSection && <div className='TimeLine-firstLine' />}
			<div className='TimeLine-firstDot'>
				<h2 className='TimeLine-title'>{title} </h2>
				<div className='TimeLine-firstDot--inner' />
			</div>
			<div className='TimeLine-secondLine' />
			<div className='TimeLine-secondDot'>
				<div className='TimeLine-secondDot--inner' />
			</div>
			<div className='TimeLine-thirdLine' />
		</>
	)
}
