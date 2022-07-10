const newsService = require('../services/news')

const create = async (req, res, next) => {
  try {
    const noveltyCreated = await newsService.create(req.body, req.file)
    res.status(201).json({ msg: 'Novelty created succesfully', data: noveltyCreated })
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    await newsService.remove(req.params.id)
    res.status(200).json({ msg: 'Novelty removed succesfully' })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const novelty = await newsService.getById(req.params.id)
    res.status(200).json({ data: novelty })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const noveltyUpdated = await newsService.update(req.params.id, req.body, req.file)
    res.status(200).json({ msg: 'Novelty updated succesfully', data: noveltyUpdated })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const resObj = await newsService.getAll(req)
    res.status(200).json(resObj)
  } catch (error) {
    next(error)
  }
}

const getCommentsByNoveltyId = async (req, res, next) => {
  try {
    const { id } = req.params
    const comments = await newsService.getCommentsByNoveltyId(id)
    res.status(200).json({ data: comments })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  remove,
  getById,
  update,
  getAll,
  getCommentsByNoveltyId
}
