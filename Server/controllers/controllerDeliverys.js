const { Delivery } = require("../models/index");

const newDelivery = async (req, res) => {
  try {
    const {
      fleteroId,
      nombreCliente,
      direccionDesde,
      direccionHasta,
      fecha,
      precio,
      comentarios,
      viajeCobrado,
    } = req.body;
    await Delivery.create({
      fleteroId,
      nombreCliente,
      direccionDesde,
      direccionHasta,
      fecha,
      precio,
      comentarios,
      viajeCobrado,
    });
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

const deleteDelivery = (req, res) => {
  res.send({ status: "OK", message: "usuario deleted" });
  console.log(
    `aca se tiene que eliminar el siguiente usuario: ${req.params.id}`
  );
};

const updateDelivery = (req, res) => {
  res.send({ status: "OK", message: "user updated" });
  console.log(
    `aca se tiene que actualizar el siguiente usuario: ${req.params.id}`
  );
};
const getDeliverys = async (req, res) => {
  try{

    deliveries = await Delivery.find()

  res.send({ status: "OK", data: deliveries });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }

};
const getDelivery = (req, res) => {
  res.send({ status: "OK", message: `el usuario es ${req.params.id}` });
  console.log(
    `se trajo la informacion del siguiente usuario: ${req.params.id}`
  );
};

module.exports = {
  newDelivery,
  updateDelivery,
  deleteDelivery,
  getDeliverys,
  getDelivery,
};
