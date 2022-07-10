module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['Testimonials'],
    description: 'Remove one testimonial',
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
