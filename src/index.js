import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store'
import { setPlaces, setPlaceTypeFilter } from './redux/actions/places'
import places from './data/places'
import types from './data/types'
import { setUserGeolocation } from './redux/actions/user'

store.dispatch(setPlaces(places));
store.dispatch(setPlaceTypeFilter(types));

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position) => {
    const geolocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    store.dispatch(setUserGeolocation(geolocation));
  });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
