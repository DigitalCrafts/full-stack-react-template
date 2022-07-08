const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')

// GET /api/v1/users/register
router.post('/register', async (req, res) => {
  const { email, password } = req.body
  // if required fields missing, send error
  if (!email || !password) {
    return res.status(400).json({ error: 'missing email and/or password' })
  }
  // create new user in database and send success message
  const user = await models.User.create({ email, password })
  res.json({ success: 'registered successfully' })
})

// GET /api/v1/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  // if required fields missing, send error
  if (!email || !password) {
    return res.status(400).json({ error: 'missing email and/or password' })
  }
  // find user in database
  const user = await models.User.findOne({ where: { email } })
  // if no user found, send error
  if (!user) {
    return res.status(400).json({ error: 'email incorrect' })
  }
  // if password is invalid, send error
  const passwordValid = bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(400).json({ error: 'invalid password' })
  }
  // add user to session
  req.session.user = user
  res.status(201).json({ success: 'logged in successfully' })
})

// GET /api/v1/users/logout
router.get('/logout', async (req, res) => {
  req.session.user = null
  res.json({ success: 'logged out successfully' })
})

module.exports = router
