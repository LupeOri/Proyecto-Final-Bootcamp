const express = require("express");
const { getExperiencias } = require("../controller/experiencias.controller");

const experienciasRouter = express.Router();

experienciasRouter.get("/", getExperiencias);

module.exports = experienciasRouter;
