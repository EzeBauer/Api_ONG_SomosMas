const { organizationId } = require('../config/config')
const db = require('../models')

const update = async (id, body) => {
  const data = await db.Organization.update(body, {
    where: { id }
  })
  return data
}

const getById = async (id) => {
  const data = await db.Organization.findByPk(id, {
    attributes: ['name', 'image', 'phone', 'address', 'urlFacebook', 'urlLinkedin', 'urlInstagram'],
    include: ['Slides'],
    where: { id: organizationId }
  })
  return data
}
const getByIdReduced = async (id) => {
  const data = await db.Organization.findByPk(id, {
    attributes: ['name', 'image', 'phone', 'address', 'email']
  })
  return data
}
module.exports = {
  update,
  getById,
  getByIdReduced
}
