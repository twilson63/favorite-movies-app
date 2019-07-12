import React from 'react'
import { useAuth0 } from '../react-auth0-wrapper'

const Navbar = () => {
  const { user, isAuthenticated, getTokenSilently, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button className="button"
          onClick={() => loginWithRedirect({})}
        >
          Log In
        </button>
      )}
      {isAuthenticated && (
        <button className="button"
          onClick={() => logout()}
        >Logout</button>
      )}
      {JSON.stringify(user)}
      <button className="button" onClick={async () => {
        console.log(await getTokenSilently())
      }}>Get Token</button>
    </div>
      )
}

export default Navbar
