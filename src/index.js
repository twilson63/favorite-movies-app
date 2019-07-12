import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import App from './app'
import { Auth0Provider } from './react-auth0-wrapper'
import config from './auth0_config.json'

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    audience={config.audience}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('app')
)
