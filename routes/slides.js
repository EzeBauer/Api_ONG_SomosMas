const express = require('express')
const slidesController = require('../controllers/slides')
const authMiddleware = require('../middlewares/auth')
const slideValidations = require('../middlewares/slide-validations')
const filesMiddleware = require('../middlewares/files')

const router = express.Router()

router.delete('/:id', authMiddleware.isAdmin, slidesController.remove)
router.get('/', slidesController.getAll)
router.get('/:id', slidesController.getById)
router.put('/:id', slideValidations.updateSlide, authMiddleware.isAdmin, filesMiddleware.validateImage(), slidesController.update)
router.post('/create', slideValidations.createSlide, authMiddleware.isAdmin, filesMiddleware.validateImage({ required: true }), slidesController.create)

module.exports = router
