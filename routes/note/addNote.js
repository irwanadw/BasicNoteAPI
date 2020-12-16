const express = require('express')
const noteController = require('../../controllers/noteController')
const authorize = require('../../middlewares/authorizationMiddleware')
const errorMiddleware = require('../../middlewares/errorMiddleware')

const app = express()

app.use(authorize)

app.post('/note', async (req, res, next) => {
  const { user, body } = req

  const result = await noteController
    .add({ userId: user.id, ...body }) // 👈 this is using baseController methods! OOP Inheritance is "gutes Zeug!"
    .catch((error) => {
      next(error)
    })
  if (result)
    res.send(result)
})

app.use(errorMiddleware)

module.exports = app