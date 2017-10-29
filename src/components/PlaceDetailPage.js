import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Image, Header } from 'semantic-ui-react'

const PlaceDetailPage = ({places, match}) => {
  const place = places[match.params.id - 1]

  return (
    <Container text>
      <Header>{place.name}</Header>
      <Image fluid src="http://via.placeholder.com/350x150"/>
      <div>{place.description}</div>
      <div>{place.address}</div>
      <div>{place.phone}</div>
      <div>{place.type}</div>
    </Container>
  )
}

PlaceDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

function mapStateToProps (state) {
  return {
    places: state.places,
  }
}

export default connect(mapStateToProps)(PlaceDetailPage)
