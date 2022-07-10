
const { check } = require('express-validator')
const { executeValidation } = require('./validation-index')

const name = check('name')
  .exists().withMessage('Name parameter is required').bail()
  .isString().withMessage('Name has to be a string').bail()
  .isLength({ min: 1, max: 200 }).withMessage('must have content').bail()

const phone = check('phone')
  .optional()
  .isMobilePhone('pt-BR').withMessage('Insert a valid phone')

const email = check('message')
  .optional()
  .isString().withMessage('message has to be a string')
  .isLength({ min: 10, max: 200 }).withMessage('must have content')

const contactValidation = [name, phone, email, executeValidation]

module.exports = { contactValidation }
