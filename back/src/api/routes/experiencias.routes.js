const express = require("express");
const {
  getExperiencias,
  postExperiencia,
  putExperiencia,
  deleteExperiencia,
} = require("../controller/experiencias.controller");

const experienciasRouter = express.Router();

experienciasRouter.get("/", getExperiencias);
experienciasRouter.post("/", postExperiencia);
experienciasRouter.put("/:id", putExperiencia);
experienciasRouter.delete("/:id", deleteExperiencia);

module.exports = experienciasRouter;
