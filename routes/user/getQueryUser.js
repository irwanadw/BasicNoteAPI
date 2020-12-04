const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

app.get('/user/query', (req, res) => {
  // 👇 access search property in query and save it to search variable
  const search = req.query.search
  // 👇 filter notes that includes a same word with the search inserted at request by using "filter" method
  const foundNote = users.filter((user) => user.user.includes(search))
  res.send(foundNote)
})

module.exports = app