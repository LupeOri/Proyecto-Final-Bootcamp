const express = require("express");
const {
  getReservas,
  getReservaById,
  postReserva,
  putReserva,
  deleteReserva,
} = require("../controller/reservas.controller");

const reservasRouter = express.Router();
const { isAuth } = require("../middleware/auth.middleware");

reservasRouter.get("/", [isAuth], getReservas);
reservasRouter.get("/:id", [isAuth], getReservaById);
reservasRouter.post("/", [isAuth], postReserva);
reservasRouter.put("/:id", [isAuth], putReserva);
reservasRouter.delete("/:id", [isAuth], deleteReserva);

module.exports = reservasRouter;
