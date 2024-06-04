const express = require("express");
const {
  getValoraciones,
  getValoracionById,
  postValoracion,
  putValoracion,
  deleteValoracion,
} = require("../controller/valoraciones.controller");

const valoracionesRouter = express.Router();

valoracionesRouter.get("/", getValoraciones);
valoracionesRouter.get("/:id", getValoracionById);
valoracionesRouter.post("/", postValoracion);
valoracionesRouter.put("/:id", putValoracion);
valoracionesRouter.delete("/:id", deleteValoracion);

module.exports = valoracionesRouter;
