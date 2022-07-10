const { body, param } = require('express-validator')
const { executeValidation } = require('./validation-index')

const name = body('name')
  .exists().withMessage('param required').bail()
  .isString().withMessage('must be a string').bail()
  .notEmpty().withMessage('cannot be empty').bail()

const content = body('content')
  .exists().withMessage('param required').bail()
  .isString().withMessage('must be a string').bail()
  .notEmpty().withMessage('cannot be empty').bail()

const image = body('image')
  .if((value, { req }) => !req.file)
  .isString().withMessage('must be a string').bail()
  .isLength({ min: 1, max: 1234 }).withMessage('length range: 1-1234').bail()

const idParam = param('id')
  .exists().withMessage('param required').bail()
  .isInt().withMessage('must be an integer').bail()

const categoryId = body('categoryId')
  .toInt()
  .custom(value => {
    if ((typeof value === 'number' && value > 0) || value === null) {
      return true
    }
    throw new Error('must be an integer greater than 0 or null')
  })

const create = [name, content, executeValidation]

const remove = [idParam, executeValidation]

const getById = [idParam, executeValidation]

const update = [idParam, name, content, image, categoryId, executeValidation]

module.exports = {
  create,
  remove,
  getById,
  update
}
