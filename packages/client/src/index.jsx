import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/Home'
import AuthService from './services/AuthService'

const renderApp = () => (
  ReactDOM.render(
    <Router>
      <Redirect from='/' to='/home' />
      <Route path='/home' component={HomePage} />
    </Router>,
    document.getElementById('root')
  )
)

AuthService.initKeycloak(renderApp)
