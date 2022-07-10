module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    description: 'Remove a  member of organization by ID',
    operationId: 'remove',
    tags: ['Members'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of a member',
        required: true,
        schema: {
          $ref: '#/components/schemas/Id'
        }
      }
    ],
    responses: {
      200: {
        $ref: '#/components/responses/Removed'
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
