const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle PATCH request method at /note
app.patch('/user/:id', (req, res) => {
  // 👇 use req "params" property and use id property inserted at path
  const id = req.params.id
  // 👇 find the index number in notes that has the same id with the id inserted at request by using "findIndex" method
  const editedIndex = users.findIndex((user) => user.id === id)
  // 👇 access the notes with found index number and change the value based on what inserted in data property at body
  users[editedIndex] = req.body
  // 👇 send edited data
  res.send(users[editedIndex])
})

module.exports = app