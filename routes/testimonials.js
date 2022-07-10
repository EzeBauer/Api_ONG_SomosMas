const express = require('express')
const router = express.Router()

const { createReqValidation, updateReqValidation } = require('../middlewares/testimonials-validations.js')
const authMiddleware = require('../middlewares/auth')
const testimonialsController = require('../controllers/testimonials')
const filesMidd = require('../middlewares/files')

router.delete('/:id', authMiddleware.isAdmin, testimonialsController.remove)
router.post('/', authMiddleware.isAdmin, filesMidd.validateImage({ required: true }), createReqValidation, testimonialsController.create)
router.get('/', testimonialsController.getAll)
router.put('/:id', authMiddleware.isAdmin, filesMidd.validateImage(), updateReqValidation, testimonialsController.update)

module.exports = router
