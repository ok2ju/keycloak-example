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

const keycloak = new Keycloak({
  store: memoryStore
})

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}))

app.get('/service/public', (_, res) => {
  res.json({ message: 'public' })
})

app.get('/service/secured', keycloak.protect('realm:user'), (_, res) => {
  res.json({ message: 'secured' })
})

app.get('/service/admin', keycloak.protect('realm:admin'), (_, res) => {
  res.json({ message: 'admin' })
})

app.use('*', (_, res) => {
  res.send('404 Not found!')
})

app.listen(3000, () => {
  console.log('Started at port 3000')
})
