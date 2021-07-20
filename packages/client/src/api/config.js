import axios from 'axios'
import AuthService from '../services/AuthService'

const setAuthToken = (config) => () => {
  config.headers.Authorization = `Bearer ${AuthService.getToken()}`
  return Promise.resolve(config)
}

// TODO: Add proxy
export const Axios = axios.create({
  baseURL: 'http://localhost:3001/service',
  headers: {
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.request.use((config) => {
  if (AuthService.isLoggedIn()) {
    return AuthService.updateToken(setAuthToken(config))
  }

  return config
}, (error) => Promise.reject(error))

Axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)
