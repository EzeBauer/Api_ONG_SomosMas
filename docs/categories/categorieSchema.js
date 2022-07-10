const id = {
  $ref: '#/components/schemas/Id',
  example: '1'
}
const name = {
  type: 'string',
  description: 'category name',
  example: 'news'
}
const examplePagination = [
  {
    id: 1,
    name: 'news'
  },
  {
    id: 2,
    name: 'Category 1'
  },
  {
    id: 3,
    name: 'Category 2'
  },
  {
    id: 4,
    name: 'Category 3'
  },
  {
    id: 5,
    name: 'Category 4'
  },
  {
    id: 6,
    name: 'Category 5'
  },
  {
    id: 7,
    name: 'Category 6'
  },
  {
    id: 8,
    name: 'Category 7'
  },
  {
    id: 9,
    name: 'Category 8'
  },
  {
    id: 10,
    name: 'Category 9'
  }
]
const imageUrl = {
  $ref: '#/components/schemas/Image'
}
const imageFile = {
  type: 'string',
  description: 'Image url or file.',
  example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg',
  format: 'binary'
}
const description = {
  type: 'string',
  description: 'News category.'
}
const deletedAt = {
  type: 'string',
  example: null
}
const createdAt = {
  type: 'string',
  example: '2022-02-07T11:05:33.000Z'
}
const updatedAt = {
  type: 'string',
  example: '2022-02-07T11:05:33.000Z'
}
module.exports = {
  idCategory: {
    name: 'id',
    in: 'path',
    schema: {
      $ref: '#/components/schemas/Id'
    },
    required: true,
    description: 'A Category id'
  },
  createSchame: {
    type: 'object',
    properties: {
      msg: {
        type: 'string',
        example: 'Category new 129'
      },
      data: {
        type: 'object',
        properties: {
          id,
          name: {
            ...name,
            example: 'Category new 129'
          },
          imageFile,
          updatedAt,
          createdAt
        }
      }
    }
  },
  postCategorie: {
    type: 'object',
    properties: {
      name: {
        ...name,
        example: 'Category new 129',
        require: true
      },
      description: {
        ...description,
        require: false
      },
      image: imageFile
    }
  },
  getById: {
    type: 'object',
    properties: {
      id,
      name,
      description,
      image: imageUrl,
      deletedAt,
      createdAt,
      updatedAt
    }
  },
  getPaginationList: {
    type: 'object',
    properties: {
      pagesUrl: {
        type: 'object',
        properties: {
          previous: {
            oneOf: [
              {
                type: 'null',
                description: 'previous page does not exist',
                example: null
              },
              {
                type: 'string',
                description: 'url to previous page',
                example: 'http://localhost:3000/categories/?page=1'
              }
            ]
          },
          next: {
            oneOf: [
              {
                type: 'string',
                description: 'url to next page',
                example: 'http://localhost:3000/categories/?page=2'
              },
              {
                type: 'null',
                description: 'next page does not exist',
                example: null
              }
            ]
          }
        }
      },
      itemsCount: {
        type: 'number',
        description: 'count of entities in database',
        example: 47
      },
      totalPages: {
        type: 'number',
        description: 'count of available pages',
        example: 5
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id,
            name
          }
        },
        example: examplePagination
      }
    }
  }
}
