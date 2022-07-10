const getAll = require('./getAll')
const create = require('./create')
const update = require('./update')

module.exports = {
  '/activities': {
    ...getAll,
    ...create
  },
  '/activities/{id}': {
    ...update
  }
}
