const express = require("express");
const {
  newClient,
  deleteClient,
} = require("../controllers/controllerClients")

const routerClients = express.Router();

routerClients.post("/newClient", newClient);
routerClients.delete("/deleteClient/:id", deleteClient);

module.exports = routerClients;
