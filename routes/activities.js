const express = require('express')
const router = express.Router()

const activitiesController = require('../controllers/activities')
const authMiddleware = require('../middlewares/auth')
const activitiesValidations = require('../middlewares/activities-validations')
const filesMiddleware = require('../middlewares/files')

router.get('/', authMiddleware.isAuth, activitiesController.getAll)
router.post('/',
  authMiddleware.isAdmin,
  filesMiddleware.validateImage({ required: true }),
  activitiesValidations.create,
  activitiesController.create)
router.put('/:id',
  authMiddleware.isAdmin,
  filesMiddleware.validateImage(),
  activitiesValidations.update,
  activitiesController.update)

module.exports = router
