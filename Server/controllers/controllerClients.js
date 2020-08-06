const { Client } = require("../models/index");


const newClient = async (req, res) => {
  try {
    const { nombreCliente, direccion } = req.body;
    await Client.create({
      nombreCliente,
      direccion,
    });
    res.status(201).send({ success: true, message: req.body });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

const getClients = async (req, res) => {
  try {
    clients = await Client.find();

    res.send({ status: "OK", data: clients });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

module.exports = {
  newClient,
  deleteClient,
  getClients
};
