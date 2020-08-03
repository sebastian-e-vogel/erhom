const express = require("express");
const {
  newDelivery,
  deleteDelivery,
  updateDelivery,
  getDeliverys,
  getDelivery,
} = require("../controllers/controllerDeliverys");

const routerDeliverys = express.Router();

routerDeliverys.post("/newDelivery", newDelivery);
routerDeliverys.delete("/deleteDelivery/:id", deleteDelivery);
routerDeliverys.put("/updateDelivery/:id", updateDelivery);
routerDeliverys.get("/getAllDeliverys", getDeliverys);
routerDeliverys.get("/getDelivery/:id", getDelivery);

module.exports = routerDeliverys;
