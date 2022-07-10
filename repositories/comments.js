const db = require("../models");

const getAll = async () => {
  const response = await db.Comments.findAll({
    order: [["createdAt", "DESC"]],
    attributes: ["body"],
  })
  return response
}
const create = async (data) => {
  const response = await db.Comments.create(data)
  return response
}
const remove = async (id) => {
  await db.Comments.destroy({ where: { id } });
}
const getById = async (id) => {
  return await db.Comments.findByPk(id)
}
const update = async (data, id) => {
  return await db.Comments.update(data, {
    where: {
      id
    }
  })
}

module.exports = {
  getAll,
  create,
  update,
  getById,
  remove
}
