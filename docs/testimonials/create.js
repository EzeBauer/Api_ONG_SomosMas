const testimonialsSchemas = require('./schemas')

module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Testimonials'],
    description: 'Create a testimonial',
    operationId: 'create',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: testimonialsSchemas.testimonialsCreate
        }
      }
    },
    responses: {
      201: {
        description: 'Detail of created testimonial (Multiple schemas)',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Entity created succesfully'
                },
                data: testimonialsSchemas.testimonialsCreate
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
