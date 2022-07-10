const schemaCategories = require('./categorieSchema')

module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Get one Category',
    operationId: 'getById',
    parameters: [
      schemaCategories.idCategory
    ],
    responses: {
      200: {
        description: 'Get detail of selected category',
        content: {
          'application/json': {
            schema: schemaCategories.getById
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
      }
    }
  }
}
