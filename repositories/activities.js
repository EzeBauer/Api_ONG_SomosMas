const db = require('../models')

const getAll = async () => {
  return await db.Activities.findAll({
    attributes: ['id', 'name']
  })
}

const create = async (data) => {
  return await db.Activities.create(data)
}

const update = async (id, data) => {
  const [affectedRows] = await db.Activities.update(data, { where: { id: id } })
  return affectedRows
}

module.exports = {
  getAll,
  create,
  update
}
