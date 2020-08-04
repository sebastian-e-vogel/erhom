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

const deleteDelivery = async (req, res) => {
  try {
    await Delivery.deleteOne({ _id: req.params.id });
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

const updateDelivery = async (req, res) => {
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
    await Delivery.updateOne(
      { _id: req.params.id },
      {
        fleteroId,
        nombreCliente,
        direccionDesde,
        direccionHasta,
        fecha,
        precio,
        comentarios,
        viajeCobrado,
      }
    );
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }

};
const getDeliverys = async (req, res) => {
  try {
    deliveries = await Delivery.find();

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
