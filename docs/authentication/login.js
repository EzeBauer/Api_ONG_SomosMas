const authSchema = require('./schema')

module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Authentication'],
    description: 'Sing in of users',
    requestBody: {
      content: {
        'application/json': {
          schema: authSchema.Login
        }
      }
    },
    responses: {
      200: {
        description: 'New user logged in',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: authSchema.LoggedIn
              }
            }
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationError'
      },
      404: {
        description: 'Missing or invalid data',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Message of error',
                  example: 'Email and/or Password incorrect'
                }
              }
            }
          }
        }
      }
    }
  }
}
