const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const routerDeliverys = require('./routes/routerDeliverys')


const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/v1', routerDeliverys)


module.exports = app