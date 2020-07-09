require('dotenv').config()

const app = require('./app')
const {appConfig} = require('./config')



app.listen(appConfig.port, ()=> console.log(`listen on port: ${appConfig.port}`))