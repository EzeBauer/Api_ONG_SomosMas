const db = require('../models')

const getRoleById = async (roleId) => {
  return await db.Roles.findOne({ where: { id: roleId } })
}

const getIdByName = async (name) => {
  return await db.Roles.findOne({ where: { name } })
}

module.exports = {
  getRoleById,
  getIdByName
}
