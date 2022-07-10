const activitiesRepository = require('../repositories/activities')
const db = require('../models')
const filesModule = require('../modules/files')

const getAll = async () => {
  return await activitiesRepository.getAll()
}

const create = async (data, imageFile) => {
  data.image = await filesModule.uploadFile(imageFile)
  const activityCreated = await activitiesRepository.create(data)
  return activityCreated
}

const update = async (id, data, imageFile) => {
  const activity = await db.Activities.findByPk(id)
  if (activity == null) {
    const error = new Error(`Activity with id ${id} does not exist`)
    error.status = 404
    throw error
  }
  data.image = await filesModule.updateImageHandler(imageFile || data.image, activity.image)
  await activitiesRepository.update(id, data)
  const activityUpdated = await db.Activities.findByPk(id)
  return activityUpdated
}

module.exports = {
  getAll,
  create,
  update
}
