const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reservaSchema = new Schema({
  experiencia: {
    type: Schema.Types.ObjectId,
    ref: "experiencia",
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true,
  },
  fecha: { type: String, required: true },
  estado: {
    type: String,
    default: "a confirmar",
    enum: ["confirmada", "pendiente", "cancelada", "a confirmar"],
    required: true,
  },
  total: { type: Number, required: true },
});

// Faltaría el timestamps?

const Reserva = mongoose.model("reserva", reservaSchema);

module.exports = Reserva;
