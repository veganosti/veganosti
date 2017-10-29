import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Item } from 'semantic-ui-react'

const PlaceListPage = ({places}) => (
  <Container>
    <Item.Group divided>
      {places.map(place => (
        <Item key={place.id}>
          <Item.Image size="tiny"
                      src="https://semantic-ui.com/images/wireframe/image.png"/>
          <Item.Content verticalAlign="middle">
            <Item.Header as={Link}
                         to={`detail/${place.id}`}>{place.name}</Item.Header>
            <Item.Description>{place.address}</Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </Container>
)

PlaceListPage.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

function mapStateToProps (state) {
  return {
    places: state.places,
  }
}

export default connect(mapStateToProps)(PlaceListPage)
