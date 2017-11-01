import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import './App.css'
import PlaceListPage from './components/PlaceListPage'
import PlaceDetailPage from './components/PlaceDetailPage'
import MapPage from './components/MapPage'

const App = () => (
  <div>
    <Menu>
      <Container>
        <Menu.Item as={Link} to="/">Veganosti</Menu.Item>
        <Menu.Item as={Link} to="/places">Lista</Menu.Item>
      </Container>
    </Menu>
    <Route path="/" exact component={MapPage}/>
    <Route path="/places" exact component={PlaceListPage}/>
    <Route path="/places/:id" exact component={PlaceDetailPage}/>
  </div>
)

export default App
