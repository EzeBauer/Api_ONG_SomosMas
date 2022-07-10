const { body, param } = require('express-validator')
const { executeValidation } = require('./validation-index')

const create = [
  body('name')
    .exists().withMessage('required parameter').bail()
    .isString().withMessage('must be a string').bail()
    .notEmpty().withMessage('cannot be empty'),
  body('content')
    .exists().withMessage('required parameter').bail()
    .isString().withMessage('must be a string').bail()
    .notEmpty().withMessage('cannot be empty'),
  body('image')
    .if((value, { req }) => !req.file)
    .isString().withMessage('must be a string').bail()
    .isLength({ min: 1, max: 1234 }).withMessage('length range: 1-1234'),
  executeValidation
]

const update = [
  param('id')
    .exists().withMessage('param required').bail()
    .isInt().withMessage('must be an integer'),
  ...create
]

module.exports = {
  create,
  update
}
