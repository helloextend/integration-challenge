const express = require('express')
const path = require('path')

class Server {
  constructor() {
    const app = express()
    const port = 3001

    app.use('/assets', express.static(path.join(__dirname, '../client/assets')))
    app.use('/js', express.static(path.join(__dirname, '../client/js')))
    app.use('/css', express.static(path.join(__dirname, '../client/css')))

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    app.listen(port, () => console.log('Running on http://localhost:3001'))
  }
}

new Server()
