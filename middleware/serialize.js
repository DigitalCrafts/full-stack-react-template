const models = require('../models')

const serialize = async (req, res, next) => {
  if (req.session?.user) {
    // get user from database
    const user = await models.User.findByPk(req.session.user.id)
    // overload req.session
    req.session.user = user
  }

  // continue
  next()
}

module.exports = () => serialize
