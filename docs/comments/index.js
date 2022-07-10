const getAllComments = require('./getAllComments')
const createAComment = require('./createAComment')
const updateAComment = require('./updateAComment')
const deleteAComment = require('./deleteAComment')
module.exports = {
  '/comments': {
    ...getAllComments,
    ...createAComment
  },
  '/comments/{id}': {
    ...updateAComment,
    ...deleteAComment
  }

}
