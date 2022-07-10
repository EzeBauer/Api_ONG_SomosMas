const create = require('./create')
const update = require('./update')
const remove = require('./remove')
const getAll = require('./getAll')
const getById = require('./getById')
const getCommentsByNoveltyId = require('./getCommentsByNoveltyId')

module.exports = {
  '/news': {
    ...create,
    ...getAll
  },
  '/news/{id}': {
    ...update,
    ...remove,
    ...getById
  },
  '/news/{id}/comments': {
    ...getCommentsByNoveltyId
  }

}
