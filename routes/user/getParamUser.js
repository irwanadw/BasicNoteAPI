const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle request with param called id (see ":id")
app.get('/user/param/:id', (req, res) => {
  // 👇 access whatever inserted in param and save it to id variable
  const id = req.params.id
  // 👇 filter notes that has the same id with the id inserted at request by using "filter" method
  const foundUser = users.filter((user) => user.id === id)
  res.send(foundUser)
})

module.exports = app