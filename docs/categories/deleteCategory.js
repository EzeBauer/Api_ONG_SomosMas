const schemaCategories = require('./categorieSchema')

module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Delete one Category',
    operationId: 'deleteCategory',
    parameters: [
      schemaCategories.idCategory
    ],
    responses: {
      200: {
        description: 'Delete one category',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Category 1 removed succesfully'
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
      404: {
        $ref: '#/components/responses/NotFound'
      },
      500: {
        description: 'AWS Deleting Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                error: {
                  type: 'string',
                  example: 'Error deleting the image'
                }
              }
            }
          }
        }
      }
    }
  }
}
