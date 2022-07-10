const schemaCategories = require('./categorieSchema')

module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Creata one Category',
    operationId: 'CreateCategory',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: schemaCategories.postCategorie
        }
      }
    },
    responses: {
      201: {
        description: 'Post one category',
        content: {
          'application/json': {
            schema: schemaCategories.createSchame
          }
        }
      },
      400: {
        description: 'Validation Error',
        content: {
          'application/json': {
            schema: {
              oneOf: [
                {
                  $ref: '#/components/schemas/ValidationError'
                },
                {
                  type: 'object',
                  properties: {
                    msg: {
                      type: 'string',
                      example: 'Name: Category new 129, is not unique'
                    }
                  }
                }
              ]
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
