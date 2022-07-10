const db = require('../models')

const create = async (body) => {
  const data = await db.Testimonials.create(body)
  return data
}

const remove = async (id) => {
  const data = await db.Testimonials.destroy({
    where: { id }
  })
  return data
}

const update = async (id, body) => {
  const rowsUpdated = await db.Testimonials.update(body, {
    where: { id }
  })
  return rowsUpdated
}

const getAll = async (offset, limit) => {
  const data = await db.Testimonials.findAndCountAll({
    attributes: ['id', 'name', 'content', 'image'],
    offset,
    limit
  })
  return data
}

const getById = async (id) => {
  const testimonial = await db.Testimonials.findByPk(id)
  return testimonial
}

const getImage = async (id) => {
  const image = db.Testimonials.findByPk(id, {
    attributes: ['image']
  })
  return image.image
}

module.exports = {
  create,
  update,
  remove,
  getById,
  getImage,
  getAll
}
