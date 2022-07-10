const db = require('../models')

const create = async (category) => {
  return await db.Categories.create(category)
}

const findByName = async (name) => {
  return await db.Categories.findOne({ where: { name } })
}

const getAll = async (offset, limit) => {
  return await db.Categories.findAndCountAll({
    attributes: ['id', 'name'],
    offset,
    limit
  })
}
const getById = async (id) => {
  return await db.Categories.findByPk(id)
}

const remove = async (id) => {
  await db.Categories.destroy({ where: { id } })
}

const update = async (id, category) => {
  return await db.Categories.update(category, { where: { id } })
}

// create, update, remove, getAll, getById, getByName
module.exports = {
  create,
  remove,
  findByName,
  getAll,
  update,
  getById
}
