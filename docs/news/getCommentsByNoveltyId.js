module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['News'],
    description: 'Get list of comments for a novelty',
    operationId: 'getCommentsByNoveltyId',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'Novelty Id'
      }
    ],
    responses: {
      200: {
        description: 'List of comments',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      body: {
                        type: 'string',
                        description: 'body of the comment',
                        example: 'Buen trabajo!'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
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
