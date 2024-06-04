const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const experienciaSchema = new Schema({
  titulo: { type: String, require: true },
  descripcion: { type: String, require: true },
  ubicacion: { type: String, require: true },
  precio: { type: String, require: true },
  duracion: { type: String, require: true },
  categoria: {
    type: String,
    default: "otras categorias",
    enum: ["cena", "cata", "tour", "clases", "fiesta", "otras categorias"],
    require: true,
  }, //cena, tour, clases, etc
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true,
  },
  valoraciones: {
    type: Schema.Types.ObjectId,
    ref: "valoracion",
    required: true,
  },
  imagenes: { type: String, require: false },
});

// Middleware para convertir categoria a minúsculas antes de la validación
experienciaSchema.pre("validate", function (next) {
  if (this.categoria) {
    this.categoria = this.categoria.toLowerCase();
  }
  next();
});

const Experiencia = mongoose.model("experiencia", experienciaSchema);

module.exports = Experiencia;
