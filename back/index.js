const express = require("express");
const { connect } = require("./src/utils/db");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const app = express();
// connect();

app.use("/", (req, res) => {
  res.json("Esto es el home");
});

app.use("/experiencias", (req, res) => {
  res.json("Esto es el endpoint de experiencias");
});

app.listen(PORT, () =>
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
