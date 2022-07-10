
const name = {
  type: 'String',
  description: 'Testimonial name',
  example: 'Rodrigo Velazquez'
}
const content = {
  type: 'string',
  description: 'Testimonial content',
  example: 'Soy Licenciado en Relaciones Institucionales y trabajo vinculando a la fundación...'
}
const imageUrl = {
  $ref: '#/components/schemas/Image'
}
const imageFile = {
  type: 'string',
  example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg',
  format: 'binary'
}

module.exports = {
  testimonialsGetAll: {
    type: 'object',
    properties: {
      data: {
        name,
        content,
        image: imageUrl
      }
    }
  },
  testimonialsUpdate: {
    type: 'object',
    properties: {
      msg: {
        type: 'string',
        description: 'The message of response',
        example: 'Testimonial ID updated successfully'
      },
      data: {
        name,
        content,
        image: imageFile
      }
    }
  },
  testimonialsCreate: {
    type: 'object',
    properties: {
      msg: {
        type: 'string',
        description: 'The message of response',
        example: 'Testimonial created successfully'
      },
      data: {
        name,
        content,
        image: imageFile
      }
    }
  }
}
