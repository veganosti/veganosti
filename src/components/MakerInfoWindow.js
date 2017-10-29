import React from 'react';
import PropTypes from 'prop-types'
import { InfoWindow } from 'react-google-maps'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'

const MarkerInfoWindow = ({place}) => (
  <InfoWindow>
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src="http://via.placeholder.com/50x50"/>
        <Item.Content verticalAlign="middle">
          <Item.Header as={Link}
                       to={`detail/${place.id}`}>{place.name}</Item.Header>
          <Item.Description>{place.address}</Item.Description>
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
}

export default MarkerInfoWindow;
