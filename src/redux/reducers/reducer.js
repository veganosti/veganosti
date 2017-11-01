import {
  SELECT_PLACE, SET_PLACE_TYPE_FILTER,
  SET_PLACES, SET_USER_GEOLOCATION,
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
        selectedPlaceId: action.place ? action.place.id : null
      }
    case SET_PLACE_TYPE_FILTER:
      return {
        ...state,
        placeTypeFilter: action.placeTypeFilter,
      }
    case SET_USER_GEOLOCATION:
      return {
        ...state,
        geolocation: action.geolocation,
      }
    default:
      return state
  }
}
