const db = require('../models')

const create = async (contact) => {
  return await db.Contacts.create(contact)
}

const getAll = async () => {
  const contacts = await db.Contacts.findAll()
  return contacts
}

module.exports = {
  create,
  getAll
}
