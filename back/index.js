const express = require("express");
const bodyParser = require("body-parser");
const configMensaje = require("./configMensaje"); // Corregido el uso de comillas
const cors = require("cors");
const path = require("path");

// Inicializar la aplicación Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Habilitar CORS

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
const { log } = require("console");

const PORT = process.env.PORT;

// Conectar a la base de datos
connect();

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());

app.use("/experiencias", experienciasRouter);
app.use("/reservas", reservasRouter);
app.use("/valoraciones", valoracionesRouter);
app.use("/users", userRouter);

app.use(notFoundHandler);
app.use(errorHandler);

// Ruta para manejar el envío del formulario
// app.post("/contacto", (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
//   res.status(200).send("Mensaje recibido");
// });

app.use("/", (req, res) => {
  res.json("Este es el home");
});

app.listen(PORT, () =>
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
