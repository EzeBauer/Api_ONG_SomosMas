const express = require('express')

const router = express.Router()
const membersController = require('../controllers/members')
const authMiddleware = require('../middlewares/auth')
const { updateReqValidation, createReqValidation } = require('../middlewares/members-validations')
const filesMidd = require('../middlewares/files')

router.delete('/:id', authMiddleware.isAuth, membersController.remove)
router.put('/:id', authMiddleware.isAuth, filesMidd.validateImage(), updateReqValidation, membersController.update)
router.post('/', authMiddleware.isAuth, filesMidd.validateImage({ required: true }), createReqValidation, membersController.create)
router.get('/', authMiddleware.isAdmin, membersController.getAll)

module.exports = router
