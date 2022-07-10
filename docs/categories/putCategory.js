const schemaCategories = require('./categorieSchema')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Put one Category',
    operationId: 'putCategory',
    parameters: [
      schemaCategories.idCategory
    ],
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Update category name',
                example: 'news Update'
              },
              description: {
                type: 'string',
                description: 'Update category.',
                example: 'Category Update',
                require: true
              },
              image: {
                type: 'string',
                description: 'Image url or file.',
                example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg',
                format: 'binary',
                require: true
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Put one category',
        content: {
          'application/json': {
            schema: schemaCategories.getById,
            example: {
              id: 1,
              name: 'Update Name',
              description: 'Update Description',
              image: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg',
              deletedAt: null,
              createdAt: '2022-02-07T11:05:33.000Z',
              updatedAt: '2022-02-07T11:05:33.000Z'
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
