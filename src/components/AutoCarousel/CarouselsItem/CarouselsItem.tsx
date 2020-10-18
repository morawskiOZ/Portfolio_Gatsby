import React, { ReactElement } from 'react'
import './CarouselsItem.scss'

interface CarouselsItemProps {
	id: string
	level: number
	component: ReactElement
}

const CarouselsItem = ({
	id,
	level,
	component,
}: CarouselsItemProps): ReactElement => {
	const className = `item level${level}`
	return (
		<div className={className} id={id} key={id}>
			{component}
		</div>
	)
}

export default CarouselsItem
