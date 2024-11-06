import React from 'react';
import keycloak from './keycloak';

function App() {
  const handleLogout = () => {
    keycloak.logout();
  };

  console.log({keycloak})
  return (
    <div>
      <h1>Welcome to Employee</h1>
      <p>Authenticated as: {keycloak.tokenParsed?.preferred_username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
