module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['Comments'],
    description: 'Remove a comment by ID',
    operationId: 'remove',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of a comments',
        required: true,
        schema: {
          $ref: '#/components/schemas/Id'
        }
      }
    ],
    responses: {
      200: {
        description: 'Comment removed succesfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Comment ID removed successfully'
                }
              }
            }
          }
        }
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
