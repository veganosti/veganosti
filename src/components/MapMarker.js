import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Marker } from 'react-google-maps'
import MarkerInfoWindow from './MakerInfoWindow'
import * as actions from '../redux/actions/places'

const MapMarker = ({place, selectPlace}) =>(
      <Marker position={{lat: place.lat, lng: place.lng}}
              icon={`img/markers/${place.type.toLowerCase()}.png`}
              onClick={() => selectPlace(place)}>
        {place.selected && <MarkerInfoWindow place={place}/>}
      </Marker>
    )

MapMarker.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    selected: PropTypes.bool,
  }).isRequired,
  selectPlace: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    selectPlace: (place) => dispatch(actions.selectPlace(place))
  }
}

export default connect(null, mapDispatchToProps)(MapMarker)
