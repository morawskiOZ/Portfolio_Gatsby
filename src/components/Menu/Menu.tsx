import React, { ReactElement, useEffect, useState, useRef } from 'react'
import './Menu.scss'
import { useScrollPosition } from 'src/hooks/useScrollPosition'
import { MenuButton } from './MenuButton/MenuButton'

const isBrowser = typeof window !== `undefined`

const Menu = (): ReactElement => {
	const [activeButton, setActiveButton] = useState<number>(null)
	const [open, setOpen] = useState<boolean>(false)
	const [isStartPosition, setIsStartPosition] = useState<boolean>(false)
	const [isFirstTransition, setIsFirstTransition] = useState(false)
	const [isSticky, setIsSticky] = useState(false)
	// folded as in hidded during scroll down
	const [isFolded, setIsFolded] = useState(false)

	const menu = useRef(null)

	useScrollPosition(
		({ prevPos, currPos }) => {
			setIsFirstTransition(false)
			if ((prevPos.y > 50 && currPos.y > 50) || currPos.y > 100) {
				setIsSticky(true)
				setIsFirstTransition(true)
			} else {
				setIsSticky(false)
			}
			// detect first transition to avoid css animation
			if (prevPos.y === 0) {
				setIsFirstTransition(true)
			}
			// when scrolling up
			if (currPos.y > prevPos.y) {
				setIsFolded(true)
			}
			// when scrolling dow
			if (currPos.y < prevPos.y) {
				setIsFolded(false)
			}
		},
		[isStartPosition],
		menu,
		true,
		300
	)
	const buttonArray: (string | number)[] = [
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

	const position = { x: 0, y: 0 }

	useEffect(() => {
		if (isBrowser) {
			menu.current = document.getElementById('mainMenu')
		}
		if (position.y === 0) {
			setIsStartPosition(true)
			setActiveButton(null)
		} else {
			setIsStartPosition(false)
		}
	}, [position])

	const burgerMenuEventHandler = (): void => {
		setOpen(!open)
		setIsFirstTransition(false)
	}

	return (
		<div className={`${isSticky ? 'sticky' : ''}`}>
			<div
				className={`menu-container ${
					isSticky && isFolded ? 'menu-container--folded' : ''
				} ${isFirstTransition ? 'menu-container--isFirstTransition' : ''}`}
			>
				{(open || isStartPosition) && (
					<nav
						className={`menu ${open ? 'menu--open' : ''} ${
							isFirstTransition ? 'menu--isFirstTransition' : ''
						}`}
					>
						{buttonArray.map((element, index) => {
							if (element === 1) {
								return (
									// eslint-disable-next-line react/no-array-index-key
									<div className='menu-item--divider' key={`divider${index}`} />
								)
							}
							if (typeof element === 'string') {
								return (
									<MenuButton
										activeButton={activeButton}
										activeButtonCb={(): void => setActiveButton(index)}
										index={index}
										title={element}
										key={element}
									/>
								)
							}
							return null
						})}
					</nav>
				)}
				<div
					className={`menu-burgerMenu ${open ? 'menu-burgerMenu--open' : ''}`}
					onClick={burgerMenuEventHandler}
					onKeyDown={burgerMenuEventHandler}
					role='button'
					tabIndex={0}
					id='mainMenu'
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
		</div>
	)
}

export default Menu
