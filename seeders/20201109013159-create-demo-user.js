'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => 
  {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Standard',
      lastName: 'Test',
      email: 'standard-test-@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ezequiel',
      lastName: 'Baruer',
      email: 'standard-test-Ezequiel@Baruer.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Eduardo',
      lastName: 'Corgniale',
      email: 'standard-test-Eduardo@Corgniali.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Gimena',
      lastName: 'Rivoira',
      email: 'standard-test-Gimena@Rivoira.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Gonzalo',
      lastName: 'Ortiz',
      email: 'standard-test-Gonzalo@Ortiz.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Matias',
      lastName: 'Marin',
      email: 'standard-test-Matias@Marin.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Mauro',
      lastName: 'Omiñuka',
      email: 'standard-test-Mauro@Omiñuka.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Valentin',
      lastName: 'Tarayre',
      email: 'standard-test-Valentin@Tarayre.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Victor',
      lastName: 'Sanabria',
      email: 'standard-test-Victor@Sanabria.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Manuel',
      lastName: 'Francisco',
      email: 'standard-test-Manuel@Francisco.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 1,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      firstName: 'Admin',
      lastName: 'Test User',
      email: 'admin-test-user@test.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ezequiel',
      lastName: 'Baruer',
      email: 'admin-test-Ezequiel@Baruer.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Eduardo',
      lastName: 'Corgniale',
      email: 'admin-test-Eduardo@Corgniali.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Gimena',
      lastName: 'Rivoira',
      email: 'admin-test-Gimena@Rivoira.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Gonzalo',
      lastName: 'Ortiz',
      email: 'admin-test-Gonzalo@Ortiz.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Matias',
      lastName: 'Marin',
      email: 'admin-test-Matias@Marin.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Mauro',
      lastName: 'Omiñuka',
      email: 'admin-test-Mauro@Omiñuka.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Valentin',
      lastName: 'Tarayre',
      email: 'admin-test-Valentin@Tarayre.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Victor',
      lastName: 'Sanabria',
      email: 'admin-test-Victor@Sanabria.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Manuel',
      lastName: 'Francisco',
      email: 'admin-test-Manuel@Francisco.com',
      password: '$2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy', // TestPassword123!
      roleId: 2,
      image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
