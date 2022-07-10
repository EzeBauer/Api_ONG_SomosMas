const ejs = require('ejs')
const path = require('path')

const templateContact = async (organization, newContact) => {
  const data = {
    nameOrg: organization.name,
    image: organization.image,
    address: organization.address,
    phone: organization.phone,
    name: newContact.name,
    email: newContact.email
  }

  const ruteTemplate = path.join(process.cwd(), 'templates', 'emailContact.ejs')
  return await ejs.renderFile(ruteTemplate, data)
}

module.exports = {
  templateContact
}
