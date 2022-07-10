module.exports = {
  Users: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        description: 'The user name',
        example: 'Marcelo'
      },
      email: {
        type: 'string',
        description: 'The user email',
        example: 'MarceloPerez@gmail.com'
      },
      image: {
        type: 'string',
        description: 'The user password',
        example: 'https://i.pinimg.com/280x280_RS/6a/77/98/loremimpsuum45215loreml812lorem.jpg'
      }
    }
  },
  Me: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The user id',
        example: '1'
      },
      firstName: {
        type: 'string',
        description: 'The user name',
        example: 'Marcelo'
      },
      lastName: {
        type: 'string',
        description: 'The user lastName',
        example: 'Perez'
      },
      email: {
        type: 'string',
        description: 'The user email',
        example: 'MarceloPerez@gmail.com'
      },
      image: {
        type: 'string',
        description: 'The user image',
        example: 'https://i.pinimg.com/280x280_RS/6a/77/98/loremimpsuum45215loreml812lorem.jpg'
      },
      roleId: {
        type: 'string',
        description: 'The user role',
        example: '1'
      },
      deletedAt: {
        type: 'string',
        description: 'The user removed account',
        example: 'null'
      },
      createdAt: {
        type: 'string',
        description: 'The user created account',
        example: '2022-02-08T23:07:46.000Z'
      },
      updatedAt: {
        type: 'string',
        description: 'The user updated account',
        example: '2022-02-08T23:07:46.000Z'
      }
    }
  },
  Login: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'The user email',
        example: 'MarceloPerez@gmail.com'
      },
      password: {
        type: 'string',
        description: 'The user password',
        example: 'contraseña123'
      }
    }
  },
  Register: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        description: 'The user name',
        example: 'Marcelo'
      },
      lastName: {
        type: 'string',
        description: 'The user lastName',
        example: 'Perez'
      },
      email: {
        type: 'string',
        description: 'The user email',
        example: 'MarceloPerez@gmail.com'
      },
      password: {
        type: 'string',
        description: 'The user password',
        example: 'contraseña123'
      }
    }
  },
  LoggedIn: {
    type: 'object',
    properties: {
      msg: {
        type: 'string',
        description: 'The message of response',
        example: 'Logged in successfully. Data in token payload'
      },
      data: {
        type: 'object',
        properties: {
          ok: {
            type: 'string',
            description: 'The user email',
            example: 'true'
          },
          token: {
            type: 'string',
            description: 'The user email',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY0NDE4MDczMywiZXhwIjoxNjQ0MjY3MTMzfQ.1eNk3cjmvkat7z_NsgStX7Wm2pXKoANSliuhTFwSdVM'
          }
        }
      }
    }
  },
  recivedToken: {
    type: 'string',
    description: 'Recived token of user',
    example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY0NDM2MzU2NSwiZXhwIjoxNjQ0NDQ5OTY1fQ.iRbeSCpaNEdy147sPHZr9baOqs6wCFyreZ5J2hIk7Pk'
  }
}
