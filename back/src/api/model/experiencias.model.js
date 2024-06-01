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
    enum: ["cena", "tour", "clases", "cocktails", "fiesta", "otras categorias"],
    require: true,
  }, //cena, tour, clases, etc
  anfitrion: { type: String, require: true },
  valoraciones: { type: String, require: true }, //relacion con usuario
  imagenes: { type: String, require: true }, //relacion con valoracion
});

const Experiencia = mongoose.model("experiencia", experienciaSchema);

module.exports = Experiencia;
