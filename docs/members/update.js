const memberSchema = require('./schema')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Update a member by ID',
    operationId: 'update',
    parameters: [
      {
        name: 'id',
        type: {
          $ref: '#/components/schemas/Id'
        },
        in: 'path',
        required: true
      }
    ],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: memberSchema.Members
        },
        'application/json': {
          schema: memberSchema.Members
        }
      }
    },
    responses: {
      201: {
        description: 'Update a member by ID',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Some message of response',
                  example: 'The member was successfully updated'
                }
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
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
