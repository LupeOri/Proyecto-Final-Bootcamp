const Valoracion = require("../model/valoraciones.model");
const getValoraciones = async (req, res) => {
  try {
    // const allReservas = await Reserva.find().populate("experiencias");
    const allValoraciones = await Reserva.find().populate(
      "valoraciones",
      "valoracion comentario puntuacion"
    ); // Hemos comentado la linea anterior para que no pinte toda la información (por ejemplo el "__v"). En esta linea, después del populate("experiencias"), le estamos diciendo que nos pinte los campos "experiencia fecha estado total". Esto se escribe sin coma).
    return res.status(200).json(allValoraciones);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getValoracionById = async (req, res) => {
  try {
    const { id } = req.params; // El uso de const {id} es igual a const id = req.params.id
    const valoracion = await Valoracion.findById(id).populate(
      "valoraciones",
      "valoracion comentario puntuacion"
    );
    return res.status(200).json(valoracion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postValoracion = async (req, res) => {
  try {
    const newValoracion = new Valoracion(req.body);
    const createdValoracion = await newValoracion
      .save()
      .populate("valoraciones", "valoracion comentario puntuacion");

    return res.status(201).json(createdValoracion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putValoracion = async (req, res) => {
  // console.log(req.params);
  try {
    const { id } = req.params;
    const putValoracion = new Valoracion(req.body);
    putValoracion._id = id;
    const updatedValoracion = await Valoracion.findByIdAndUpdate(
      id,
      putValoracion
    ).populate("valoraciones", "valoracion comentario puntuacion");
    if (!updatedValoracion) {
      return res
        .status(404)
        .json({ message: "el id de esta reserva no existe" });
    }
    return res.status(200).json(updatedValoracion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteValoracion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedValoracion = await Reserva.findByIdAndDelete(id).populate(
      "valoraciones",
      "valoracion comentario puntuacion"
    );
    if (!deletedValoracion) {
      return res
        .status(404)
        .json({ message: "el id de esta reserva no existe" });
    }
    return res.status(200).json(deletedValoracion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getValoraciones,
  getValoracionById,
  postValoracion,
  putValoracion,
  deleteValoracion,
};
