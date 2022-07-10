const testimonialsSchemas = require('./schemas')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Testimonials'],
    description: 'Update a testimonial',
    operationId: 'update',
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
    requestBody: {
      content: {
        'application/json': {
          schema: testimonialsSchemas.testimonialsGetAll
        },
        'multipart/form-data': {
          schema: testimonialsSchemas.testimonialsGetAll
        }
      }
    },
    responses: {
      200: {
        description: 'Detail of updated testimonial',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Testimonial ID updated successfully'
                },
                data: testimonialsSchemas.testimonialsUpdate
              }
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
