import React, {useEffect} from 'react'
import { Router } from '@reach/router'
import { useAuth0 } from './react-auth0-wrapper'

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
      <PrivateRoute component={Favorites} path="/favorites" />
    </Router>
  )
}


function PrivateRoute({component: Component, path, ...rest}) {

  const {isAuthenticated, loginWithRedirect} = useAuth0()
  
  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  return isAuthenticated ? <Component path={path} {...rest} /> : null;
}
