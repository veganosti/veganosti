import { SELECT_PLACE, SET_PLACE_TYPE_FILTER, SET_PLACES } from './types'

export const setPlaces = (places) => (
  {
    type: SET_PLACES,
    places,
  }
)

export const selectPlace = (place) => (
  {
    type: SELECT_PLACE,
    place,
  }
)

export const deselectPlace = () => (
  {
    type: SELECT_PLACE,
    place: null,
  }
)

export const setPlaceTypeFilter = (placeTypeFilter) => (
  {
    type: SET_PLACE_TYPE_FILTER,
    placeTypeFilter,
  }
)
