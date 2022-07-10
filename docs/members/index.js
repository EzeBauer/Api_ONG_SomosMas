const getAll = require('./getAll')
const remove = require('./remove')
const create = require('./create')
const update = require('./update')
module.exports = {
  '/members': {
    ...getAll,
    ...create
  },
  '/members/{id}': {
    ...remove,
    ...update
  }

}
