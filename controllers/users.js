const usersService = require('../services/users')

const update = async (req, res, next) => {
  try {
    const userUpdated = await usersService.update(req.params.id, req.body, req, req.file)
    res.status(200).json({ msg: `User ${userUpdated.id} updated succesfully`, data: userUpdated })
  } catch (error) {
    next(error)
  }
}
const remove = async (req, res, next) => {
  try {
    const user = await usersService.remove(req.params.id)
    res.status(200).json({ msg: `User ${req.params.id} was removed succesfully` })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  update,
  remove
}
