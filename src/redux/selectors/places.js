import { createSelector } from 'reselect'

export const placesSelector = state => state.places;
export const placeTypeFilterSelector = state => state.placeTypeFilter

export const filteredPlacesSelector = createSelector(
  placesSelector,
  placeTypeFilterSelector,
  (places, placeTypeFilter) => places.filter(place => placeTypeFilter.indexOf(place.type) !== -1)
)
