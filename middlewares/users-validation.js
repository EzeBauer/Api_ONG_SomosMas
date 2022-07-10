const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

// params for validation

const firstNameUpdate = body('firstName')
  .optional().isString().withMessage('Please enter your firstName correctly')

const lastNameUpdate = body('lastName')
  .optional().isString().withMessage('Please enter your lastName correctly')

const emailUpdate = body('email')
  .optional().isEmail().withMessage('Please enter a valid email address')

const passwordUpdate = body('password')
  .optional().isString().withMessage('Please enter a valid password')

const currentPasswordUpdate = body('currentPassword')
  .optional().isString().withMessage('Please enter a valid current password')

const image = body('image')
  .if((value, { req }) => !req.file)
  .optional().isString().withMessage('Please enter your image correctly')

// constvalidators

const userUpdateValidation = [
  firstNameUpdate.bail(),
  lastNameUpdate.bail(),
  emailUpdate.bail(),
  image.bail(),
  passwordUpdate.bail(),
  currentPasswordUpdate.bail(),
  executeValidation
]

module.exports = {
  userUpdateValidation
}
