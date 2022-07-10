const userRepository = require('../repositories/users')
const { verifyToken } = require('../modules/auth')
const rolesRepository = require('../repositories/roles')
const { adminRoleName } = require('../config/config')

const getTokenPayload = (req) => {
  const authToken = req.headers.authorization
  const token = authToken && authToken.startsWith('Bearer ') && authToken.split(' ')[1]
  if (!token) {
    const error = new Error('Please provided a token Bearer in authorization')
    error.status = 401
    throw error
  }
  return verifyToken(token)
}

const isAdmin = async (req, res, next) => {
  try {
    const token = getTokenPayload(req)
    const user = await userRepository.getById(token.userId)
    const roleUser = await rolesRepository.getRoleById(user.roleId)
    if (roleUser.name !== adminRoleName) {
      const error = new Error('Role admin required')
      error.status = 403
      throw error
    }
    next()
  } catch (error) {
    next(error)
  }
}

const isAuth = async (req, res, next) => {
  try {
    const token = getTokenPayload(req)
    const user = await userRepository.getById(token.userId)
    if (!user) {
      return res.status(401).json({ error: 'Not found user with token provided.' })
    }
    req.authUser = user.dataValues
    next()
  } catch (error) {
    next(error)
  }
}

const isOwnUser = async (req, res, next) => {
  try {
    const idParm = req.params.id
    const payload = getTokenPayload(req)
    const user = await userRepository.getById(payload.userId)

    if (!user) {
      const error = new Error('Not found user with token provided.')
      error.status = 401
      throw error
    }

    if (payload.userId == idParm) return next()

    const { roleId } = user.dataValues
    const roleUser = await rolesRepository.getRoleById(roleId)

    if (roleUser.name === adminRoleName) return next()

    const error = new Error('Its not authorized')
    error.status = 403
    throw error
  } catch (error) {
    next(error)
  }
}

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser,
  getTokenPayload
}

