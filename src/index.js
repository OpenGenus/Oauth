import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-348pqdxu1yb65fdx.us.auth0.com'
    clientId='6B1rzORPd7BTpYLkz2gG3G8kxFUGVxS1'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

