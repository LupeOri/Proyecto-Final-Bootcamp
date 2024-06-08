const express = require("express");
const cors = require("cors");
const path = require("path");

// Inicializar la aplicación Express
const app = express();

// Configurar CORS
app.use(cors());

const { connect } = require("./src/utils/db");
const dotenv = require("dotenv");
dotenv.config();
const {
  notFoundHandler,
  errorHandler,
} = require("./src/api/middleware/error.middleware");

const experienciasRouter = require("./src/api/routes/experiencias.routes");
const reservasRouter = require("./src/api/routes/reservas.routes");
const valoracionesRouter = require("./src/api/routes/valoraciones.routes");
const userRouter = require("./src/api/routes/users.routes");

const PORT = process.env.PORT;

// Conectar a la base de datos
connect();

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());

app.use("/experiencias", experienciasRouter);
app.use("/reservas", reservasRouter);
app.use("/valoraciones", valoracionesRouter);
app.use("/users", userRouter);

app.use("/", (req, res) => {
  res.json("Este es el home");
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
