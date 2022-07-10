const organizationRepository = require('../repositories/organizations')
const { templateContact } = require('./sendEmailContact')
const { organizationId } = require('../config/config')
const { send } = require('./emails')

const sendDataTemplate = async (newContact) => {
  try {
    const organization = await organizationRepository.getById(organizationId)
    const headersEmail = {
      to: newContact.email,
      subject: `Gracias por contactarte con ${organization.name}`,
      html: await templateContact(organization, newContact),
      text: 'Gracias por haberte contactado con nosotros'
    }
    await send(headersEmail)
    console.log({ msg: 'Email sent successfully!' })
  } catch (error) {
    console.error({ error: error, msg: 'Email sent failed' })
  }
}

module.exports = { sendDataTemplate }
