import React from 'react'
import { Link } from '@reach/router'
export default function Start(props) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <h1 className="title">Favorite Movies</h1>
        <Link to="/favorites">
          <button className="button">Getting Started</button>
        </Link>
      </div>
    </section>
  )
}
