const testimonialsService = require('../services/testimonials')

const remove = async (req, res, next) => {
  try {
    await testimonialsService.remove(req.params.id)
    res.status(200).json({ msg: `Testimonial ${req.params.id} removed succesfully` })
  } catch (e) {
    next(e)
  }
}

const create = async (req, res, next) => {
  try {
    const data = await testimonialsService.create(req.body, req.file)
    res.status(201).json({ msg: 'Testimonial created succesfully', data: data })
  } catch (e) {
    next(e)
  }
}
const update = async (req, res, next) => {
  try {
    const testimonialUpdated = await testimonialsService.update(req.params.id, req.body, req.file)
    res.status(200).json({ msg: `Testimonial ${testimonialUpdated.id} updated succesfully`, data: testimonialUpdated })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const testimonials = await testimonialsService.getAll(req)

    res.status(200).json(testimonials)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  update,
  remove,
  getAll,
  create
}
