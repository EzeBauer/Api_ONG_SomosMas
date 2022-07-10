const { check, body } = require('express-validator')
const { executeValidation } = require('./validation-index')

const image = body('imageUrl')
  .if((value, { req }) => !req.file)
  .isString().withMessage('must be a string').bail().isLength({ min: 1, max: 1234 }).withMessage('length range: 1-1234')

const createSlide = [
  image,
  check('text').notEmpty().withMessage('This camp is required and has to be a string'),
  check('order').notEmpty().isNumeric().withMessage('This camp is required and has to be a number'),
  check('organizationId').notEmpty().isNumeric().withMessage('This camp is required and has to be a number'),
  executeValidation
]

const updateSlide = [
  check('text').isString().optional().withMessage('This camp has to be a string'),
  check('order').isNumeric().optional().withMessage('This camp has to be a number'),
  check('organizationId').isNumeric().optional().withMessage('This camp has to be a number'),
  image, executeValidation
]

module.exports = {
  createSlide,
  updateSlide
}
