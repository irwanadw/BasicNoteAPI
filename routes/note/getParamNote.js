const express = require('express')
const noteController = require('../../controllers/noteController')
const authorize = require('../../middlewares/authorizationMiddleware')
const errorMiddleware = require('../../middlewares/errorMiddleware')

const app = express()

app.use(authorize)

app.get('/note/param/:id', async (req, res, next) => {
  const { user, params } = req

  const result = await noteController
    .get({ userId: user.id, id: params.id })
    .catch((error) => {
      next(error)
    })
  if (result)
    res.send(result)
})

app.use(errorMiddleware)

module.exports = app