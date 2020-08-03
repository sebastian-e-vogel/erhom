const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeliverySchema = new Schema({
  fleteroId: { type: String, required: true},
  nombreCliente: { type: String, required: true },
  direccionDesde: { type: String, required: true },
  direccionHasta: { type: String, required: true },
  fecha: { type: Date, default: Date.now, required: true },
  precio: { type: Number, required: true },
  comentarios: { type: String },
  viajeCobrado: { type: Boolean, required: true },
}, {timestamps: {createdAt: true, updateAt: true}}
);


model = mongoose.model("Delivery", DeliverySchema)

module.exports = model