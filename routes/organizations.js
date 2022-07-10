const express = require('express')

const router = express.Router()

const organizationController = require('../controllers/organizations')
const authMiddleware = require('../middlewares/auth')

router.put('/public', authMiddleware.isAdmin, organizationController.update)
router.get('/public', organizationController.getById)

module.exports = router
