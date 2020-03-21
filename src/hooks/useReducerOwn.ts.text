import * as React from 'react'

enum PositionAction {
	UPDATE_X = 'UPDATE_X',
	UPDATE_Y = 'UPDATE_Y',
}
interface ActionType {
	type: PositionAction
	payload: string
}
interface Position {
	Xpos: string
	Ypos: string
}
export const useScroll = (): [Position, React.Dispatch<ActionType>] => {
	const scrollReducer = (state: Position, action: ActionType): Position => {
		switch (action.type) {
			case PositionAction.UPDATE_X:
				return {
					Xpos: action.payload,
					...state,
				}
			case PositionAction.UPDATE_Y:
				return {
					Ypos: action.payload,
					...state,
				}
			default:
				return state
		}
	}

	const [scrollPosition, dispatch] = React.useReducer(
		(state: Position, action: ActionType) => scrollReducer(state, action),
		{
			Xpos: null,
			Ypos: null,
		}
	)

	return [scrollPosition, dispatch]
}
