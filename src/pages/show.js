import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router' 
export default function ShowFavorite(props) {
  const [movie, setMovie] = useState({})
  useEffect(function () {
    fetch('http://localhost:3000/favorites/' + props.id) 
      .then(response => response.json())
      .then(movie => setMovie(movie))
  }, [])
  
  function handleDelete(e) {
    if (confirm('are you sure?') ) {
      fetch('http://localhost:3000/favorites/' + movie.id, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(res => {
          navigate('/favorites')
        })
    }
  }

  return (
    <section className="section">
      <h1 className="title">{movie.title}</h1>
      <div>
        <Link to={`/favorites/${movie.id}/edit`}>
          <button className="button">Edit</button>
        </Link>
        <button className="button" onClick={handleDelete}>Delete</button>
        <Link to='/favorites'>
          <button className="button">Return</button>
        </Link>
      </div>
    </section>
  )
}
