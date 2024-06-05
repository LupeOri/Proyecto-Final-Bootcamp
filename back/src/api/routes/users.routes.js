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
userRouter.get("/reservas", [isAuth], myReservas);
userRouter.get("/valoraciones", [isAuth], myValoraciones);

module.exports = userRouter;
