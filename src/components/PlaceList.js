import React from 'react'
import PropTypes from 'prop-types'

const PlaceList = ({places}) => (
  <ul>
    {places.map(place => <li>{place.name} <span>{place.address}</span></li>)}
  </ul>
)

PlaceList.propTypes = {
  places: PropTypes.arrayOf({
    place: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PlaceList
