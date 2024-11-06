import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloak from './keycloak';

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    console.log('Authenticated');
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } else {
    console.warn('Not authenticated!');
    keycloak.login();
  }
});
 