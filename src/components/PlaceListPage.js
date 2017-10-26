import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Item } from 'semantic-ui-react'
import places from '../data/places'

class PlaceListPage extends Component {
  state = {
    places
  }

  render () {
    return (
      <Container>
        <Item.Group divided>
          {this.state.places.map(place => (
            <Item key={place.id}>
              <Item.Image size="tiny"
                          src="https://semantic-ui.com/images/wireframe/image.png"/>
              <Item.Content verticalAlign="middle">
                <Item.Header as={Link}
                             to={`${place.id}`}>{place.name}</Item.Header>
                <Item.Description>{place.address}</Item.Description>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Container>
    )
  }
}

export default PlaceListPage
