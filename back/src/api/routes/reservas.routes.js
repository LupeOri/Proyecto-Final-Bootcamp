const express = require("express");
const {
  getReservas,
  getReservaById,
  postReserva,
  putReserva,
  deleteReserva,
  postPago,
} = require("../controller/reservas.controller");
const { isAuth } = require("../middleware/auth.middleware");

const reservasRouter = express.Router();

reservasRouter.get("/", [isAuth], getReservas);
reservasRouter.get("/:id", [isAuth], getReservaById);
reservasRouter.post("/", [isAuth], postReserva);
reservasRouter.put("/:id", [isAuth], putReserva);
reservasRouter.delete("/:id", [isAuth], deleteReserva);
reservasRouter.post("/pago", [isAuth], postPago);

module.exports = reservasRouter;
