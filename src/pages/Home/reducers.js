import { ENTER_CIRCLE, LEAVE_CIRCLE, SELECT_CIRCLE } from './actions'

const initialState = {
  bgColor: 'royalblue'
}

export default function home (state = initialState, action) {
  switch (action.type) {
    case ENTER_CIRCLE:
      // Set the background color to the color specified and keep track of the color it was before
      return {
        ...state,
        bgColor: action.payload.color,
        prevBgColor: state.bgColor
      }
    case LEAVE_CIRCLE:
      // Set the background color back to its previous value
      return {
        ...state,
        bgColor: state.prevBgColor
      }
    case SELECT_CIRCLE:
      // Set the background color to color selected and override any previously selected color
      return {
        ...state,
        bgColor: action.payload.color,
        prevBgColor: action.payload.color
      }
    default:
      return state
  }
}
