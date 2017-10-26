import React, { Component } from 'react';
import PlaceList from './components/PlaceList';
import places from './data/places';

class App extends Component {
  state = {
    places
  }

  render() {
    return (
      <div>
        <h1>DBegano | Veganosti | Beganosti</h1>
        <PlaceList places={this.state.places} />
      </div>
    );
  }
}

export default App;
