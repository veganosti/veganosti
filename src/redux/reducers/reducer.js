import { SELECT_PLACE, SET_PLACES } from '../actions/types'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places.map(place => ({ ...place, selected: false }))
      }
    case SELECT_PLACE:
      return {
        ...state,
        places: state.places.map(
          place => (place.id === action.place.id)
            ? { ...place, selected: true } : { ...place, selected: false }
        )
      }
    default:
      return state
  }
}
