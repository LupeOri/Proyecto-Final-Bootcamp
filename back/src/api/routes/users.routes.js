const configMensaje = require("../../../configMensaje"); // Corregido el uso de comillas

const express = require("express");
const userRouter = express.Router();
const {
  register,
  login,
  logout,
  myValoraciones,
  myReservas,
} = require("../controller/users.controller");
const { isAuth } = require("../middleware/auth.middleware");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", [isAuth], logout);
userRouter.get("/myreservas", [isAuth], myReservas);
userRouter.get("/valoraciones", [isAuth], myValoraciones);

userRouter.post("/contacto", (req, res) => {
  console.log(req.body);
  configMensaje(req.body);
  res.status(200).send();
});

module.exports = userRouter;
