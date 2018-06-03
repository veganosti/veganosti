import React from 'react'
import PropTypes from 'prop-types'
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
import * as actions from '../redux/actions/places';
import mapStyles from '../map-styles.json'

class Map extends React.Component {

  selectPlace(place) {
    this.props.selectPlace(place);
    this.map.panTo({
      lat: place.lat + 0.003,
      lng: place.lng
    })
  }

  render() {
    return  <GoogleMap
        ref={map => {this.map = map}}
        defaultZoom={15}
        defaultCenter={{lat: 43.322451, lng: -1.9740237}}
        defaultOptions={{
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          styles: mapStyles
        }}
    >
      {this.props.places.map(place => (
          <MapMarker key={place.id} place={place} selectPlace={(p) => this.selectPlace(p)}/>
      ))}
    </GoogleMap>
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  selectPlace: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    places: filteredPlacesSelector(state),
    center: state.center
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPlace: (place) => dispatch(actions.selectPlace(place))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(Map)))
