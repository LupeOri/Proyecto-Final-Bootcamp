const express = require("express");
const {
  getReservas,
  postReserva,
} = require("../controller/reservas.controller");
// const {
//   getExperiencias,
//   postExperiencia,
//   putExperiencia,
//   deleteExperiencia,
// } = require("../controller/experiencias.controller");

const reservasRouter = express.Router();

reservasRouter.get("/", getReservas);
reservasRouter.post("/", postReserva);
// experienciasRouter.put("/:id", putExperiencia);
// experienciasRouter.delete("/:id", deleteExperiencia);

module.exports = reservasRouter;
