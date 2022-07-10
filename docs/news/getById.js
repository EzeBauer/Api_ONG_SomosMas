const newsSchemas = require('./schemas')

module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['News'],
    description: 'Get one Novelty',
    operationId: 'getById',
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
    responses: {
      200: {
        description: 'Get detail of selected novelty (Multiple schemas)',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: newsSchemas.newsGetById
              }
            }
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationError'
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
