module.exports = {
  User: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        description: 'The user name',
        example: 'Marcelo Eduardo'
      },
      lastName: {
        type: 'string',
        description: 'The user name',
        example: 'Perez Rodriguez'
      }
    }
  }
}
