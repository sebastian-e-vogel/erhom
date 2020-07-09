const express = require('express')
const routerViajes = require('./routes/viajesRoutes')

const app = express()


app.use('/v1', routerViajes)


module.exports = app