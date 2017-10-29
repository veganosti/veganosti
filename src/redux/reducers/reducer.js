import {
  SELECT_PLACE, SET_PLACE_TYPE_FILTER,
  SET_PLACES,
} from '../actions/types'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places,
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlaceId: action.place.id
      }
    case SET_PLACE_TYPE_FILTER:
      return {
        ...state,
        placeTypeFilter: action.placeTypeFilter,
      }
    default:
      return state
  }
}
