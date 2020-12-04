const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle DELETE request method at /note
app.delete('/user/:id', (req, res) => {
  const id = req.params.id
  // 👇 filter the notes that have an id different as id inserted at request
  const updatedNotes = users.filter((note) => note.id !== id)
  // 👇 clear out notes item one by one with forEach loop
  users.forEach(() => { //looping for each array
    users.splice(0) //divide an array at index 0 that we  search 
  });
  // 👇 for filtered notes, push each filtered notes to notes array
  updatedNotes.forEach((updatdNote) => {
    users.push(updatdNote)
  })
  // 👇 send "Ok" to the user
  res.send('Ok')
})

module.exports = app