import React, { Component } from 'react';
import PlaceList from './components/PlaceList'

class App extends Component {
  state = {
    places: [
      {"name": "Landare", "address": "Trueba Kalea, 4"},
      {"name": "Garraxi", "address": "Tejeria kalea, 9"},
    ]
  }

  render() {
    return (
      <div>
        <h1>DBegano</h1>
        <PlaceList places={this.state.places} />
      </div>
    );
  }
}

export default App;
