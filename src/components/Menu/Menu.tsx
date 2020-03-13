import useWindowScrollPosition from '@rehooks/window-scroll-position'
import React, { ReactElement, useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Menu.scss'

const Menu = (): ReactElement => {
	const [activeButton, setActiveButton] = useState<number>(null)
	const [open, setOpen] = useState<boolean>(false)
	const [isStartPosition, setIsStartPosition] = useState<boolean>(false)
	const buttonArray: any[] = [
		1,
		'Intro',
		1,
		// "Tech stack",
		// 1,
		'Projects',
		1,
		'Contact',
		1,
	]

	const options = {
		throttle: 100,
	}
	const position = useWindowScrollPosition(options)

	useEffect(() => {
		if (position.y === 0) {
			setIsStartPosition(true)
			setActiveButton(null)
		} else {
			setIsStartPosition(false)
		}
	}, [position])

	return (
		<div className='menu-container'>
			{(open || isStartPosition) && (
				<nav className='menu'>
					{buttonArray.map((element, index) => {
						if (element === 1) {
							return (
								<div className='menu-item--divider' key={`divider${index}`} />
							)
						}
						return (
							<button
								className={`menu-item ${activeButton === index &&
									'menu-item--active'}`}
								onClick={() => setActiveButton(index)}
								key={element}
							>
								<AnchorLink
									href={`#${element}`}
									offset='100'
									className='menu-link'
								>
									{element}
								</AnchorLink>
							</button>
						)
					})}
				</nav>
			)}
			<div
				className={`menu-burgerMenu ${open ? 'menu-burgerMenu--open' : ''}`}
				onClick={() => setOpen(!open)}
			>
				<div
					className={`menu-bar1 ${open ? 'menu-bar1--open' : ''}`}
					key='b1'
				/>
				<div
					className={`menu-bar2 ${open ? 'menu-bar2--open' : ''}`}
					key='b2'
				/>
				<div
					className={`menu-bar3 ${open ? 'menu-bar3--open' : ''}`}
					key='b3'
				/>
			</div>
		</div>
	)
}

export default Menu
