import React, { useEffect, useState } from 'react'
import { map } from 'ramda'
import { Link } from '@reach/router'

export default function Favorites(props) {
  const [movies, setMovies] = useState([])
  useEffect(function() {
    fetch('http://localhost:3000/favorites')
      .then(response => response.json())
      .then(movies => setMovies(movies))
  }, []) // run when component is mounted
  return (
    <section className="section">
      <h1 className="title">Favorites</h1>
      <Link to="/favorites/new">
        <button className="button">Add Favorite Movie</button>
      </Link>
      <div className="box">
        <ul>
          {map(li, movies)}
        </ul>
      </div>
    </section>
  )
}

function li(movie) {
  return (
    <li key={movie.id}>
      <Link to={`/favorites/${movie.id}`}>
        {movie.title}
      </Link>
    </li>
      
  )
}
