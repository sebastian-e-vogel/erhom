const { Delivery } = require("../models/index");

const newDelivery = async (req, res) => {
  try {
    const {
      fleteroName,
      _idCliente,
      direccionDesde,
      direccionHasta,
      fecha,
      precio,
      comentarios,
      viajeCobrado,
    } = req.body;
    await Delivery.create({
      fleteroName,
      _idCliente,
      direccionDesde,
      direccionHasta,
      fecha,
      precio,
      comentarios,
      viajeCobrado,
    });
    res.status(201).send({ success: true, message: req.body });
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
      fleteroName,
      _idCliente,
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
        fleteroName,
        _idCliente,
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
const getDeliveries = async (req, res) => {
  try {
    deliveries = await Delivery.find()
      .populate("_idCliente", "nombreCliente")
      .select(
        "comentarios fleteroName direccionDesde direccionHasta fecha precio viajeCobrado"
      );

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
  getDeliveries,
  getDelivery,
};
