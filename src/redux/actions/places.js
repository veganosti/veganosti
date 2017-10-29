import { SET_PLACES } from './types'

export const setPlaces = (places) => (
  {
    type: SET_PLACES,
    places,
  }
);
