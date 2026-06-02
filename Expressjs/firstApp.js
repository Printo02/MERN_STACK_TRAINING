const express = require('express')
const app = express()
const port = 3000
const path = require('path')




app.get('/', (req, res) => {
  res.send('Hello World!, this is my first Express app')
})

app.get('/login', (req, res) => {
  res.send('Login page')
})

app.get('/registration', (req, res) => {
  res.send('Registration page get method')
})


app.post('/registration', (req, res) => {
  res.send('Registration page post method')
})

app.put('/registration', (req, res) => {
  res.send('Registration page put method')
})

app.delete('/registration', (req, res) => {
  res.send('Registration page delete method')
})


app.get('/htmlpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'first.html'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})