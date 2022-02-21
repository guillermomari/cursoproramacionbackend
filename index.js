const express = require('express')
const app = express()
const {controller} = require('./controlador')
const {agregar} = require('./agregar')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// parse application/json
app.use(bodyParser.json())


app.get('/',cors(), controller) 
app.post('/', agregar)


app.listen(3000)

