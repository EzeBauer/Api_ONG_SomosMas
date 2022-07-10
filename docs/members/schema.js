module.exports = {
  Members: {
    type: 'object',
    description: 'This represent a member entity.',
    properties: {
      name: {
        type: 'string',
        description: 'name of the member',
        example: 'Jose Fernandez',
        required: true
      },
      image: {
        type: 'string',
        format: 'binary',
        example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/030bf592-01ee-45a3-891e-16963ef89304.jpg'
      },
      description: {
        type: 'string',
        example: 'Some description about Jose Fernandez',
        description: 'Description about member'
      }
    }
  }
}
