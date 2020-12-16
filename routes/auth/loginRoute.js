const express = require('express')
const userController = require('../../controllers/userController')
const errorMiddleware = require('../../middlewares/errorMiddleware')

const app = express.Router()

app.post('/auth/login', async (req, res, next) => {
  const { body } = req
  const result = await userController.login(body) // 👈 this is using userController methods
    .catch((error) => {
      next(error)
    })
  if (result)
    res.send(result)
})

app.use(errorMiddleware)

module.exports = app