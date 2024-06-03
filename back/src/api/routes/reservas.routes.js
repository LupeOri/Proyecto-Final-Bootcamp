const express = require("express");
const {
  getReservas,
  getReservaById,
  postReserva,
  putReserva,
  deleteReserva,
} = require("../controller/reservas.controller");

const reservasRouter = express.Router();

reservasRouter.get("/", getReservas);
reservasRouter.get("/:id", getReservaById);
reservasRouter.post("/", postReserva);
reservasRouter.put("/:id", putReserva);
reservasRouter.delete("/:id", deleteReserva);

module.exports = reservasRouter;
