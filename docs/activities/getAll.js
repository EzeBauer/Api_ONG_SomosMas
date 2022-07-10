module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Activities'],
    summary: 'List all database activities',
    operationId: 'getAllActivities',
    description: 'Get all Activities',
    responses: {
      200: {
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
                      id: {
                        type: 'number',
                        example: 1
                      },
                      name: {
                        type: 'string',
                        example: 'Apoyo escolar: Primario'
                      },
                      content: {
                        type: 'string',
                        example: 'Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno'
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
      }
    }
  }
}
