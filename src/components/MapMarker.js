import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Marker } from 'react-google-maps'
import MarkerInfoWindow from './MakerInfoWindow'

const MapMarker = ({place, selectedPlaceId, selectPlace}) =>(
      <Marker position={{lat: place.lat, lng: place.lng}}
              icon={`img/markers/${place.type.toLowerCase()}.png`}
              onClick={() => selectPlace(place)}>
        {place.id === selectedPlaceId && <MarkerInfoWindow place={place}/>}
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
  selectedPlaceId: PropTypes.number,
  selectPlace: PropTypes.func.isRequired
}

MapMarker.defaultProps = {
  selectedPlaceId: null
}

function mapStateToProps(state) {
  return {
    selectedPlaceId: state.selectedPlaceId
  }
}

export default connect(mapStateToProps)(MapMarker)
