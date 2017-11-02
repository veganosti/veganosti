import React from 'react'
import { connect } from 'react-redux'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps'
import MapMarker from './MapMarker'
import {
  filteredPlacesSelector,
} from '../redux/selectors/places'

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: 43.322451, lng: -1.9740237}}
    defaultOptions={{disableDefaultUI: true, gestureHandling: 'greedy'}}
  >
    {props.places.map(place => (
      <MapMarker key={place.id} place={place}/>
    ))}
  </GoogleMap>,
))

function mapStateToProps (state) {
  return {
    places: filteredPlacesSelector(state),
  }
}

export default connect(mapStateToProps)(Map)
