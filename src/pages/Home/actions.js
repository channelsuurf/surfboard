export const ENTER_CIRCLE = 'ENTER_CIRCLE'
export const LEAVE_CIRCLE = 'LEAVE_CIRCLE'
export const SELECT_CIRCLE = 'SELECT_CIRCLE'

export function enterCircle (color) {
  return {
    type: ENTER_CIRCLE,
    payload: {
      color
    }
  }
}

export function leaveCircle () {
  return {
    type: LEAVE_CIRCLE,
    payload: {}
  }
}

export function selectColor (color) {
  return {
    type: SELECT_CIRCLE,
    payload: {
      color
    }
  }
}
