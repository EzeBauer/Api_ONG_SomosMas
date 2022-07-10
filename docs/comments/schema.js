module.exports = {
  Comments: {
    type: 'object',
    description: 'comments data',
    required: true,
    properties: {
      user_id: {
        type: 'integer',
        description: 'id of author',
        example: '"1"'
      },
      novelty_id: {
        type: 'integer',
        description: 'id of new',
        example: '"2"'
      },
      body: {
        type: 'string',
        description: 'user typed message',
        example: 'my messagge'
      }
    }
  }
}
