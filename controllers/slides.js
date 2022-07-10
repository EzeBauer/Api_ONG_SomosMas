const slidesService = require('../services/slides')

const remove = async (req, res, next) => {
  try {
    await slidesService.remove(req.params.id)
    res.status(200).json({ msg: `Slide ${req.params.id} removed succesfully` })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await slidesService.getAll()

    res.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const data = await slidesService.getById(req.params.id)

    if (data) {
      res.status(200).json({ data: data })
    } else {
      res.status(400).json({ msg: 'Something went wrong, please try again later' })
    }
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const data = await slidesService.update(req.params.id, req.body, req.file)

    res.status(200).json({ msg: `Slide ${req.params.id} updated succesfully`, data: data.updates })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const data = await slidesService.create(req.body, req.file)

    res.status(201).json({ msg: 'Slide successfully created', data: data })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  remove,
  getAll,
  getById,
  create,
  update
}
