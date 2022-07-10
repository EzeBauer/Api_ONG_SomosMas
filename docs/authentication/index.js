const getAll = require('./getAll')
const getByToken = require('./getByToken')
const login = require('./login')
const register = require('./register')
module.exports = {
  '/auth': {
    ...getAll
  },
  '/auth/me': {
    ...getByToken
  },
  '/auth/register': {
    ...register
  },
  '/auth/login': {
    ...login
  }
}
