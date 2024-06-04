const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { validationPassword, validationEmail } = require("../../utils/validate");

const userSchema = new mongoose.Schema({
  tipo: {
    type: String,
    default: "invitado",
    enum: ["invitado", "anfitrion"],
    required: true,
  },
  nombre: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  imagen: { type: String, required: false },
  biografia: { type: String, required: false },
  valoraciones: {
    type: Schema.Types.ObjectId,
    ref: "valoracion",
    required: true,
  },
  reservas: [
    {
      type: Schema.Types.ObjectId,
      ref: "reserva",
      required: true,
    },
  ], //relacionada con usuario, cuando ya este creado debemos modificar esto y que quede como el de ExperienciaId
});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(setError("404", "The password does not meet the requirements"));
  }
  if (!validationEmail(this.email)) {
    return next(setError("404", "The email is not correct"));
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
