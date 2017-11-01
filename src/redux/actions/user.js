import { SET_USER_GEOLOCATION } from './types'

export const setUserGeolocation = (geolocation) => (
  {
    type: SET_USER_GEOLOCATION,
    geolocation
  }
);
