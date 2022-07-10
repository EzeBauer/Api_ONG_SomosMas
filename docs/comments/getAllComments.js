const schemaComment = require('./schema')

module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Comments'],
    description: 'Return all comments',
    operationId: 'getAll',
    responses: {
      200: {
        description: 'All comments',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: schemaComment.Comments
            }
          }
        }
      },
      500: {
        description: 'Some server Error',
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
