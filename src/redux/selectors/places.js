import { createSelector } from 'reselect'
import { getDistanceFromLatLonInKm } from '../../utils/geodistance'

export const placesSelector = state => state.places;
export const placeTypeFilterSelector = state => state.placeTypeFilter
export const userGeolocationSelector = state => state.geolocation

export const placesWithDistanceSelector = createSelector(
  placesSelector,
  userGeolocationSelector,
  (places, geolocation) => geolocation ? places.map(place => (
    {...place, distance: getDistanceFromLatLonInKm(place.lat, place.lng, geolocation.lat, geolocation.lng)}
  )) : places
)

export const placesSortedByProximity = createSelector(
  placesWithDistanceSelector,
  (places) => places.sort((previous, next) => previous.distance - next.distance)
)

export const filteredPlacesSelector = createSelector(
  placesWithDistanceSelector,
  placeTypeFilterSelector,
  (places, placeTypeFilter) => places.filter(place => placeTypeFilter.indexOf(place.type) !== -1)
)
