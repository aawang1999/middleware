const express = require('express')
const exphbs = require('express-handlebars')
const { randomId, logRequest, logResponse } = require('./tools')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

app.set('view engine', 'hbs')

app.use(function logMiddlewareInfo(req, res, next) {
  const [requestLog, requestUnixTime] = logRequest(req)
  console.log(requestLog)
  res.on('finish', () => {
    const responseLog = logResponse(res, requestUnixTime)
    console.log(responseLog)
  })
  next()
})

app.get('/', (req, res) => {
  const id = randomId()
  res.render('index', { id })
})

app.get('/new', (req, res) => {
  const id = randomId()
  res.render('index', { id })
})

app.get('/:id', (req, res) => {
  const id = randomId()
  res.render('index', { id })
})

app.post('/', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Express is running on port ${port}.`)
})