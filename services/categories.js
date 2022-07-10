const categoriesRepository = require('../repositories/categories')
const { paginate } = require('../modules/pagination')

// general function to verify the name
const uniqueName = async (name) => {
  const result = await categoriesRepository.findByName(name)

  if (result) {
    const error = new Error(`Name: ${name}, is not unique`)
    error.status = 400
    return error
  }
  return false
}

const categoryNotExist = async (id) => {
  const category = await categoriesRepository.getById(id)
  if (!category) {
    const error = new Error(`Resource with id ${id} not found`)
    error.status = 404
    throw error
  }
  return false
}

const create = async (category) => {
  // every name must be unique
  const error = await uniqueName(category.name)
  if (error) throw error

  return await categoriesRepository.create(category)
}

const getAll = async (req) => {
  return paginate(categoriesRepository.getAll, req, 10)
}

const remove = async (id) => {
  const errorId = await categoryNotExist(id)
  if (errorId) throw errorId
  await categoriesRepository.remove(id)
}

const getById = async (id) => {
  const category = await categoriesRepository.getById(id)
  if (!category) {
    const error = new Error(`Resource with id ${id} not found`)
    error.status = 404
    throw error
  }
  return category
}

const update = async ({ id }, category) => {
  const errorId = await categoryNotExist(id)
  if (errorId) throw errorId

  // every name must be unique
  const errorName = await uniqueName(category.name)
  if (errorName) throw errorName

  await categoriesRepository.update(id, category)

  return await categoriesRepository.getById(id)
}

module.exports = {
  create,
  remove,
  getById,
  getAll,
  update
}
