import React from 'react'
import Map from './Map'
import PlaceFilter from './PlaceFilter'

const MapPage = () => (
  <div>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{height: `100%`}}/>}
      containerElement={<div style={{height: `93vh`}}/>}
      mapElement={<div style={{height: `100%`}}/>}
    />
    <PlaceFilter />
  </div>
)

export default MapPage
