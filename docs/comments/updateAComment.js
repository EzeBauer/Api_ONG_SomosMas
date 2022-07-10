const schemaComment = require('./schema')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Comments'],
    description: 'update a comment by id',
    operationId: 'update',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'integer',
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'The comment id'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: schemaComment.Comments
        }
      }
    },
    responses: {
      200: {
        description: 'The comment has been updated',
        content: {
          'application/json': {
            schema: schemaComment.Comments
          }
        }
      },
      400: {
        description: 'Bad request or Validation',
        $ref: '#/components/responses/ValidationOrBadRequest'
      },
      401: {
        description: 'Token Error not found',
        $ref: '#/components/responses/Unauthorized'
      },
      403: {
        description: 'it isnt your comment or you are not an admin',
        $ref: '#/components/responses/Forbidden'
      },
      404: {
        description: 'Comment not found',
        $ref: '#/components/responses/NotFound'
      },
      500: {
        description: 'Some server error',
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
