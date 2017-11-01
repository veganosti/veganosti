import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { InfoWindow } from 'react-google-maps'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'
import * as actions from '../redux/actions/places'

const MarkerInfoWindow = ({place, deselectPlace}) => (
  <InfoWindow onCloseClick={() => deselectPlace()}>
    <Item.Group unstackable>
      <Item>
        <Item.Image style={{maxWidth: '50px'}} size="tiny" src="http://via.placeholder.com/50x50"/>
        <Item.Content verticalAlign="middle">
          <Item.Header as={Link}
                       to={`/places/${place.id}`}>{place.name}</Item.Header>
          <Item.Meta>
            {place.address}
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  </InfoWindow>
);

MarkerInfoWindow.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  deselectPlace: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    'deselectPlace': () => dispatch(actions.deselectPlace())
  }
}

export default connect(null, mapDispatchToProps)(MarkerInfoWindow);
