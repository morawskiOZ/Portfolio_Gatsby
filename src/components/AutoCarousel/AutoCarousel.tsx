import React, { ReactElement, useEffect, useState } from 'react'
// import _ from "lodash"
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './AutoCarousel.scss'
import CarouselsItem from './CarouselsItem/CarouselsItem'
import './foundation-icon/foundation-icons.scss'

// TODO add stop and go func on click, show diffrent coursor
// add pagination, kropki ktore pokazuja aktywny projekt i maja tez setery ustawiajace a
interface AutoCarouselProps {
	items: ReactElement[]
	autoRotate: boolean
}

const AutoCarousel = ({
	items,
	autoRotate,
}: AutoCarouselProps): ReactElement => {
	const [activeElementIndex, setActiveElementIndex] = useState<number>(5)
	const [direction, setDirection] = useState<string>('left')

	const generateItems = (itemsArray): ReactElement[] => {
		const carouselItems = []
		let level
		for (let i = activeElementIndex - 2; i < activeElementIndex + 3; i++) {
			let index = i
			if (i < 0) {
				index = itemsArray.length + i
			} else if (i >= itemsArray.length) {
				index = i % itemsArray.length
			}
			level = activeElementIndex - i
			carouselItems.push(
				<CSSTransition in timeout={200} classNames={direction} key={index}>
					<CarouselsItem
						id={String(index)}
						level={level}
						component={itemsArray[index]}
					/>
				</CSSTransition>
			)
		}

		return carouselItems.slice(-5)
	}

	// const onClickHandler = ({ target }: any) => {
	//   const name: any = target.getAttribute("data-tag");
	//   [`move${name}`]()
	// }

	const moveLeft = (itemsArray: ReactElement[]): void => {
		setActiveElementIndex(prevActiveElementIndex =>
			prevActiveElementIndex - 1 < 0
				? itemsArray.length - 1
				: prevActiveElementIndex - 1
		)
	}

	// Debounce to add when there will be direction control in carousel

	// const denouncedMoveLeft = _.debounce((itemsArray: any) => {
	//   setActiveElementIndex(
	//     prevActiveElementIndex => (prevActiveElementIndex + 1) % itemsArray.length
	//   )
	//   setDirection("right")
	// }, 1000)

	const moveRight = (itemsArray: ReactElement[]): void => {
		setActiveElementIndex(
			prevActiveElementIndex => (prevActiveElementIndex + 1) % itemsArray.length
		)
	}

	const autoTurn = (): void => {
		if (direction === 'left') {
			moveLeft(items)
		} else if (direction === 'right') {
			moveRight(items)
		}
	}
	// TODO add when user scrolls to this part, it stars moving
	useEffect(() => {
		const autoRotateInterval = setInterval(autoTurn, 1500)
		return (): void => {
			clearInterval(autoRotateInterval)
		}
	})

	return (
		<div>
			<div id='carousel' className='autoCarousel noselect'>
				{!autoRotate && (
					<div
						className='arrow arrow-left'
						onClick={(): void => setDirection('left')}
						onKeyDown={(): void => setDirection('left')}
						role='button'
						tabIndex={0}
					>
						<i className='fi-arrow-left' />
					</div>
				)}
				<TransitionGroup component='div' className='carouselItem-container'>
					{generateItems(items)}
				</TransitionGroup>
				{!autoRotate && (
					<div
						className='arrow arrow-right'
						onClick={(): void => setDirection('right')}
						onKeyDown={(): void => setDirection('right')}
						role='button'
						tabIndex={0}
					>
						<i className='fi-arrow-right' />
					</div>
				)}
			</div>
		</div>
	)
}

export default AutoCarousel
