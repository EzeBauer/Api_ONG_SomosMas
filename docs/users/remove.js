module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['Users'],
    description: 'Delete one user',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'A user ID'
      }
    ],
    responses: {
      200: {
        description: 'Delete one user',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'User 1 was removed succesfully'
                }
              }
            }
          }
        }
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
      }
    }
  }
}
