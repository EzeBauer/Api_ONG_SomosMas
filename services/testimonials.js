const testimonialsRepo = require('../repositories/testimonials')
const { paginate } = require('../modules/pagination')
const filesModule = require('../modules/files')

const remove = async (id) => {
  filesModule.deleteFile(testimonialsRepo.getImage(id))
  await testimonialsRepo.remove(id)
}

const create = async (body, imageFile) => {
  body.image = await filesModule.uploadFile(imageFile)
  const testimonial = await testimonialsRepo.create(body)
  return testimonial
}

const update = async (id, body, imageFile) => {
  const actualImage = await testimonialsRepo.getImage(id)
  body.image = await filesModule.updateImageHandler(imageFile || body.image, actualImage)
  const rowsCount = await testimonialsRepo.update(id, body)

  if (rowsCount[0] === 0) {
    throw new Error(`Testimonial ${id} don't exist`)
  };

  const testimonialUpdated = await testimonialsRepo.getById(id)
  return testimonialUpdated
}

const getAll = async (req) => {
  return paginate(testimonialsRepo.getAll, req, 10)
}

module.exports = {
  remove,
  create,
  getAll,
  update
}
