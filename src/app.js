import React from 'react'
import { Router } from '@reach/router'

// pages
import Start from './pages/start'
import About from './pages/about'
import Favorites from './pages/favorites'
import AddFavorite from './pages/add-favorite'
import ShowFavorite from './pages/show'
import EditFavorite from './pages/edit-favorite'

export default function App(props) {
  return (
    <Router>
      <Start path="/" />
      <About path="/about" />
      <EditFavorite path="/favorites/:id/edit" />
      <AddFavorite path="/favorites/new" />
      <ShowFavorite path="/favorites/:id" />
      <Favorites path="/favorites" />
    </Router>
  )
}
