import { useRef, useLayoutEffect, RefObject } from 'react'

const isBrowser = typeof window !== `undefined`

interface Position {
	prevPos: ScrollPositionObject
	currPos: ScrollPositionObject
}
interface ScrollPositionObject {
	x: number
	y: number
}

const getScrollPosition = ({
	element,
	useWindow,
}: {
	element?: RefObject<HTMLElement>
	useWindow: boolean
}): ScrollPositionObject => {
	if (!isBrowser) return { x: 0, y: 0 }

	const target = element ? element.current : document.body
	if (!target) return { x: 0, y: 0 }
	const position = target.getBoundingClientRect()

	return useWindow
		? { x: window.scrollX, y: window.scrollY }
		: { x: position.left, y: position.top }
}

export const useScrollPosition = (
	effect: (arg0: Position) => void,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deps: any[],
	element: RefObject<HTMLElement>,
	useWindow: boolean,
	wait: number
): void => {
	const position = useRef(getScrollPosition({ useWindow }))

	let throttleTimeout = null

	const callBack = (): void => {
		const currPos = getScrollPosition({ element, useWindow })
		effect({ prevPos: position.current, currPos })
		position.current = currPos
		throttleTimeout = null
	}

	useLayoutEffect(() => {
		const handleScroll = (): void => {
			if (wait) {
				if (throttleTimeout === null) {
					throttleTimeout = setTimeout(callBack, wait)
				}
			} else {
				callBack()
			}
		}

		window.addEventListener('scroll', handleScroll)

		return (): void => window.removeEventListener('scroll', handleScroll)
	}, deps)
}
