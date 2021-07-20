const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const Keycloak = require('keycloak-connect')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const memoryStore = new session.MemoryStore()

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}))

// TODO: Add .dotenv and store keys in env variables
const kcConfig = {
  clientId: 'be-app',
  public: true,
  bearerOnly: true,
  authServerUrl: 'http://localhost:8080/auth',
  realm: 'kcExample',
  realmPublicKey: 'REALM_PUBLIC_KEY_HERE'
}

const keycloak = new Keycloak({ store: memoryStore }, kcConfig)

// https://www.keycloak.org/docs/latest/securing_apps/index.html#additional-urls
app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}))

app.get('/service/public', (_, res) => {
  res.json({ message: 'public' })
})

// app.get('/service/secured', keycloak.protect('realm:user'), (_, res) => {
app.get('/service/secured', keycloak.protect(), (_, res) => {
  res.json({ message: 'secured' })
})

// TODO: Create roles
app.get('/service/admin', keycloak.protect('realm:admin'), (_, res) => {
  res.json({ message: 'admin' })
})

app.use('*', (_, res) => {
  res.send('404 Not found!')
})

app.listen(3001, () => {
  console.log('Started at port 3001')
})
