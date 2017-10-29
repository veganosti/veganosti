import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-google-maps'
import MarkerInfoWindow from './MakerInfoWindow'

class MapMarker extends Component {
  state = {
    active: false,
  }

  onMarkerClicked = () => this.setState({active: !this.state.active})

  render () {
    return (
      <Marker position={{lat: this.props.place.lat, lng: this.props.place.lng}}
              icon={`img/markers/${this.props.place.type.toLowerCase()}.png`}
              onClick={this.onMarkerClicked}>
        {this.state.active && <MarkerInfoWindow place={this.props.place}/>}
      </Marker>
    )
  }
}

MapMarker.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
}

export default MapMarker
