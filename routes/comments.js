const express = require('express')
const commentsRouter = express.Router()
const commentsController = require('../controllers/comments')
const commentsMiddleware = require('../middlewares/comments-validations')
const authMiddleware = require('../middlewares/auth')

commentsRouter.get('/', commentsController.getAll)
commentsRouter.post('/', authMiddleware.isAuth, commentsMiddleware.validateComments, commentsMiddleware.noveltyAndUserExisting, commentsController.create)
commentsRouter.put('/:id', commentsMiddleware.isOwnComment, commentsMiddleware.validateComments, commentsMiddleware.noveltyAndUserExisting, commentsController.update)
commentsRouter.delete('/:id', commentsMiddleware.isOwnComment, commentsController.remove)

module.exports = commentsRouter
