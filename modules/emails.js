const sgMail = require('@sendgrid/mail')
const { sendGrid: sgConfig } = require('../config/config')

sgMail.setApiKey(sgConfig.apiKey)

/**
 * Send emails function, USE IT WITH CATCH.
 *
 * @param {string}   mailData           object with mail params
 * @param {string}   mailData.to        intended recipient's email address.
 * @param {string}   mailData.subject   subject of your email.
 * @param {string}   [mailData.html]    html string.
 * @param {string}   [mailData.text]    body text, if html provided this will be ignored.
 */
const send = async ({ to, subject, html, text }) => {
  if (!sgConfig.sendEmails) {
    return
  }
  const mailToSend = {
    from: sgConfig.email,
    to,
    subject,
    html: html,
    text: html ? undefined : text
  }
  try {
    await sgMail.send(mailToSend)
  } catch (error) {
    error.message = sendGridErrorToString(error)
    throw error
  }
}

module.exports = {
  send
}

function sendGridErrorToString (error) {
  let errorMsg = error.message
  if (error.response) {
    let errorsAsString = ''
    error.response.body.errors.forEach(error => {
      errorsAsString += `{ message: ${error.message}, field: ${error.field} }, `
    })

    errorMsg = `message: ${error.message}; code: ${error.code}; body: ${errorsAsString}`
  }
  return errorMsg
}
