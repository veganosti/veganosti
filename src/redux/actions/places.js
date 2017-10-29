import { SELECT_PLACE, SET_PLACES } from './types'

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
