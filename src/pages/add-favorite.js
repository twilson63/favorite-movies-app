import React, { useReducer } from 'react'
import { Link, navigate } from '@reach/router'
import { merge } from 'ramda'

const initialState = { id: null, title: '' }

function reducer(state, {type, payload}) {
  if (type === 'SET_TITLE') {
    return merge(state, { title: payload})
  }
  return state
}

export default function AddFavorite(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(res => {
        // redirect to list
        navigate('/favorites')
      })
      .catch(err => {
        // show error
      })
      
  }

  return (
    <section className="section">
      <h1 className="title">Add New Favorite</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" className="input" 
              value={state.title} 
              onChange={e => 
                  dispatch({
                    type: 'SET_TITLE', 
                    payload: e.target.value
                  })
              } 
            />
          </div>
        </div>
        <div className="field is-grouped">
          <button className="button">Create</button>
          <Link to="/favorites">
            <a className="button" href="/favorites">Cancel</a>
          </Link>
        </div>
      </form>
    </section>
  )
}
