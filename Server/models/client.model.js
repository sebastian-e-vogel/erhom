const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
  nombreCliente: { type: String, required: true, unique: true },
  direccion: {type: String, required: true},

}, {timestamps: {createdAt: true, updateAt: true}}
);


model = mongoose.model("Client", ClientSchema)

module.exports = model