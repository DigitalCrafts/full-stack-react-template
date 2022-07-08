const SessionStore = require('express-session').Store
const SequelizeStore = require('connect-session-sequelize')(SessionStore)
const { ConnectionError, ConnectionRefusedError } = require('sequelize')
const db = require('../models')

let store
store = new SequelizeStore({ db: db.sequelize })
// @ts-ignore
store.sync().catch((e) => {
  let message = 'Could not connect to database. '
  if (e instanceof ConnectionRefusedError) {
    message += 'Is the server running? Do you have the right host/port?'
    throw Error(message)
  } else if (e instanceof ConnectionError) {
    if (e.message.match(/^database .* does not exist$/)) message += 'Have you created it?'
    else if (e.message.match(/^role .* does not exist$/)) message += 'Are you using the correct username?'
    else if (e.message.match(/password authentication failed/)) message += 'Are you using the correct password?'
    throw Error(`${message}\n\n\nOriginal: ${e.message}`)
  } else {
    throw e
  }
})

module.exports = store
