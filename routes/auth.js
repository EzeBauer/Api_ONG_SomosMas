const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')
const authValidations = require('../middlewares/auth-validations')
const authMiddlewares = require('../middlewares/auth')

router.get('/', authMiddlewares.isAdmin, authController.getAll)
router.post('/login', authValidations.login, authController.login)
router.post('/register', authValidations.register, authController.create)
router.get('/me', authMiddlewares.isAuth, authController.getByToken)

module.exports = router
