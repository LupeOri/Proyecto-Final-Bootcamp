const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const valoracionSchema = new Schema({
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
  comentario: { type: Number, required: true },
  fecha: { type: Number, required: true },
  puntuacion: { type: Number, required: true },
});

// Faltaría el timestamps?

const Valoracion = mongoose.model("valoracion", valoracionSchema);

module.exports = Valoracion;
