import React, { Component } from 'react'
import places from '../data/places'
import Map from './Map'

class MapPage extends Component {
  state = {
    places
  }

  render () {
    return (
      <Map
        places={this.state.places}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `93vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MapPage
