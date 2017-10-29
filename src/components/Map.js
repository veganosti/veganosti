import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps'
import MapMarker from './MapMarker'

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: props.places[0].lat, lng: props.places[0].lng}}
    defaultOptions={{disableDefaultUI: true}}
  >
    {props.places.map(place => (
      <MapMarker key={place.id} place={place}/>
    ))}
  </GoogleMap>,
))

export default Map