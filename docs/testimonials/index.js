const remove = require('./remove')
const getAll = require('./getAll')
const create = require('./create')
const update = require('./update')

module.exports = {
  '/testimonials': {
    ...getAll,
    ...create
  },
  '/testimonials/{id}': {
    ...remove,
    ...update
  }

}
