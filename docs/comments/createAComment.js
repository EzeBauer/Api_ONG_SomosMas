const schemaComment = require('./schema')

module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Comments'],
    description: 'Create a comment',
    operationId: 'create',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: schemaComment.Comments
        }
      }
    },
    responses: {
      201: {
        description: 'Comment has been created',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'comment created successfully'
                },
                data: schemaComment.Comments
              }
            }
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
      500: {
        description: 'Some server error',
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
