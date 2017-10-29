import { SET_PLACES } from '../actions/types'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_PLACES:
      return { places: action.places }
    default:
      return state;
  }
}
