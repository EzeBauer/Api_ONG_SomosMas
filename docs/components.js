const responses = require('./responses')

module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      Id: {
        type: 'number',
        description: 'ID',
        example: '1'
      },
      Image: {
        type: 'string',
        description: 'image url',
        example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg'
      },
      ValidationError: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                value: {
                  description: 'value provided',
                  example: 4
                },
                msg: {
                  type: 'string',
                  example: 'must be a string'
                },
                param: {
                  type: 'string',
                  example: 'name'
                },
                location: {
                  type: 'string',
                  example: 'body'
                }
              }
            }
          }
        }
      },
      BadRequest: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            example: 'Related entity with id 500 not found. Not updated'
          }
        }
      },

      Testimonials: {
        type: 'object',
        description: 'Representation of testimonial ',
        properties: {
          name: {
            type: 'String',
            description: 'Testimonial name',
            example: 'Rodrigo Velazquez'
          },
          content: {
            type: 'string',
            description: 'Testimonial content',
            example: 'Soy Licenciado en Relaciones Institucionales y trabajo vinculando a la fundación...'
          },
          Image: {
            type: 'string',
            description: 'Save Url String',
            example: 'www.google.com'
          }
        }
      }
    },
    ...responses
  }
}
