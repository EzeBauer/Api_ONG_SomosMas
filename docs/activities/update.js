const activitiesSchema = require('./schema')

module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Activities'],
    summary: 'Update a Activity to the database',
    operationId: 'updateActivity',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'A Activity id'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: activitiesSchema.Activities
        },
        'multipart/form-data': {
          schema: activitiesSchema.Activities
        }
      }
    },
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Activity updated successfully'
                },
                data: activitiesSchema.Activities
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
      500: {
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
