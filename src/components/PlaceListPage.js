import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Item, Label } from 'semantic-ui-react'
import { placesSortedByProximity } from '../redux/selectors/places'
import { formatDistance } from '../utils/formatters'

const PlaceListPage = ({places}) => (
  <Container text>
    <Item.Group divided unstackable>
      {places.map(place => (
        <Item key={place.id}>
          <Item.Image style={{maxWidth: '75px'}} size="tiny" src="http://via.placeholder.com/75x75"/>

          <Item.Content verticalAlign="middle">
            <Item.Header as={Link}
                         to={`/places/${place.id}`}>{place.name}</Item.Header>
            <Item.Meta>
              {place.address}
            </Item.Meta>
            <Item.Extra>
              <div>{formatDistance(place.distance)}</div>
              <Label size="tiny">{place.type}</Label>
            </Item.Extra>
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
      distance: PropTypes.number
    }).isRequired
  ).isRequired,
}

function mapStateToProps (state) {
  return {
    places: placesSortedByProximity(state),
  }
}

export default connect(mapStateToProps)(PlaceListPage)
