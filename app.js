const express = require('express')
const app = express()
const port = 3000


let formattedTimeStamp = new Date().toLocaleString()


app.use((req, res, next) => {
  console.log(formattedTimeStamp, '|', req.method + ' from ' + req.originalUrl)
  next()
})


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send(`新增 Todo 頁面
    <form action='/' method='POST'>
        <input type='submit' value='POST'>
    <form>
  `)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})


app.listen(port, () => {
  console.log('Port 3000 is connected!')
})