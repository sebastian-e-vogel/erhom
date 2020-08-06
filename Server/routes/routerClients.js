const express = require("express");
const {
  newClient,
  deleteClient,
  getClients,
} = require("../controllers/controllerClients")

const routerClients = express.Router();

routerClients.post("/newClient", newClient);
routerClients.delete("/deleteClient/:id", deleteClient);
routerClients.get("/getAllClients", getClients);

module.exports = routerClients;
