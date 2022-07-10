const express = require('express')

const router = express.Router()

const newsController = require('../controllers/news')
const newsValidations = require('../middlewares/news-validations')
const authMidd = require('../middlewares/auth')
const filesMidd = require('../middlewares/files')

router.post('/', authMidd.isAdmin, filesMidd.validateImage({ required: true }), newsValidations.create, newsController.create)
router.delete('/:id', authMidd.isAdmin, newsValidations.remove, newsController.remove)
router.get('/:id', authMidd.isAuth, newsValidations.getById, newsController.getById)
router.put('/:id', authMidd.isAdmin, filesMidd.validateImage(), newsValidations.update, newsController.update)
router.get('/', authMidd.isAuth, newsController.getAll)
router.get('/:id/comments', authMidd.isAuth, newsController.getCommentsByNoveltyId)

module.exports = router
