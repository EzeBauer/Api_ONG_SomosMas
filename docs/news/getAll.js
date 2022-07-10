const newsSchemas = require('./schemas')

module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['News'],
    description: 'Get list of news paginated',
    operationId: 'getAll',
    parameters: [
      {
        name: 'page',
        in: 'query',
        schema: {
          type: 'number',
          example: 1
        },
        description: 'Number of the page'
      }
    ],
    responses: {
      200: {
        description: 'List of news with pagination data (Multiple schemas)',
        content: {
          'application/json': {
            schema: newsSchemas.resNewsGetAll
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationError'
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
      },
      500: {
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
