const memberSchema = require('./schema')
module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Get all Members',
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
            schema: {
              type: 'object',
              properties: {
                pagesUrl: {
                  type: 'object',
                  properties: {
                    previous: {
                      oneOf: [
                        {
                          type: 'string',
                          description: 'url to previous page',
                          example: 'http://localhost:3000/news/?page=1'
                        },
                        {
                          type: 'null',
                          description: 'previous page does not exist',
                          example: null
                        }
                      ]
                    },
                    next: {
                      oneOf: [
                        {
                          type: 'null',
                          description: 'next page does not exist',
                          example: null
                        },
                        {
                          type: 'string',
                          description: 'url to next page',
                          example: 'http://localhost:3000/news/?page=3'
                        }
                      ]
                    }
                  }
                },
                itemsCount: {
                  type: 'number',
                  description: 'count of entities in database',
                  example: 15
                },
                totalPages: {
                  type: 'number',
                  description: 'count of available pages',
                  example: 2
                },
                data: {
                  type: 'array',
                  items: memberSchema.Members
                }
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
      },
      500: {
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
