module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['News'],
    description: 'Remove one Novelty',
    operationId: 'remove',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'Entity Id'
      }
    ],
    responses: {
      200: {
        $ref: '#/components/responses/Removed'
      },
      400: {
        $ref: '#/components/responses/ValidationError'
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
