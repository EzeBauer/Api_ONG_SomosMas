const authSchema = require('./schema')

module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Authentication'],
    description: 'Get data of user by token',
    parameters: [
      {
        name: 'Token',
        in: 'headers',
        schema: {
          type: 'object',
          properties: {
            Authorization: authSchema.recivedToken
          }
        },
        required: true,
        description: 'The token of the user'
      }
    ],
    responses: {
      200: {
        description: 'Data of user',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: authSchema.Me
              }
            }
          }
        }
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
      }
    }
  }
}
