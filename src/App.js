import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Menu, Icon } from 'semantic-ui-react'
import './App.css'
import PlaceListPage from './components/PlaceListPage'
import PlaceDetailPage from './components/PlaceDetailPage'
import MapPage from './components/MapPage'

const App = () => (
  <div>
    <Menu fixed="top">
      <Container>
        <Menu.Item as={Link} to="/">Veganosti</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='signup' as={Link} to="/places">
            <Icon name="list" />
          </Menu.Item>
          <Menu.Item name='signup' as={Link} to="/">
            <Icon name="map" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
    <Route path="/" exact component={MapPage}/>
    <Route path="/places" exact component={PlaceListPage}/>
    <Route path="/places/:id" exact component={PlaceDetailPage}/>
  </div>
)

export default App
