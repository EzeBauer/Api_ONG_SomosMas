const { body } = require('express-validator')
const { executeValidation } = require('./validation-index.js')

const name = body('name')
  .isString().withMessage('the field must be string')
  .notEmpty().withMessage('the field must not be empty')

const content = body('content')
  .isString().withMessage('the field must be string')
  .notEmpty().withMessage('the field must not be empty')

const image = body('image')
  .if((value, { req }) => !req.file)
  .isString().withMessage('the field must be string')

const createReqValidation = [name, content, image, executeValidation]
const updateReqValidation = [name, content, image, executeValidation]

module.exports = {
  updateReqValidation,
  createReqValidation
}
