const routerDeliveries = require("./routerDeliveries");
const routerClients = require("./routerClients");

module.exports = (app) => {
  app.use("/v1/", routerDeliveries);
  app.use("/v1/", routerClients);
};
