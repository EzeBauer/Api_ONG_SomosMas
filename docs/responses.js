module.exports = {
  responses: {
    Removed: {
      description: 'Resource removed',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              msg: {
                type: 'string',
                example: 'Entity removed succesfully'
              }
            }
          }
        }
      }
    },
    ValidationError: {
      description: 'Validation Error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ValidationError'
          }
        }
      }
    },
    BadRequest: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/BadRequest'
          }
        }
      }
    },
    ValidationOrBadRequest: {
      description: 'Validation Error or Bad Request (Multiple schemas)',
      content: {
        'application/json': {
          schema: {
            oneOf: [
              { $ref: '#/components/schemas/ValidationError' },
              { $ref: '#/components/schemas/BadRequest' }
            ]
          }
        }
      }
    },
    Unauthorized: {
      description: 'Missing or invalid token',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Bearer Token Invalid'
              }
            }
          }
        }
      }
    },
    Forbidden: {
      description: 'Forbidden resource',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Role admin required'
              }
            }
          }
        }
      }
    },
    NotFound: {
      description: 'Resource Not Found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                description: '',
                example: 'Resource with id 1 not found'
              }
            }
          }
        }
      }
    },
    InternalServerError: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                description: '',
                example: 'Error uploading the image'
              }
            }
          }
        }
      }
    }
  }
}
