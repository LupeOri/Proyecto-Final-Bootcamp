const express = require("express");
const { connect } = require("./src/utils/db");
const dotenv = require("dotenv");
dotenv.config();

const experienciasRouter = require("./src/api/routes/experiencias.routes");

const PORT = process.env.PORT;

const app = express();
connect();

app.use("/experiencias", experienciasRouter);

app.use("/", (req, res) => {
  res.json("Este es el home");
});

app.listen(PORT, () =>
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
