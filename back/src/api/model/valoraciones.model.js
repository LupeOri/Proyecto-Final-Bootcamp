const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const valoracionSchema = new Schema({
  experienciaId: { type: Number, required: true }, //relacionada con experiencia, debemos modificar esto y hacer populate
  usuarioId: { type: String, required: true }, //relacionada con usuario, debemos modificar esto y hacer populate
  comentario: { type: Number, required: true },
  fecha: { type: Number, required: true },
  puntuacion: { type: Number, required: true },
});

// Faltaría el timestamps?

const Valoracion = mongoose.model("valoracion", valoracionSchema);

module.exports = Valoracion;
