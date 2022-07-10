const organizationRepository = require('../repositories/organizations')

const update = async (id, body) => {
  return await organizationRepository.update(id, body)
}
const getById = async (id) => {
  const organization = await organizationRepository.getById(id)
  if (!organization) {
    const error = new Error('Organization not found ')
    error.status = 404
    throw error
  }
  return organization
}

module.exports = {
  update,
  getById
}
