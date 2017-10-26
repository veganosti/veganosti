import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Header } from 'semantic-ui-react';
import places from '../data/places';

class PlaceDetailPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      place: places[props.match.params.id - 1]
    }
  }

  render() {
    return (
      <Container text>
        <Header>{this.state.place.name}</Header>
        <Image fluid src="http://via.placeholder.com/350x150"/>
        <div>{this.state.place.description}</div>
        <div>{this.state.place.address}</div>
        <div>{this.state.place.phone}</div>
        <div>{this.state.place.type}</div>
      </Container>
    )
  }
}

PlaceDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
};

export default PlaceDetailPage;
