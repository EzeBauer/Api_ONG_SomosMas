const newsSchemas = require('./schemas')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['News'],
    description: 'Update a Novelty',
    operationId: 'update',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'Entity Id'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: newsSchemas.newsUpdate
        },
        'multipart/form-data': {
          schema: newsSchemas.newsUpdate
        }
      }
    },
    responses: {
      200: {
        description: 'Detail of updated novelty (Multiple schemas)',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Entity updated succesfully'
                },
                data: newsSchemas.newsGetById
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
      403: {
        $ref: '#/components/responses/Forbidden'
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
