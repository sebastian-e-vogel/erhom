config = {
    appConfig: { 
        port: process.env.APP_PORT 
    },
    mongoConfig: {
        mongoUrl: process.env.MONGO_URL
    },

}

module.exports = config