import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, List, Image } from 'semantic-ui-react'
import { placesSortedByProximity } from '../redux/selectors/places'
import { formatDistance } from '../utils/formatters'

const PlaceListPage = ({places}) => (
  <Container text>
    <List divided relaxed>
      {places.map(place => (
        <List.Item key={place.id}>
          <Image src="http://via.placeholder.com/75x75"/>
          <List.Content verticalAlign="middle">
            <List.Header as={Link}
                         to={`/places/${place.id}`}>{place.name}</List.Header>
            <List.Description>
              {place.address} <strong>{formatDistance(place.distance)}</strong>
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
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
