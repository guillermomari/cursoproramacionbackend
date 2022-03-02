const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const {creacionUsuarioscontroller} = require('./controladores/crear.controller.js')
const {borradoUsuarioscontroller} = require('./controladores/borrar.controller.js')
const {listadoUsuarioscontroller} = require('./controladores/listado.controller.js')
const {buscarUsuariocontroller} = require('./controladores/listaruno.controller.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// parse application/json
app.use(bodyParser.json())


app.post('/add',cors(),creacionUsuarioscontroller ) 
app.delete('/delete',cors(),borradoUsuarioscontroller ) 
app.get('/all',cors(),listadoUsuarioscontroller ) 
app.get('/getone',cors(),buscarUsuariocontroller ) 


app.listen(3000)

