const update = require('./update')
const remove = require('./remove')
module.exports = {
  '/users/{id}': {
    ...update,
    ...remove
  }
}
