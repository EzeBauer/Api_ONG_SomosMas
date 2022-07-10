const activitiesSchema = require('./schema')

module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Activities'],
    summary: 'Add a new Activity to the database',
    operationId: 'addActivity',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: activitiesSchema.Activities
        }
      }
    },
    responses: {
      201: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Activity created successfully'
                },
                data: activitiesSchema.Activities
              }
            }
          }
        }
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
      500: {
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
