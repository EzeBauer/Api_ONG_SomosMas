const contactsRepository = require('../repositories/contacts')
const { sendDataTemplate } = require('../modules/objectTemplateEmail.js')

const create = async (contact) => {
  const newContact = await contactsRepository.create(contact)
  if (newContact) {
    sendDataTemplate(newContact)
  }
  return newContact
}

const getAll = async () => {
  const contacts = await contactsRepository.getAll()
  return contacts
}

module.exports = {
  create,
  getAll
}
