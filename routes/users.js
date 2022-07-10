const express = require('express')
const router = express.Router()
const userValidations = require('../middlewares/users-validation')

const authMiddleware = require('../middlewares/auth')
const usersController = require('../controllers/users')
const filesMidd = require('../middlewares/files')

router.put('/:id', userValidations.userUpdateValidation, authMiddleware.isAuth, usersController.update)
router.delete('/:id', authMiddleware.isAuth, authMiddleware.isOwnUser, usersController.remove)
router.patch('/:id', userValidations.userUpdateValidation, filesMidd.validateImage(), authMiddleware.isAuth, usersController.update)

module.exports = router
