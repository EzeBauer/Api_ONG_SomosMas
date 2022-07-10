
const ejs = require('ejs')
const path = require('path')

const createTemplateWelcome = async (organization) => {
  const data = {
    name: organization.name,
    image: organization.image,
    address: organization.address,
    phone: organization.phone,
    welcomeText: 'Bienvenido, estamos muy agradecidos de que te hayas unido a nuestra organización. Ante cualquier duda, te dejamos nuestros medios de contacto disponibles.',
    email: organization.email
  }
  return await ejs.renderFile(path.join(process.cwd(), 'templates', 'signup-email.ejs'), data).then(html => html)
}

module.exports = {
  createTemplateWelcome
}
