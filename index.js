const express = require('express')
const path = require('path')
const cors = require('cors')
const routerApi = require('./routes/index')

// create application
const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('chạy ' + port)
})

app.use(cors())
app.use(express.static(__dirname + '/public/'))

// def raiz route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/es/index.html'))
})

app.get('/api', (req, res) => {
  res.json(
    {
      characters: 'https://dragon-ball-super-api.herokuapp.com/api/characters'
    }
  )
})

routerApi(app)
