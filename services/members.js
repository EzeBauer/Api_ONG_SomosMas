const { paginate } = require('../modules/pagination')
const membersRepository = require('../repositories/members')
const filesModule = require('../modules/files')

const create = async (body, imageFile) => {
  const imageURL = await filesModule.uploadFile(imageFile)
  body.image = imageURL
  const member = await membersRepository.create(body)
  if (!member) {
    const error = new Error('Can\'t create new member')
    error.status = 400
    throw error
  }
  return member
}

const remove = async (id) => {
  const member = await membersRepository.getById(id)
  if (!member) {
    const error = new Error(`Member with id ${id} not found`)
    error.status = 404
    throw error
  }
  // await filesModule.deleteFile(member.image)
  await membersRepository.remove(id)
}

const update = async (id, body, imageFile) => {
  const currentMember = await membersRepository.getById(id)
  if (!currentMember) {
    const error = new Error(`Member with id ${id} not found`)
    error.status = 404
    throw error
  }
  body.image = await filesModule.updateImageHandler(imageFile || body.image, currentMember.image)
  const member = await membersRepository.update(id, body)
  return member
}

const getAll = async (req) => {
  return await paginate(membersRepository.getAll, req, 10)
}

module.exports = {
  create,
  remove,
  getAll,
  update
}
