import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import PlaceListPage from './components/PlaceListPage'
import PlaceDetailPage from './components/PlaceDetailPage'

const App = () => (
  <div>
    <Menu>
      <Container>
        <Menu.Item as={Link} to="/">Veganosti</Menu.Item>
      </Container>
    </Menu>
    <Route path="/" exact component={PlaceListPage}/>
    <Route path="/:id" exact component={PlaceDetailPage}/>
  </div>
)

export default App
