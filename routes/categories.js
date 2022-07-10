const express = require('express')
const filesMiddleware = require('../middlewares/files')
const router = express.Router()

const categoriesController = require('../controllers/categories')
const authMiddleware = require('../middlewares/auth')
const { createValidationCategory, updateValidationCategory } = require('../middlewares/categories-validation')

router.get('/', authMiddleware.isAdmin, categoriesController.getAll)
router.get('/:id', authMiddleware.isAdmin, categoriesController.getById)
router.delete('/:id', authMiddleware.isAdmin, categoriesController.remove)
router.post('/',
  authMiddleware.isAdmin,
  filesMiddleware.validateImage(),
  createValidationCategory,
  categoriesController.create
)
router.put('/:id',
  authMiddleware.isAdmin,
  filesMiddleware.validateImage(),
  updateValidationCategory,
  categoriesController.update
)

module.exports = router
