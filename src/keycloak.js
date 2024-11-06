import Keycloak from "keycloak-js";

// Initialize Keycloak
const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  clientId: "employee-portal",
  realm: "sso-demo",
});
// const keycloakConfig = {
//     url: 'http://localhost:8080/',
//     realm: 'sso-demo',
//     clientId: 'employee-portal',
//     clientSecret: '7Zp9NGacgBEFAZNcsMLQaFKPcAvfOY0r'
//   };

export default keycloak;
