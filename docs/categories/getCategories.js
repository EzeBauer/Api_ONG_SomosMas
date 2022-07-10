const schemaCategories = require('./categorieSchema')

module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Get list of categories paginated',
    operationId: 'getCategories',
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
            schema: {
              type: 'object',
              properties: {
                data: schemaCategories.getPaginationList
              }
            }
          }
        }
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
      },
      403: {
        $ref: '#/components/responses/Forbidden'
      }
    }
  }
}
