import React, { ReactElement } from 'react'
import './CarouselsItem.scss'

interface CarouselsItem {
	id: string
	level: number
	component: ReactElement
}

const CarouselsItem = ({
	id,
	level,
	component,
}: CarouselsItem): ReactElement => {
	const className = `item level${level}`
	return (
		<div className={className} id={id} key={id}>
			{component}
		</div>
	)
}

export default CarouselsItem
