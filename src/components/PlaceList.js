import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react';

const PlaceList = ({places}) => (
  <Item.Group divided>
    {places.map(place => (
      <Item key={place.id}>
        <Item.Image size="tiny" src="https://semantic-ui.com/images/wireframe/image.png" />
        <Item.Content verticalAlign="middle">
          <Item.Header>{place.name}</Item.Header>
          <Item.Description>{place.address}</Item.Description>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)

PlaceList.propTypes = {
  places: PropTypes.arrayOf({
    place: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PlaceList
