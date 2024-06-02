const express = require("express");
const {
  getExperiencias,
  postExperiencia,
  putExperiencia,
} = require("../controller/experiencias.controller");

const experienciasRouter = express.Router();

experienciasRouter.get("/", getExperiencias);
experienciasRouter.post("/", postExperiencia);
experienciasRouter.put("/:id", putExperiencia);

module.exports = experienciasRouter;
