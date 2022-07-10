const activitiesService = require('../services/activities')

const getAll = async (req, res, next) => {
  try {
    const data = await activitiesService.getAll()
    res.status(200).json({
      data: data
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const data = await activitiesService.create(req.body, req.file)
    res.status(201).json({
      msg: 'Activity created successfully',
      data: data
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const data = await activitiesService.update(req.params.id, req.body, req.file)
    res.status(200).json({
      msg: 'Activity updated successfully',
      data: data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  create,
  update
}
