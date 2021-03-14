import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import PrivateRoute from './components/PrivateRoute'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

const eventLogger = (event, error) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens) => {
  console.log('onKeycloakTokens', tokens)
}

ReactDOM.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
    initOptions={{ onLoad: 'login-required' }}
    LoadingComponent={<h1>Loading...</h1>}
  >
    <Router>
      <Redirect from='/' to='/home' />
      <PrivateRoute path='/home' component={HomePage} />
      <Route path='/login' component={LoginPage} />
    </Router>
  </ReactKeycloakProvider>,
  document.getElementById('root')
)
