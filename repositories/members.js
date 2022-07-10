const db = require('../models')

const create = async (body) => {
  return await db.Members.create(body)
}
const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } })
}

const update = async (id, body) => {
  return await db.Members.update(body, { where: { id } })
}

const getAll = async (offset = 0, limit = 10) => {
  return await db.Members.findAndCountAll({
    offset: offset,
    limit: limit
  })
}
const getById = async id => {
  return await db.Members.findByPk(id)
}
module.exports = {
  remove,
  create,
  getAll,
  update,
  getById
}
