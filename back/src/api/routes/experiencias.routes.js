const express = require("express");
const {
  getExperiencias,
  getExperienciaById,
  postExperiencia,
  putExperiencia,
  deleteExperiencia,
} = require("../controller/experiencias.controller");

const experienciasRouter = express.Router();

const { isAuth } = require("../middleware/auth.middleware");

experienciasRouter.get("/", getExperiencias);
experienciasRouter.get("/:id", getExperienciaById);
experienciasRouter.post("/", [isAuth], postExperiencia);
experienciasRouter.put("/:id", [isAuth], putExperiencia);
experienciasRouter.delete("/:id", [isAuth], deleteExperiencia);

module.exports = experienciasRouter;
