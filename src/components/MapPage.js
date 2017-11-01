import React from 'react'
import Map from './Map'
import PlaceFilter from './PlaceFilter'

const MapPage = () => (
  <div>
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`}
      containerElement={<div id="map" style={{height: `93vh`}}/>}
      loadingElement={<div style={{height: `100%`}}/>}
      mapElement={<div style={{height: `100%`}}/>}
    />
    <PlaceFilter />
  </div>
)

export default MapPage
