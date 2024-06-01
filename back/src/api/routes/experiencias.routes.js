const express = require("express");
const {
  getExperiencias,
  postExperiencia,
} = require("../controller/experiencias.controller");

const experienciasRouter = express.Router();

experienciasRouter.get("/", getExperiencias);
experienciasRouter.post("/", postExperiencia);

module.exports = experienciasRouter;
