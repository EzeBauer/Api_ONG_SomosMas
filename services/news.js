const { paginate } = require('../modules/pagination')
const newsRepository = require('../repositories/news')
const categoriesRepository = require('../repositories/categories')
const filesModule = require('../modules/files')

const create = async (noveltyToCreate, imageFile) => {
  const newsCategory = await categoriesRepository.findByName('news')
  if (newsCategory && newsCategory.id) {
    noveltyToCreate.categoryId = newsCategory.id
  } else {
    // @TODO LOG TO DEVS. category 'news' not found
    noveltyToCreate.categoryId = null
  }
  noveltyToCreate.image = await filesModule.uploadFile(imageFile)
  const noveltyCreated = await newsRepository.create(noveltyToCreate)
  return noveltyCreated
}

const remove = async (id) => {
  const currentNovelty = await newsRepository.getById(id)
  if (currentNovelty === null) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
  await filesModule.deleteFile(currentNovelty.image)
  await newsRepository.remove(id)
}

const getById = async (id) => {
  const novelty = await newsRepository.getById(id)
  if (novelty === null) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
  return novelty
}

const update = async (id, noveltyToUpdate, imageFile) => {
  if (noveltyToUpdate.categoryId) {
    const categorySelected = await categoriesRepository.getById(noveltyToUpdate.categoryId)
    if (categorySelected === null) {
      const error = new Error(`Category with id ${noveltyToUpdate.categoryId} not found. Novelty not updated`)
      error.status = 400
      throw error
    }
  }
  const currentNovelty = await newsRepository.getById(id)
  if (currentNovelty === null) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
  noveltyToUpdate.image = await filesModule.updateImageHandler(imageFile || noveltyToUpdate.image, currentNovelty.image)
  await newsRepository.update(id, noveltyToUpdate)
  const noveltyUpdated = await newsRepository.getById(id)
  return noveltyUpdated
}

const getAll = async (req) => {
  const resObj = paginate(newsRepository.getAll, req, 10)
  return resObj
}

const getCommentsByNoveltyId = async (id) => {
  const novelty = await newsRepository.getCommentsByNoveltyId(id)
  if (!novelty) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
  return novelty.Comments
}

module.exports = {
  create,
  remove,
  getById,
  update,
  getAll,
  getCommentsByNoveltyId
}
