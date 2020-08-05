const express = require("express");
const {
  newDelivery,
  deleteDelivery,
  updateDelivery,
  getDeliveries,
  getDelivery,
  
} = require("../controllers/controllerDeliveries");

const routerDeliveries = express.Router();

routerDeliveries.post("/newDelivery", newDelivery);
routerDeliveries.delete("/deleteDelivery/:id", deleteDelivery);
routerDeliveries.put("/updateDelivery/:id", updateDelivery);
routerDeliveries.get("/getAllDeliveries", getDeliveries);
routerDeliveries.get("/getDelivery/:id", getDelivery);

module.exports = routerDeliveries;
