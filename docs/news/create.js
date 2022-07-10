const newsSchemas = require('./schemas')

module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['News'],
    description: 'Create a Novelty. The novelty will be related to the default category automatically',
    operationId: 'create',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: newsSchemas.newsCreate
        }
      }
    },
    responses: {
      201: {
        description: 'Detail of created novelty (Multiple schemas)',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Entity created succesfully'
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
