const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reservaSchema = new Schema({
  experiencias: [
    {
      type: Schema.Types.ObjectId,
      ref: "experiencia",
      required: true,
    },
  ],
  invitadoId: { type: Number, required: true }, //relacionada con usuario, cuando ya este creado debemos modificar esto y que quede como el de ExperienciaId
  fecha: { type: String, required: true },
  estado: {
    type: String,
    default: "a confirmar",
    enum: ["confirmada", "pendiente", "cancelada", "a confirmar"],
    required: true,
  },
  total: { type: Number, required: true },
});

const Reserva = mongoose.model("reserva", reservaSchema);

module.exports = Reserva;
