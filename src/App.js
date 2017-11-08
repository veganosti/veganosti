import React from 'react'
import { Route } from 'react-router'
import './App.css'
import PlaceListPage from './components/PlaceListPage'
import PlaceDetailPage from './components/PlaceDetailPage'
import MapPage from './components/MapPage'
import TopBar from './components/TopBar'
import AboutPage from './components/AboutPage'

const App = () => (
  <div>
    <TopBar />
    <Route path="/" exact component={MapPage}/>
    <Route path="/about" exact component={AboutPage}/>
    <Route path="/places" exact component={PlaceListPage}/>
    <Route path="/places/:id" exact component={PlaceDetailPage}/>
  </div>
)

export default App
