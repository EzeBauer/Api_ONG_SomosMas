const jwt = require('jsonwebtoken')
const { token } = require('../config/config')

function createToken (payload) {
  return jwt.sign(payload, token.secret, { expiresIn: token.expiresIn })
}

/* verifyToken return a payload object with userId,
    creation time "iat" and expiry time "exp" */
function verifyToken (tokenUser) {
  try {
    return jwt.verify(tokenUser, token.secret)
  } catch (err) {
    if (err.message !== 'jwt expired') err.message = 'Bearer Token Invalid'
    err.status = 401
    throw err
  }
}

module.exports = {
  createToken,
  verifyToken
}
