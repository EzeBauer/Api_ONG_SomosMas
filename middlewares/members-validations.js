
const { body, param } = require('express-validator')

const { executeValidation } = require('./validation-index')

const name = body('name', 'Must be input a name valid')
  .notEmpty()
  .trim()

const image = body('image')
  .if((value, { req }) => !req.file)
  .isString().withMessage('Must be a string').bail()
  .isLength({ min: 1, max: 1234 }).withMessage('length range: 1-1234').bail()

const id = param('id', 'Must be input id the member in the params.')
  .isInt()

const updateReqValidation = [id, name, image, executeValidation]
const createReqValidation = [name, executeValidation]

module.exports = {
  createReqValidation,
  updateReqValidation
}
