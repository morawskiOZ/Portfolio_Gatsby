import React, { ReactElement } from 'react'
import './SectionTitle.scss'

const SectionsTitle = ({ title }: { title: string }): ReactElement => {
	return (
		<h2 className='sectionTitle'>
			<span className='sectionTitle-title'>{title}</span>
		</h2>
	)
}

export default SectionsTitle
