const usersRepository = require('../repositories/users')
const { getTokenPayload } = require('../middlewares/auth')
const bcrypt = require('bcrypt')
const filesModule = require('../modules/files')

const update = async (id, body, token, imageFile) => {
  const payload = await getTokenPayload(token)
  const pass = await usersRepository.getPass(payload.userId)
  const actualImage = await usersRepository.getImage(id)

  body.image = await filesModule.updateImageHandler(imageFile || body.image, actualImage)
  body.password = await checkPasswords(body, pass)

  const rowCounts = await usersRepository.update(id, body)

  if (rowCounts <= 0) {
    const error = new Error('The user dont exist')
    error.status = 404
    throw error
  }

  return await usersRepository.getById(id)
}

const checkPasswords = async (body, pass) => {
  if (body.password) {
    if (!body.currentPassword) {
      const error = new Error('Insert current password')
      error.status = 400
      throw error
    }

    return comparePasswords(body, pass)
  }
}

const comparePasswords = async (body, pass) => {
  const passwordsMatch = bcrypt.compareSync(body.currentPassword, pass.password)
  if (!passwordsMatch) {
    const error = new Error('The current password is incorrect')
    error.status = 400
    throw error
  }

  return bcrypt.hashSync(body.password, 12)
}

const remove = async (id) => {
  const user = await usersRepository.remove(id)
  if (!user) {
    const error = new Error('Can\'t remove the user with id provided.')
    error.status = 400
    throw error
  }
  return user
}

module.exports = {
  update,
  remove

}
