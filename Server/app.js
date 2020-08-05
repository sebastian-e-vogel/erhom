const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/')


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

routes(app)


module.exports = app