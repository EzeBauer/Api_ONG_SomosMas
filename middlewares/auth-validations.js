const { body, validationResult } = require('express-validator')
const { executeValidation } = require('./validation-index')

const email = body('email')
  .exists().withMessage('param required').bail()
  .isEmail().withMessage('must be a valid email').bail()
  .normalizeEmail()

const password = body('password')
  .exists().withMessage('param required').bail()
  .isString().withMessage('must be a string').bail()
  .notEmpty().withMessage('cannot be empty').bail()

const firstName = body('firstName')
  .notEmpty()
  .matches(/^[A-Z]+$/i)
  .withMessage('Please enter your fistname correctly')
  .bail()

const lastName = body('lastName')
  .notEmpty()
  .matches(/^[A-Z]+$/i)
  .withMessage('Please enter your lastname correctly')
  .bail()

const login = [email, password, executeValidationLogin]
const register = [firstName, lastName, email, password, executeValidation]

module.exports = {
  login,
  register
}

// Login response must contain data.ok: boolean
function executeValidationLogin (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), data: { ok: false } })
  }
  next()
}
