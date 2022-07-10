const deleteCategory = require('./deleteCategory')
const getCategories = require('./getCategories')
const getCategoryById = require('./getCategoryById')
const postCategory = require('./postCategory')
const putCategory = require('./putCategory')
module.exports = {
  '/categories': {
    ...getCategories,
    ...postCategory
  },
  '/categories/{id}': {
    ...getCategoryById,
    ...putCategory,
    ...deleteCategory
  }
}
