const membersService = require('../services/members')

const create = async (req, res, next) => {
  try {
    const member = await membersService.create(req.body, req.file)
    res.status(201).json({ msg: `The member ${member.name} was create succesfully`, data: member })
  } catch (error) {
    next(error)
  }
}
const remove = async (req, res, next) => {
  try {
    await membersService.remove(req.params.id)
    res.status(200).json({ msg: `Member ${req.params.id} removed succesfully` })
  } catch (error) {
    next(error)
  }
}
const update = async (req, res, next) => {
  try {
    const member = await membersService.update(req.params.id, req.body, req.file)
    res.status(201).json({ msg: `The member ${req.params.id} was updated succesfully` })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await membersService.getAll(req)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}
module.exports = {
  remove,
  update,
  create,
  getAll
}
