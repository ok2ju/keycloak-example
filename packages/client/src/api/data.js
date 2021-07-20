import { Axios } from './config'

export const dataApi = {
  getProtectedData () {
    return Axios.get('/secured')
  }
}
