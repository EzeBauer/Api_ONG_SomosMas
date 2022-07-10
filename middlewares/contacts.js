// const commentsService = require('../services/comments');
// const usersServices = require('../services/users');
// const auth = require('../modules/auth');
// const rolesServices = require('../services/roles');

const isOwnComment = async (req, res, next) => {
  try {
    // const commentId = req.params.id;
    // const bearerToken = req.headers.authorization;

    // if (!bearerToken) throw new Error('Access denied');

    // const token = bearerToken.split(' ')[1];
    // const tokenPayload = auth.decodeToken(token);

    // const comment = await commentsService.getById(commentId);
    // if (!comment) throw new Error('Invalid id');

    // if (comment.user_id === tokenPayload.user_id) next();

    // const user = await usersServices.getById(tokenPayload.user_id);
    // if (!user) throw new Error('Access denied');

    // const adminRole = await rolesServices.getByName('Admin');
    // if (user.dataValues.roleId === adminRole.id) next();
    // throw new Error('Access denied');
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  isOwnComment
}
