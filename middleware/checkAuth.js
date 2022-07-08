/**
 * Check request for authentication. Error if unauthorized.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
async function checkAuth(req, res, next) {
  // if not logged in send error
  if (!req.session.user) {
    res.json({ error: 'unauthorized' })
    return
  }

  // call into next middleware
  next()
}

module.exports = checkAuth
