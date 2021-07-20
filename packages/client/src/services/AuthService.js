import Keycloak from 'keycloak-js'

const kc = new Keycloak({
  realm: 'kcExample',
  url: 'http://localhost:8080/auth/',
  clientId: 'fe-app'
})

const initKeycloak = (onAuthenticatedCallback) => {
  kc.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  }).then((authenticated) => {
    if (authenticated) {
      onAuthenticatedCallback()
    } else {
      login()
    }
  }).catch((error) => {
    console.log('error', error)
  })
}

const login = kc.login

const logout = kc.logout

const getToken = () => kc.token

const isLoggedIn = () => !!kc.token

const updateToken = (successCallback) => (
  kc.updateToken(5)
    .then(successCallback)
    .catch(login)
)

const getUsername = () => kc.tokenParsed?.preferred_username

const hasRole = (roles) => roles.some((role) => kc.hasRealmRole(role))

const AuthService = {
  initKeycloak,
  login,
  logout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole
}

export default AuthService
