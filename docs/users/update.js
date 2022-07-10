const usersSchema = require('./schema')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Users'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'A user ID'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: usersSchema.User
        }
      }
    },
    responses: {
      200: {
        description: 'The user has been updated',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'User 1 updated succesfully'
                },
                data: usersSchema.User
              }
            }
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationOrBadRequest'
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
      },
      404: {
        $ref: '#/components/responses/NotFound'
      },
      500: {
        description: 'Some server error',
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
